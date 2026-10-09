export const contacts = [
  {
    name: "Mickey Perry",
    phoneDisplay: "(830) 328-1411",
    phoneHref: "tel:+18303281411",
    phoneE164: "+1-830-328-1411",
    email: "mickey.perry-vps@outlook.com",
    emailHref: "mailto:mickey.perry-vps@outlook.com",
  },
  {
    name: "Michael Perry",
    phoneDisplay: "(830) 328-3074",
    phoneHref: "tel:+18303283074",
    phoneE164: "+1-830-328-3074",
    email: "michael.perry-vps@outlook.com",
    emailHref: "mailto:michael.perry-vps@outlook.com",
  },
] as const;

export const site = {
  name: "Vista Process Solutions",
  legalName: "Vista Process Solutions, LLC",
  shortName: "VPS",
  category: "Oil field equipment supplier",
  tagline: "On time, every time.",
  statement: "A company built on experience and integrity.",
  description:
    "Vista Process Solutions is the exclusive sales and service representative for SureFire Burner Management Systems in Texas, Oklahoma, Louisiana, and southern New Mexico.",
  phoneDisplay: contacts[0].phoneDisplay,
  phoneHref: contacts[0].phoneHref,
  phoneE164: contacts[0].phoneE164,
  email: contacts[0].email,
  emailHref: contacts[0].emailHref,
  streetAddress: "192 Laguna Rd",
  addressLocality: "Bandera",
  addressRegion: "TX",
  postalCode: "78003",
  address: "192 Laguna Rd, Bandera, TX 78003",
  addressHref: "https://maps.google.com/?q=192+Laguna+Rd,+Bandera,+TX+78003",
  hours: "Monday–Friday, 8 AM–5 PM",
  facebook: "https://www.facebook.com/vistaprocesssolutions/",
  territory:
    "Entire state of Texas, entire state of Oklahoma, entire state of Louisiana, and southern New Mexico",
  logo: "/brand/logo.jpg",
  logoWidth: 413,
  logoHeight: 123,
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const productNav = [
  { href: "/products", label: "SureFire Products" },
  { href: "/products/vps", label: "VPS Products" },
] as const;

export const nav = [
  { label: "Products", children: productNav },
  { href: "/solutions", label: "Solutions" },
  { href: "/service-area", label: "Service Area" },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  ...productNav,
  { href: "/solutions", label: "Solutions" },
  { href: "/service-area", label: "Service Area" },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/service", label: "Service and Support" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export const productInterestOptions = [
  "BMS Controllers",
  "FT Ignition Units",
  "Air Compressor Packages",
  "Components and Parts",
  "SF-50 Automated Pilot Maintainer",
  "Service or repair",
  "Not sure yet",
] as const;

export const locationOptions = ["Texas", "Oklahoma", "Louisiana", "New Mexico", "Other"] as const;

export type SpecRow = { label: string; value: string };

export type ProductModel = {
  name: string;
  summary: string;
  points: string[];
  image?: string;
  imageAlt?: string;
  imageFit?: "contain";
};

export type Product = {
  slug: string;
  name: string;
  card: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "contain";
  features: string[];
  applications: string[];
  specs: SpecRow[];
  models?: ProductModel[];
  notes?: string[];
};

export const products: Product[] = [
  {
    slug: "bms-controllers",
    name: "BMS Controllers",
    card: "Sequencing, flame proving, and fuel shutoff for fired oilfield equipment.",
    summary:
      "SureFire burner management controllers, supplied by VPS, supervise ignition and keep fuel from flowing when a flame is not proven. Match the controller to the equipment: a flare or combustor with a continuous pilot is a different job from a naturally drafted heater.",
    image: "/images/products/bms-300.png",
    imageAlt: "Red SureFire BMS-300 controller enclosure with status lights, a digital display, and a keypad",
    imageFit: "contain",
    features: [
      "Simple wire termination and a parameter setup a field tech can finish without a laptop in most cases",
      "Hot-surface ignition supervision, temperature control, and fuel-valve control, depending on the model",
      "Status indication for power, battery voltage, status codes, and flame strength",
      "Standby and shutdown inputs on the BMS-100, BMS-300, and BMS-350",
      "Optional adder-card features such as Modbus, called out per model below",
    ],
    applications: [
      "Combustors and flares that hold a continuous pilot",
      "Naturally drafted heaters, heater treaters, dehydrators, and line heaters",
      "Sites that need a controller rather than a relight from the fence line",
    ],
    specs: [
      { label: "Manufacturer", value: "SureFire BMS (sold and supported by VPS)" },
      { label: "Models covered here", value: "BMS-100, BMS-300, BMS-350" },
      { label: "Related unit", value: "SF-50 automated pilot maintainer (separate page)" },
      { label: "Supply voltage", value: "12 VDC, or 24 VDC with an adapter card" },
      { label: "Power draw", value: "7.8 A maximum, 0.6 A nominal" },
      { label: "Operating temperature", value: "−40°F to 131°F (−40°C to 55°C)" },
      { label: "Enclosure", value: "Polycarbonate, 12 × 10 × 6 in. IP66 / Type 4/4X" },
      {
        label: "Area classification",
        value: "Class I, Division 2, Groups A, B, C, and D; T4A. Class I, Zone 2, Group IIC (US only).",
      },
      { label: "Warranty", value: "Three years from the date of sale." },
    ],
    models: [
      {
        name: "BMS-100",
        summary: "Pilot maintainer for flare, combustor, or firetube applications with a continuous pilot.",
        image: "/images/products/bms-100.png",
        imageAlt: "Red SureFire BMS-100 controller enclosure",
        imageFit: "contain",
        points: [
          "Maintains the pilot and supervises it with a thermocouple",
          "Valve control, plus a standby/shutdown input",
          "Adder card can add read-only Modbus RS-485, a high-temperature thermocouple, a 4–20 mA input, and data logging",
        ],
      },
      {
        name: "BMS-300",
        summary: "Naturally drafted heaters. Temperature is read with an RTD.",
        image: "/images/products/bms-300.png",
        imageAlt: "Red SureFire BMS-300 controller enclosure",
        imageFit: "contain",
        points: [
          "Controls the fuel train in a pilotless or piloted arrangement",
          "Flame rod flame sensing and valve control",
          "Standby/shutdown input; read-only Modbus RS-485 is an adder-card option",
        ],
      },
      {
        name: "BMS-350",
        summary: "Fired equipment and combustors that need more than one temperature input.",
        image: "/images/products/bms-350.png",
        imageAlt: "Red SureFire BMS-350 controller enclosure",
        imageFit: "contain",
        points: [
          "Thermocouple or RTD temperature circuits",
          "Thermocouple or flame-rod flame sensing",
          "Pilotless or piloted fuel-train control",
          "Adder card can add Modbus RS-485 with read/write",
        ],
      },
    ],
    notes: [
      "The SF-50 is SureFire’s automated pilot maintainer for firetube and pit-flare work. It is listed on its own page because many sites need that unit instead of a full controller.",
    ],
  },
  {
    slug: "ft-ignition-units",
    name: "FT Ignition Units",
    card: "Pilotless and piloted ignition from a 1-inch, 125,000 BTU/hr burner up to the FT-8 at 1,500,000 BTU/hr.",
    summary:
      "SureFire FT and FTL-F ignition units use the company’s patented sparkless, hot-surface ignition. Pilotless firetube burners run from 1 inch (125,000 BTU/hr) through the 4-inch FT-8 (1,500,000 BTU/hr). Flare and combustor work uses the piloted FTL-F flame-front family.",
    image: "/images/products/ft-8.png",
    imageAlt: "SureFire FT-8-A ignition unit with a stainless perforated nozzle, red body, and armored cable",
    imageFit: "contain",
    features: [
      "Hot-surface ignition: no spark gap and no ignition coil",
      "Armored, flame-resistant, conduit-ready wiring on SureFire ignition assemblies",
      "Integrated flame sensing — flame rod, thermocouple, or both, depending on the model",
      "Pilotless direct ignition of the main burner on firetube sizes",
      "Flame-front pilots for combustors and enclosed or open flares",
    ],
    applications: [
      "Firetube heaters, heater treaters, dehydrators, and line heaters",
      "Combustors and enclosed flares",
      "Piloted flares that need a flame-front pilot in a harsh location",
    ],
    specs: [
      { label: "Manufacturer", value: "SureFire BMS (sold and supported by VPS)" },
      { label: "Ignition method", value: "Patented sparkless hot-surface ignition" },
      { label: "Pilotless range", value: "1 in / 125,000 BTU/hr through 4 in / 1,500,000 BTU/hr" },
      { label: "FT-8 rating", value: "4-inch NPT inlet, 4-inch air/gas mixer, 1,500,000 BTU/hr" },
      { label: "Nozzle and body", value: "Stainless steel nozzle and a high-grade aluminum body on the FT firetube units" },
      { label: "Flame arrestor testing", value: "Compliant with API RP 12N flame-arrestor testing" },
      { label: "Warranty", value: "Two years from purchase on FT and FTL-F ignition units" },
    ],
    models: [
      {
        name: "FT-1",
        summary: "Pilot for a firetube.",
        image: "/images/products/ft-1.png",
        imageAlt: "SureFire FT-1 pilot ignition unit with a stainless nozzle and red body",
        imageFit: "contain",
        points: [
          "Hot-surface ignition",
          "1/2-inch NPT gas inlet",
          "Rated 125,000 BTU/hr and above",
          "Flame sensing with thermocouple and flame rod",
        ],
      },
      {
        name: "FT-2",
        summary: "Pilotless firetube ignition for a 1-inch mixer.",
        image: "/images/products/ft-2.png",
        imageAlt: "SureFire FT-2A pilotless ignition unit",
        imageFit: "contain",
        points: [
          "Direct ignition of the main burner",
          "1-inch NPT inlet",
          "1-inch air/gas mixer at 125,000 BTU/hr",
          "Flame rod or thermocouple sensing",
        ],
      },
      {
        name: "FT-4",
        summary: "Pilotless firetube ignition for a 2-inch mixer.",
        image: "/images/products/ft-4.png",
        imageAlt: "SureFire FT-4-A pilotless ignition unit",
        imageFit: "contain",
        points: [
          "2-inch NPT inlet",
          "2-inch air/gas mixer at 500,000 BTU/hr",
          "Nozzles for horizontal or vertical firetubes",
          "Flame rod or thermocouple sensing",
        ],
      },
      {
        name: "FT-6",
        summary: "Pilotless firetube ignition for a 3-inch mixer.",
        image: "/images/products/ft-6.png",
        imageAlt: "SureFire FT-6-A pilotless ignition unit",
        imageFit: "contain",
        points: [
          "3-inch NPT inlet",
          "3-inch air/gas mixer at 1,000,000 BTU/hr",
          "Nozzles for horizontal or vertical firetubes",
          "Flame rod or thermocouple sensing",
        ],
      },
      {
        name: "FT-8",
        summary: "Pilotless firetube ignition for a 4-inch mixer. The largest FT unit.",
        image: "/images/products/ft-8.png",
        imageAlt: "SureFire FT-8-A ignition unit, the largest pilotless firetube burner",
        imageFit: "contain",
        points: [
          "4-inch NPT inlet",
          "4-inch air/gas mixer at 1,500,000 BTU/hr",
          "Nozzles for horizontal or vertical firetubes",
          "Flame rod or thermocouple sensing",
        ],
      },
      {
        name: "FTL-F-MINI",
        summary: "Piloted ignition for combustors and enclosed flares.",
        image: "/images/products/ftl-f-mini.png",
        imageAlt: "SureFire FTL-F-MINI piloted ignition assembly with a mounting plate",
        imageFit: "contain",
        points: [
          "1/4-inch NPT gas inlet",
          "Assemblies fitted to the stack or combustor",
          "Thermocouple flame sensing",
        ],
      },
      {
        name: "FTL-F-20 / 30 / 40",
        summary: "Piloted units for combustors and enclosed flares.",
        image: "/images/products/ftl-f-40.png",
        imageAlt: "SureFire FTL-F piloted flare assembly, the 20, 30, or 40 length",
        imageFit: "contain",
        points: ["1/4-inch NPT gas inlet", "Thermocouple flame sensing"],
      },
      {
        name: "FTL-F-72 / 96 / 200",
        summary: "Piloted flare pilots in three lengths.",
        image: "/images/products/ftl-f-200.png",
        imageAlt: "SureFire FTL-F long piloted flare assembly",
        imageFit: "contain",
        points: [
          "1/4-inch NPT gas inlet",
          "Pilot lengths of 5 ft, 7 ft, and 17 ft",
          "Thermocouple flame sensing",
        ],
      },
    ],
  },
  {
    slug: "air-compressor-packages",
    name: "Air Compressor Packages",
    card: "Solar and battery instrument air for remote pneumatics, so the site is not feeding controllers with field gas.",
    summary:
      "SureFire ACP-100 and ACP-200 packages make instrument air where there is no utility air. Replacing gas-powered pneumatic devices with compressed air is one of the practical ways operators cut methane from control loops on unmanned locations.",
    image: "/images/products/acp-100.png",
    imageAlt:
      "SureFire ACP-100 solar air compressor, shown from the panel side and from the enclosure and tank side",
    imageFit: "contain",
    features: [
      "Self-contained solar and battery power for locations without utility air or reliable grid power",
      "Enclosure, solar charge controller, mounting stand, and a 3-gallon storage tank",
      "Plug-and-play integration with pneumatic controllers, valves, and actuators",
      "Aimed at cutting natural gas that would otherwise run pneumatic devices",
    ],
    applications: [
      "Unmanned production sites that still use instrument air",
      "Retrofits that take pneumatic devices off supply gas",
      "Locations where a small, continuous-duty compressor is easier to support than a plant air header",
    ],
    specs: [
      { label: "Manufacturer", value: "SureFire BMS (sold and supported by VPS)" },
      { label: "Models", value: "ACP-100 and ACP-200" },
      { label: "Power input", value: "12 VDC" },
      { label: "Max power draw", value: "23 A" },
      { label: "Max working pressure", value: "200 psi" },
      { label: "Flow rate", value: "1.8 CFM" },
      { label: "Storage tank", value: "3 gallons" },
      {
        label: "ACP-100 power and storage",
        value: "200 W solar panel, 100 Ah battery, sized around 60–70 scf/day of instrument air.",
      },
      {
        label: "ACP-200 power and storage",
        value:
          "400 W solar panel, 200 Ah battery, sized around 120–140 scf/day of instrument air.",
      },
      {
        label: "Warranty",
        value:
          "90 days from the date of sale.",
      },
    ],
    models: [
      {
        name: "ACP-100",
        summary: "The smaller solar instrument-air package.",
        image: "/images/products/acp-100.png",
        imageAlt: "SureFire ACP-100 solar air compressor package on a stand",
        imageFit: "contain",
        points: ["200 W solar panel", "100 Ah battery", "Sized around 60–70 scf/day"],
      },
      {
        name: "ACP-200",
        summary: "The larger solar instrument-air package.",
        image: "/images/products/acp-200.png",
        imageAlt: "SureFire ACP-200 solar air compressor with the panel raised",
        imageFit: "contain",
        points: ["400 W solar panel", "200 Ah battery", "Sized around 120–140 scf/day"],
      },
    ],
  },
  {
    slug: "components-and-parts",
    name: "Components and Parts",
    card: "Valves, mixers, sensors, and service kits that keep a SureFire fuel train repairable.",
    summary:
      "VPS supplies the SureFire parts that sit around the controller and the ignition unit: actuator and solenoid valves, air/gas mixers, temperature sensors, and the kits techs actually consume. The point of stocking parts locally is less downtime when a rod, thermocouple, or valve is the only thing wrong.",
    image: "/images/products/actuator.png",
    imageAlt: "Red SureFire actuator mounted on a stainless ball valve, with a position indicator dome on top",
    imageFit: "contain",
    features: [
      "Fuel-train valves, including a factory-programmed actuator valve with 3-wire termination",
      "Fail-closed solenoid valves in stainless bodies",
      "Sensors and air-prep accessories for the fuel train and instrument air",
      "Replacement kits for the parts that wear: flame rods, sensing thermocouples, igniters, overlays, and CCAs",
    ],
    applications: [
      "New fuel trains built with a SureFire controller",
      "Repairs on existing SureFire installations in the territory",
      "Sites standardizing on one set of service kits",
    ],
    specs: [
      {
        label: "Actuator valve",
        value:
          "1-inch NPT ball valve, 3-wire, factory programmed. NEMA 7, 12 VDC, 200 in-lb, 15 lb. Class I, Division 1 and 2, Groups E, F, and G, as printed on the SureFire actuator spec sheet.",
      },
      {
        label: "Solenoid valves",
        value:
          "1/4-inch, 1-inch, and 2-inch. Fail-closed, stainless body. The 1-inch and 2-inch valves are 12 VDC, 4.5 W, 5–115 psi, Class I Division 1 and 2, Groups A, B, C, and D, and Class II, Groups E, F, and G.",
      },
      { label: "Accessories", value: "RTDs, thermocouples, slow-flow valve, pressure switch, pressure transducer, coalescing filter, air/gas mixers, regulators, voltage converters" },
      { label: "Service kits", value: "Flame rod, flame-sensing thermocouple, overlay, CCA, igniter" },
    ],
    models: [
      {
        name: "SureFire actuator valve",
        summary: "Opens and closes main fuel gas to the burner.",
        image: "/images/products/actuator.png",
        imageAlt: "Red SureFire actuator on a stainless ball valve",
        imageFit: "contain",
        points: [
          "Factory programmed and pre-wired",
          "3-wire termination",
          "1-inch NPT ball valve",
          "12 VDC, 200 in-lb, NEMA 7, 15 lb",
        ],
      },
      {
        name: "2-inch solenoid valve",
        summary: "Fail-closed isolation in a stainless body.",
        image: "/images/products/solenoid-2in.png",
        imageAlt: "SureFire 2-inch stainless solenoid valve",
        imageFit: "contain",
        points: ["Fail-closed, no field adjustment", "12 VDC, 4.5 W, 5–115 psi"],
      },
      {
        name: "1-inch solenoid valve",
        summary: "Fail-closed isolation in a stainless body.",
        image: "/images/products/solenoid-1in.png",
        imageAlt: "SureFire 1-inch stainless solenoid valve",
        imageFit: "contain",
        points: ["Fail-closed, no field adjustment", "12 VDC, 4.5 W, 5–115 psi"],
      },
      {
        name: "1/4-inch solenoid valve",
        summary: "The smallest fail-closed solenoid on the SureFire parts page.",
        image: "/images/products/solenoid-quarter.png",
        imageAlt: "SureFire 1/4-inch solenoid valve",
        imageFit: "contain",
        points: ["Stainless body", "Fail-closed, no field adjustment"],
      },
    ],
  },
  {
    slug: "sf-50",
    name: "SF-50 Automated Pilot Maintainer",
    card: "A standing-pilot maintainer for firetubes and pit flares when a full BMS is more than the site needs.",
    summary:
      "The SureFire SF-50 lights and holds a pilot, senses the flame, and operates the pilot valve from one device. It is built for firetube and pit-flare applications where the problem is repeated manual relights, not a lack of temperature control.",
    features: [
      "Automated standing-pilot ignition with built-in pilot valve control",
      "Igniter and flame sensing in the same device",
      "One-time setup, then the unit relights without a tech at the stack",
      "Digital readout, a run-status output, and data logging",
      "A simpler, lower-cost option where a full burner management controller is not required",
    ],
    applications: [
      "Firetube applications that still use a standing pilot",
      "Pit flares with gas that comes and goes",
      "Mobile and stationary flares that are lit from a push button today",
      "Sites still using a fence charger or another manual igniter",
    ],
    specs: [
      { label: "Manufacturer", value: "SureFire BMS (sold and supported by VPS)" },
      { label: "Role", value: "Automated pilot maintainer, not a full temperature-control BMS" },
      { label: "Flame sensing", value: "Igniter flame sensing" },
      { label: "Outputs", value: "Pilot valve control, run status, data logging, digital readout" },
      { label: "Supply voltage", value: "12 VDC or 24 VDC" },
      { label: "Power draw", value: "7.8 A maximum, 0.4 A nominal" },
      { label: "Operating temperature", value: "−40°F to 131°F (−40°C to 55°C)" },
      { label: "Enclosure", value: "NEMA 4X metallic, 10 × 8 × 6 in" },
      { label: "Warranty", value: "Two years from the date of sale." },
    ],
    image: "/images/products/sf-50.png",
    imageAlt: "SureFire SF-50 enclosure, a white box with the SureFire logo",
    imageFit: "contain",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function relatedProducts(slug: string) {
  return products.filter((product) => product.slug !== slug).slice(0, 3);
}

export type Feature = {
  title: string;
  body: string;
  icon: "flame" | "unlink" | "wind" | "shield" | "map";
  image?: string;
  imageAlt?: string;
  dark?: boolean;
};

export const features: Feature[] = [
  {
    title: "Sparkless ignition",
    body: "SureFire’s patented sparkless ignition is hot-surface technology. There is no gap to foul and no coil to fail. It is built for a long service life and a lower maintenance bill than spark ignition in wet, dirty production gas.",
    icon: "flame",
    image: "/images/features/feature-6.png",
    imageAlt: "Red line illustration of a SureFire hot-surface ignition nozzle",
    dark: true,
  },
  {
    title: "Pilotless burners",
    body: "On firetube equipment, a pilotless burner removes the pilot burner and the pilot fuel train. Fewer parts means fewer leak points and a lower cost to buy and to keep. Pilotless sizes run from 1 inch at 125,000 BTU/hr to 4 inches at 1,500,000 BTU/hr.",
    icon: "unlink",
    image: "/images/features/feature-2.png",
    imageAlt: "Outline illustration of a pilotless ignition nozzle on a dark background",
    dark: true,
  },
  {
    title: "Flame-front technology",
    body: "Flares and combustors are a different problem. SureFire’s flame-front pilots are built to light reliably in wind, poor gas, and remote stacks, and to stay within the design approach used for OOOO-series rules.",
    icon: "wind",
  },
  {
    title: "OOOOb / OOOOc design",
    body: "SureFire pairs a ventless fuel train with a pilotless burner so the package is designed to lower methane emissions. Whether a given site’s obligation is met still depends on the rule, the equipment, and the rest of the facility.",
    icon: "shield",
    image: "/images/features/epa-white.png",
    imageAlt: "EPA emblem in white",
    dark: true,
  },
  {
    title: "Local sales and service",
    body: "This is the VPS difference. The same company that quotes the package is in Texas, Oklahoma, Louisiana, and southern New Mexico when the unit needs a part, a startup, or a straight answer. SureFire builds the equipment. VPS represents it here.",
    icon: "map",
  },
];

export const outcomes = [
  {
    title: "Reduce emissions",
    body: "Ventless fuel trains, pilotless burners, and instrument air in place of supply gas are aimed at methane that would otherwise leave the site. Reportable results still belong to the facility and the rule that applies.",
  },
  {
    title: "Increase profit",
    body: "A burner that stays lit sells gas instead of flaring it on a failed relight. Dropping a pilot train also drops parts, fuel, and the truck rolls that go with them.",
  },
  {
    title: "Protect the environment",
    body: "Keeping gas in the line and out of the air is the practical version of environmental work on a production site. The equipment is a tool for that. It is not a substitute for how the site is operated.",
  },
] as const;

export type Solution = {
  slug: string;
  title: string;
  card: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  productSlugs: string[];
};

export const solutions: Solution[] = [
  {
    slug: "flares-and-combustors",
    title: "Flares and Combustors",
    card: "Pilot supervision and flame-front ignition for stacks that have to light in bad gas and bad weather.",
    lede: "A flare that will not light is both a safety problem and an emissions problem. VPS supplies SureFire controllers and flame-front pilots for combustors, enclosed flares, and piloted flares across the territory.",
    sections: [
      {
        heading: "What usually gets specified",
        paragraphs: [
          "Combustors and flares that hold a continuous pilot are the BMS-100’s job: pilot supervision with a thermocouple, valve control, and a second stage when the site needs it.",
          "The ignition hardware is the FTL-F family. Lengths and inlets differ — mini and 30/40 series for combustors and enclosed flares, and 5-, 7-, and 17-foot pilots for flare service. All of them use a 1/4-inch NPT gas inlet and thermocouple flame sensing.",
          "Pit flares and intermittent gas are often a better fit for the SF-50 than for a full heater controller. If the only requirement is a pilot that relights itself, say so on the quote request.",
        ],
      },
      {
        heading: "What to send with the inquiry",
        paragraphs: [
          "Stack or combustor type, pilot length if you know it, whether gas is continuous or intermittent, and the state. A photo of the existing igniter — fence charger included — is enough to start.",
        ],
      },
    ],
    productSlugs: ["bms-controllers", "ft-ignition-units", "sf-50"],
  },
  {
    slug: "firetube-and-heater-treaters",
    title: "Firetube and Heater Treaters",
    card: "Temperature control and pilotless firetube ignition for treaters, dehydrators, line heaters, and other process heaters.",
    lede: "Heater treaters, glycol dehydrators, and line heaters live or die by a stable firetube. VPS supplies SureFire’s heater controllers and the FT ignition series sized to the mixer you already have, or the one that should replace it.",
    sections: [
      {
        heading: "Controllers",
        paragraphs: [
          "The BMS-300 reads an RTD and runs the fuel train pilotless or piloted. The BMS-350 is the step up when you need more than one temperature input, and it can sense flame with a thermocouple or a flame rod. Both accept a standby/shutdown input.",
          "If the heater still uses a standing pilot and you are not ready to change the fuel train, the SF-50 maintains that pilot without turning the skid into a controls project.",
        ],
      },
      {
        heading: "Ignition size",
        paragraphs: [
          "Pilotless FT units track the air/gas mixer. FT-2 is the 1-inch, 125,000 BTU/hr unit. FT-4 is 2-inch at 500,000. FT-6 is 3-inch at 1,000,000. FT-8 is 4-inch at 1,500,000. Horizontal and vertical nozzles are available from the FT-4 up.",
          "The FT-1 remains the choice when the firetube still wants a separate pilot, with a 1/2-inch inlet and both thermocouple and flame-rod sensing.",
        ],
      },
      {
        heading: "What to send with the inquiry",
        paragraphs: [
          "Vessel type, firetube diameter or mixer size, horizontal or vertical, fuel gas quality if it is a known problem, and whether you want to keep a pilot. Location in Texas, Oklahoma, Louisiana, or New Mexico is enough for VPS to say whether the site is in territory.",
        ],
      },
    ],
    productSlugs: ["bms-controllers", "ft-ignition-units", "sf-50", "components-and-parts"],
  },
  {
    slug: "emissions-compliance",
    title: "Emissions Compliance",
    card: "Ventless fuel trains, pilotless burners, and instrument air — design choices operators use when OOOOb and OOOOc are on the permit.",
    lede: "EPA rules OOOOb and OOOOc pushed methane from production equipment into day-to-day operating decisions. SureFire’s approach, available through VPS, is mechanical: stop venting the fuel train, stop burning fuel just to hold a pilot where a pilotless burner will do, and take pneumatics off supply gas.",
    sections: [
      {
        heading: "What the equipment is designed to change",
        paragraphs: [
          "A ventless fuel train does not dump gas as part of normal valve operation. A pilotless burner deletes the fuel that existed only to keep a pilot lit. An ACP air compressor package gives instrument air to devices that used to run on field gas.",
          "Those are design features. They are not a determination that your facility complies with OOOOb, OOOOc, or a state permit. Applicability depends on the source, the date, and the rest of the site. Your environmental staff or counsel should make that call. VPS will help you describe what the package does and does not include.",
        ],
      },
      {
        heading: "A practical starting point",
        paragraphs: [
          "List the fired equipment and the gas-driven pneumatics you are trying to address. VPS can separate what a BMS, an FT unit, an SF-50, or an air compressor actually changes, and what still has to be handled another way.",
        ],
      },
    ],
    productSlugs: ["bms-controllers", "ft-ignition-units", "air-compressor-packages"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export type StatePage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const statePages: StatePage[] = [
  {
    slug: "texas",
    name: "Texas",
    title: "Burner Management Systems in Texas",
    description:
      "SureFire BMS sales and service for Texas operators. Vista Process Solutions covers the entire state — flares, firetubes, and emissions-driven retrofits.",
    lede: "Every site in Texas is inside VPS territory. That includes the Permian Basin, the Eagle Ford, the Haynesville, the Barnett, and Gulf Coast production — not as branch offices, but as country VPS is responsible for covering with SureFire burner management equipment and local support.",
    sections: [
      {
        heading: "What Texas operators call about",
        paragraphs: [
          "Heater treaters and line heaters that will not hold a flame, combustors lighting off a fence charger, and pneumatic controllers still running on supply gas. The equipment answer is usually a SureFire controller, an FT or FTL-F ignition unit, an SF-50, or an air compressor package — sometimes a valve and a flame rod, not a new skid.",
          `VPS is the sales and service representative. SureFire designs and builds the systems, including the patented sparkless ignition. Quotes, parts questions, and startup help for Texas locations come through ${contacts[0].name} at ${contacts[0].phoneDisplay} or ${contacts[1].name} at ${contacts[1].phoneDisplay}.`,
        ],
      },
      {
        heading: "Statewide, on purpose",
        paragraphs: [
          "Coverage is the entire state, not a list of counties around the Bandera office at 192 Laguna Rd. If the location is in Texas, start with a call or a quote request and include the county.",
        ],
      },
    ],
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    title: "Burner Management Systems in Oklahoma",
    description:
      "SureFire burner management sales and service across Oklahoma. VPS supports flares, heater treaters, and pilotless firetube upgrades statewide.",
    lede: "Oklahoma is covered wall to wall. SCOOP, STACK, the Anadarko, and the Panhandle are all inside the same agreement: Vista Process Solutions supplies and supports SureFire burner management systems for operators and the contractors who keep their fired equipment running.",
    sections: [
      {
        heading: "Fired equipment VPS sees in Oklahoma",
        paragraphs: [
          "Heater treaters and dehydrators on mid-continent gas, tank-battery combustors, and the occasional pit flare that gets relit more often than it should. Pilotless FT units are sized to the mixer — 125,000 BTU/hr at 1 inch through 1,500,000 BTU/hr at 4 inches — and flare work moves to flame-front pilots instead of a firetube nozzle.",
          "The office is in Bandera, Texas. There is no Oklahoma storefront. The commitment is coverage: sales, parts, and service support for any site in the state.",
        ],
      },
      {
        heading: "How to start",
        paragraphs: [
          `Call ${contacts[0].name} at ${contacts[0].phoneDisplay} or ${contacts[1].name} at ${contacts[1].phoneDisplay}, or send the quote form with the county, the vessel, and whether the burner is piloted today. If you are comparing a full BMS-300 or BMS-350 against an SF-50 pilot maintainer, say what you need the unit to control. Temperature control and a standing pilot are different scopes.`,
        ],
      },
    ],
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    title: "Burner Management Systems in Louisiana",
    description:
      "SureFire burner management sales and service across Louisiana. VPS supports flares, heater treaters, and pilotless firetube upgrades statewide.",
    lede: "Louisiana is covered statewide. The Haynesville in the northwest and Gulf Coast production are inside the same agreement: Vista Process Solutions supplies and supports SureFire burner management systems. The office is in Bandera, Texas. There is no Louisiana storefront.",
    sections: [
      {
        heading: "Fired equipment in Louisiana",
        paragraphs: [
          "Heater treaters, line heaters, and combustors on Haynesville and Gulf Coast production are the usual call. Pilotless FT units are sized to the mixer — 125,000 BTU/hr at 1 inch through 1,500,000 BTU/hr at 4 inches — and flare work moves to flame-front pilots instead of a firetube nozzle.",
          "The office stays in Bandera, Texas. Coverage means sales, parts, and service support for any site in the state, not a second address.",
        ],
      },
      {
        heading: "How to start",
        paragraphs: [
          `Call ${contacts[0].name} at ${contacts[0].phoneDisplay} or ${contacts[1].name} at ${contacts[1].phoneDisplay}, or send the quote form with the parish, the vessel, and whether the burner is piloted today. If you are comparing a full BMS-300 or BMS-350 against an SF-50 pilot maintainer, say what you need the unit to control. Temperature control and a standing pilot are different scopes.`,
        ],
      },
    ],
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    title: "Burner Management Systems in Southern New Mexico",
    description:
      "SureFire BMS for southern New Mexico operators. VPS covers the southern part of the state, including Permian work on the New Mexico side. Northern New Mexico is outside that territory.",
    lede: "VPS covers southern New Mexico, not the whole state. The southeast — the New Mexico side of the Permian and Delaware, around Hobbs, Lovington, Eunice, Jal, Carlsbad, and Artesia — is the oilfield country this agreement is built for. A hard county line is not published here. If the site might be near the edge, call.",
    sections: [
      {
        heading: "Southern New Mexico only",
        paragraphs: [
          "Do not assume coverage in Farmington, the San Juan Basin, or the northern half of the state. Those locations are outside the territory described for VPS. SureFire’s own manufacturing presence in New Mexico is not the same thing as VPS’s sales territory, and this site will not blur the two.",
          `If you operate near Roswell, Alamogordo, Las Cruces, Deming, or anywhere you would fairly call southern New Mexico, call ${contacts[0].name} at ${contacts[0].phoneDisplay} or ${contacts[1].name} at ${contacts[1].phoneDisplay} before you spec the job. VPS would rather tell you straight than leave a gap in a bid.`,
        ],
      },
      {
        heading: "Equipment that fits this country",
        paragraphs: [
          "Remote batteries, combustors, and firetube treaters in the southeast are the usual fit for SureFire controllers, FT ignition units, and solar air-compressor packages. Instrument air matters here because a lot of pneumatics still sit miles from a plant air header. Emissions questions around OOOOb and OOOOc can start with what a ventless fuel train and a pilotless burner change — and what they do not certify.",
        ],
      },
    ],
  },
];

export function getStatePage(slug: string) {
  return statePages.find((page) => page.slug === slug);
}

export const serviceItems = [
  {
    title: "Equipment selection",
    body: "Matching a SureFire controller, ignition unit, or compressor package to the vessel, the burner size, and the rule you are working under.",
  },
  {
    title: "Startup help",
    body: "VPS starts SureFire equipment up on location in Texas, Oklahoma, Louisiana, and southern New Mexico. Call or send the service form to schedule it.",
  },
  {
    title: "Parts",
    body: "Flame rods, thermocouples, igniters, valves, and the other SureFire service kits listed on the components page.",
  },
  {
    title: "Troubleshooting",
    body: "If a unit will not light, call VPS. Phone support is available 24/7, and a technician can come to the site inside the territory.",
  },
] as const;

export const programs = [
  {
    title: "Quote within 24 hours",
    body: "Send the equipment and the state. VPS returns a SureFire quote within 24 hours.",
  },
  {
    title: "In-stock assemblies",
    body: "In-stock SureFire assemblies ship in 3–5 business days after the order is received.",
  },
  {
    title: "24/7 customer support",
    body: "Customer support is available around the clock for equipment VPS supplied in the territory.",
  },
  {
    title: "Try Before You Buy",
    body: "Ask VPS to send a unit for a 30-day trial. If it is not the right fit, return it. Outbound shipping is covered. Return shipping is the customer’s.",
  },
] as const;

export const values = [
  {
    title: "Experience",
    body: "Oilfield fired equipment is not a catalog exercise. The people who specify a burner management system should know what a bad fuel-gas day looks like, and what a tech can actually finish before dark. [ADD A SPECIFIC EXAMPLE OF FIELD EXPERIENCE, IF VPS WANTS ONE PUBLISHED].",
  },
  {
    title: "Integrity",
    body: "VPS sells and services SureFire equipment. VPS does not manufacture it and did not design the sparkless ignition patent. If a site is outside the territory, including northern New Mexico, the answer will say so.",
  },
] as const;

export function organizationJsonLd() {
  const url = getSiteUrl();
  const contactPoint = contacts.map((person) => ({
    "@type": "ContactPoint",
    name: person.name,
    telephone: person.phoneE164,
    email: person.email,
    contactType: "customer support",
  }));
  const telephones = contacts.map((person) => person.phoneE164);
  const emails = contacts.map((person) => person.email);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: site.legalName,
        url,
        telephone: telephones,
        email: emails,
        contactPoint,
        logo: absoluteUrl(site.logo),
        slogan: site.tagline,
        description: site.description,
        sameAs: [site.facebook],
        address: {
          "@type": "PostalAddress",
          streetAddress: site.streetAddress,
          addressLocality: site.addressLocality,
          addressRegion: site.addressRegion,
          postalCode: site.postalCode,
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "State", name: "Texas" },
          { "@type": "State", name: "Oklahoma" },
          { "@type": "State", name: "Louisiana" },
          { "@type": "AdministrativeArea", name: "Southern New Mexico" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#localbusiness`,
        name: site.legalName,
        url,
        telephone: telephones,
        email: emails,
        contactPoint,
        image: absoluteUrl(site.logo),
        slogan: site.tagline,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.streetAddress,
          addressLocality: site.addressLocality,
          addressRegion: site.addressRegion,
          postalCode: site.postalCode,
          addressCountry: "US",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        parentOrganization: { "@id": `${url}/#organization` },
        areaServed: [
          { "@type": "State", name: "Texas" },
          { "@type": "State", name: "Oklahoma" },
          { "@type": "State", name: "Louisiana" },
          { "@type": "AdministrativeArea", name: "Southern New Mexico" },
        ],
      },
    ],
  };
}
