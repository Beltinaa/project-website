export type GalleryCategory =
  | "Rendering"
  | "Formwork"
  | "Hard Landscaping"
  | "Civil Engineering";

export type GalleryItem = {
  id: string;
  src: string;
  category: GalleryCategory;
  title: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "rendering-01",
    src: "/images/rendering-01.jpg",
    category: "Rendering",
    title: "Silicone render finish on London townhouse elevation",
  },
  {
    id: "rendering-02",
    src: "/images/rendering-02.jpg",
    category: "Rendering",
    title: "Clean-lined façade render with crisp detailing",
  },
  {
    id: "rendering-03",
    src: "/images/rendering-03.jpg",
    category: "Formwork",
    title: "Concrete framework preparation with precision formwork",
  },
  {
    id: "rendering-04",
    src: "/images/rendering-04.jpg",
    category: "Hard Landscaping",
    title: "Hard landscaping build with structured external finishes",
  },
  {
    id: "rendering-05",
    src: "/images/rendering-05.jpg",
    category: "Civil Engineering",
    title: "Groundworks stage with stable structural base",
  },
  {
    id: "rendering-06",
    src: "/images/rendering-06.jpg",
    category: "Rendering",
    title: "Premium render system applied to modern extension",
  },
  {
    id: "rendering-07",
    src: "/images/rendering-07.jpg",
    category: "Rendering",
    title: "Uniform render finish with weather-resistant coating",
  },
  {
    id: "rendering-08",
    src: "/images/rendering-08.jpg",
    category: "Rendering",
    title: "Refined external render upgrade on residential property",
  },
  {
    id: "rendering-09",
    src: "/images/rendering-09.jpg",
    category: "Rendering",
    title: "Luxury façade render with warm architectural texture",
  },
  {
    id: "rendering-10",
    src: "/images/rendering-10.png",
    category: "Rendering",
    title: "Contemporary render detail with smooth finish",
  },
];

export const galleryCategories = [
  "All",
  "Rendering",
  "Formwork",
  "Hard Landscaping",
  "Civil Engineering",
] as const;

export type GalleryFilter = (typeof galleryCategories)[number];
