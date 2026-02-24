export type ServiceId = "rendering" | "landscaping";

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
      "Premium render systems delivering refined finishes, weather protection, and K Rend & Weber approval.",
    image: "/images/rendering-09.webp",
    href: "/rendering",
  },
  {
    id: "landscaping",
    title: "Hard Landscaping",
    description:
      "Architectural patios, driveways, and retaining walls built for durability with crisp detailing.",
    image: "/images/landscaping.webp",
    href: "/services#landscaping",
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
    image: "/images/rendering-01.webp",
    cta: "Discuss Your Rendering Project",
  },
  landscaping: {
    title: "Hard Landscaping",
    paragraphs: [
      "Our hard landscaping service focuses on premium outdoor builds that combine structural integrity with architectural quality. We deliver patios, driveways, retaining walls, block paving, garden walls, steps, and natural stone finishes with precise detailing.",
      "Every project is delivered with a focus on drainage, levels, and long-term durability, ensuring outdoor spaces look sharp and perform in all seasons."
    ],
    image: "/images/landscaping.webp",
    cta: "Request a Quote",
  },
};
