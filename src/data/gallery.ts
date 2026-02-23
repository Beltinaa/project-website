export type GalleryCategory = "Rendering";

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
    category: "Rendering",
    title: "Smooth render application with crisp detailing",
  },
  {
    id: "rendering-04",
    src: "/images/rendering-04.jpg",
    category: "Rendering",
    title: "Rendered elevation with refined architectural finish",
  },
  {
    id: "rendering-05",
    src: "/images/rendering-05.jpg",
    category: "Rendering",
    title: "Consistent render coat with premium texture",
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
] as const;

export type GalleryFilter = (typeof galleryCategories)[number];
