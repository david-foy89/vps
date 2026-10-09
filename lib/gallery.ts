import { products } from "@/lib/site-config";

export type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  href?: string;
  fit: "cover" | "contain";
};

export type GallerySection = {
  id: string;
  title: string;
  lede: string;
  photos: GalleryPhoto[];
};

const fieldPhotos: GalleryPhoto[] = [
  {
    src: "/images/field-install.jpg",
    alt: "Heater treater on a production site, with a burner management controller mounted on the vessel",
    title: "Heater treater in the field",
    caption:
      "A heater treater with burner management mounted on the vessel. This is a field photo. It is not a named customer installation.",
    fit: "cover",
  },
];

function equipmentPhotos(): GalleryPhoto[] {
  const seen = new Set<string>();
  const photos: GalleryPhoto[] = [];

  for (const product of products) {
    const shots = product.models?.length
      ? product.models.map((model) => ({
          src: model.image,
          alt: model.imageAlt,
          title: model.name,
        }))
      : [{ src: product.image, alt: product.imageAlt, title: product.name }];

    for (const shot of shots) {
      if (!shot.src || seen.has(shot.src)) continue;
      seen.add(shot.src);
      photos.push({
        src: shot.src,
        alt: shot.alt ?? product.imageAlt ?? product.name,
        title: shot.title,
        caption: `SureFire equipment photo. SureFire builds it. VPS supplies and supports it.`,
        href: `/products/${product.slug}`,
        fit: "contain",
      });
    }
  }

  return photos;
}

export const gallerySections: GallerySection[] = [
  {
    id: "field",
    title: "In the field",
    lede: "Fired equipment on a production site. VPS does not publish customer names or logos here.",
    photos: fieldPhotos,
  },
  {
    id: "equipment",
    title: "SureFire equipment",
    lede: "Model photos from SureFire. These are product pictures, not pictures of a VPS shop or a named job.",
    photos: equipmentPhotos(),
  },
];
