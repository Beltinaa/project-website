export type ServiceId = "rendering" | "formwork" | "landscaping" | "groundworks";

export type ServiceCard = {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
  href: string;
  featured?: boolean;
};

export const serviceCards: ServiceCard[] = [
  {
    id: "rendering",
    title: "Rendering",
    description:
      "Premium render systems with flawless finishes, long-term protection, and approved K Rend & Weber application.",
    image: "/images/rendering-09.jpg",
    href: "/rendering",
    featured: true,
  },
  {
    id: "formwork",
    title: "Formwork & Framework",
    description:
      "Precision timber and steel formwork delivering compliant structural frameworks for residential and commercial builds.",
    image: "/images/rendering-02.jpg",
    href: "/services#formwork",
  },
  {
    id: "landscaping",
    title: "Hard Landscaping",
    description:
      "Architectural patios, driveways, and retaining walls built with premium materials and lasting durability.",
    image: "/images/rendering-06.jpg",
    href: "/services#landscaping",
  },
  {
    id: "groundworks",
    title: "Civil Engineering & Groundworks",
    description:
      "Foundations, drainage, and site preparation delivered by a safety-first, CSCS-certified workforce.",
    image: "/images/rendering-07.jpg",
    href: "/services#groundworks",
  },
];

export const serviceDetails = {
  rendering: {
    title: "Rendering — Our Core Speciality",
    paragraphs: [
      "KYR Construction Ltd are dedicated rendering specialists, trusted for premium finishes across residential and commercial properties. We are approved applicators of K Rend and Weber systems, delivering silicone, monocouche, and insulated render solutions with exceptional durability and colour stability.",
      "Every render project begins with a detailed survey, substrate assessment, and specification plan to ensure perfect adhesion, weather performance, and long-term value. Our teams apply modern render systems to new builds, refurbishments, and façade upgrades with meticulous preparation and clean detailing.",
      "From refined contemporary facades to traditional elevations, we deliver crisp lines, consistent texture, and a finish built to perform in the UK climate."
    ],
    image: "/images/rendering-01.jpg",
    cta: "Discuss Your Rendering Project",
  },
  formwork: {
    title: "Formwork & Framework",
    paragraphs: [
      "We deliver high-precision timber and steel formwork for residential and commercial concrete structures. Our team plans each phase to meet load-bearing standards, dimensional tolerances, and build schedules.",
      "From foundations and retaining walls to complex structural frameworks, we provide safe, compliant installations with full structural compliance. Every formwork system is built to specification with attention to stability, accuracy, and site safety.",
    ],
    image: "/images/rendering-03.jpg",
    cta: "Request a Quote",
  },
  landscaping: {
    title: "Hard Landscaping",
    paragraphs: [
      "Our hard landscaping service focuses on premium outdoor builds that combine structural integrity with architectural quality. We deliver patios, driveways, retaining walls, block paving, garden walls, steps, and natural stone finishes with precise detailing.",
      "Every project is delivered with a focus on drainage, levels, and long-term durability, ensuring outdoor spaces look sharp and perform in all seasons."
    ],
    image: "/images/rendering-04.jpg",
    cta: "Request a Quote",
  },
  groundworks: {
    title: "Civil Engineering & Groundworks",
    paragraphs: [
      "KYR provides groundworks and civil engineering solutions including excavation, site preparation, foundations, drainage, and utility installations. Our CSCS-certified workforce operates with strict safety standards and full regulatory compliance.",
      "We coordinate groundworks with broader construction timelines to deliver a clean, stable, and fully compliant base for onward construction."
    ],
    image: "/images/rendering-05.jpg",
    cta: "Request a Quote",
  },
};
