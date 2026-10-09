import { readFileSync } from "node:fs";

const geo = JSON.parse(readFileSync(process.env.TEMP + "/us-states.json", "utf8"));
const want = ["Texas", "Oklahoma", "New Mexico", "Louisiana"];
const byName = Object.fromEntries(
  geo.features.filter((f) => want.includes(f.properties.name)).map((f) => [f.properties.name, f]),
);

function albers(lon, lat) {
  const rad = Math.PI / 180;
  const φ1 = 29.5 * rad;
  const φ2 = 36.5 * rad;
  const φ0 = 32 * rad;
  const λ0 = -100 * rad;
  const n = (Math.sin(φ1) + Math.sin(φ2)) / 2;
  const C = Math.cos(φ1) ** 2 + 2 * n * Math.sin(φ1);
  const ρ0 = Math.sqrt(C - 2 * n * Math.sin(φ0)) / n;
  const ρ = Math.sqrt(C - 2 * n * Math.sin(lat * rad)) / n;
  const θ = n * (lon * rad - λ0);
  return [ρ * Math.sin(θ), ρ0 - ρ * Math.cos(θ)];
}

function ringsOf(feature) {
  const g = feature.geometry;
  if (g.type === "Polygon") return g.coordinates;
  if (g.type === "MultiPolygon") return g.coordinates.flat();
  return [];
}

function clipRing(ring, latCut, keepSouth) {
  if (ring.length < 2) return [];
  const closed = ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]
    ? ring
    : [...ring, ring[0]];
  const inside = (pt) => (keepSouth ? pt[1] <= latCut : pt[1] >= latCut);
  const out = [];
  for (let i = 0; i < closed.length - 1; i++) {
    const a = closed[i];
    const b = closed[i + 1];
    const aIn = inside(a);
    const bIn = inside(b);
    if (aIn && bIn) out.push(a);
    else if (aIn !== bIn && b[1] !== a[1]) {
      const t = (latCut - a[1]) / (b[1] - a[1]);
      const hit = [a[0] + t * (b[0] - a[0]), latCut];
      if (aIn) out.push(hit);
      else out.push(hit);
    }
  }
  if (out.length < 3) return [];
  out.push(out[0]);
  return out;
}

function perpDist(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  return Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / len;
}

function simplify(points, tol) {
  if (points.length < 4) return points;
  const open = points.slice(0, -1);
  function dp(pts) {
    if (pts.length < 3) return pts;
    let max = 0;
    let idx = 0;
    for (let i = 1; i < pts.length - 1; i++) {
      const d = perpDist(pts[i], pts[0], pts[pts.length - 1]);
      if (d > max) {
        max = d;
        idx = i;
      }
    }
    if (max > tol) {
      const left = dp(pts.slice(0, idx + 1));
      const right = dp(pts.slice(idx));
      return left.slice(0, -1).concat(right);
    }
    return [pts[0], pts[pts.length - 1]];
  }
  const simplified = dp(open);
  simplified.push(simplified[0]);
  return simplified;
}

const pieces = [];
for (const ring of ringsOf(byName["New Mexico"])) {
  const north = clipRing(ring, 34, false);
  const south = clipRing(ring, 34, true);
  if (north.length) pieces.push({ name: "nm-north", ring: north });
  if (south.length) pieces.push({ name: "nm-south", ring: south });
}
for (const name of ["Texas", "Oklahoma", "Louisiana"]) {
  for (const ring of ringsOf(byName[name])) {
    if (ring.length > 8) pieces.push({ name, ring });
  }
}

const projected = pieces.map((piece) => ({
  name: piece.name,
  pts: piece.ring.map(([lon, lat]) => albers(lon, lat)),
}));

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const piece of projected) {
  for (const [x, y] of piece.pts) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
}

const pad = 28;
const width = 860;
const height = 520;
const scale = Math.min((width - pad * 2) / (maxX - minX), (height - pad * 2) / (maxY - minY));
const ox = pad - minX * scale;
const oy = pad - minY * scale;

function mapPoint([x, y]) {
  return [x * scale + ox, height - (y * scale + oy)];
}

const tol = 0.7;
for (const piece of projected) {
  const mapped = simplify(piece.pts.map(mapPoint), tol);
  const d = mapped
    .map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(" ") + " Z";
  let cx = 0, cy = 0;
  const open = mapped.slice(0, -1);
  for (const p of open) {
    cx += p[0];
    cy += p[1];
  }
  cx /= open.length;
  cy /= open.length;
  console.log(`\n## ${piece.name} raw=${piece.pts.length} pts=${open.length} label=${cx.toFixed(0)},${cy.toFixed(0)}`);
  console.log(d);
}

console.log(`\nviewBox 0 0 ${width} ${height}`);
