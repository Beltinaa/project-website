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
    src: "/images/rendering-01.webp",
    category: "Rendering",
    title: "Silicone render finish on London townhouse elevation",
  },
  {
    id: "rendering-02",
    src: "/images/rendering-02.webp",
    category: "Rendering",
    title: "Clean-lined façade render with crisp detailing",
  },
  {
    id: "rendering-03",
    src: "/images/rendering-03.webp",
    category: "Rendering",
    title: "Smooth render application with crisp detailing",
  },
  {
    id: "rendering-04",
    src: "/images/rendering-04.webp",
    category: "Rendering",
    title: "Rendered elevation with refined architectural finish",
  },
  {
    id: "rendering-05",
    src: "/images/rendering-05.webp",
    category: "Rendering",
    title: "Consistent render coat with premium texture",
  },
  {
    id: "rendering-06",
    src: "/images/rendering-06.webp",
    category: "Rendering",
    title: "Premium render system applied to modern extension",
  },
  {
    id: "rendering-07",
    src: "/images/rendering-07.webp",
    category: "Rendering",
    title: "Uniform render finish with weather-resistant coating",
  },
  {
    id: "rendering-08",
    src: "/images/rendering-08.webp",
    category: "Rendering",
    title: "Refined external render upgrade on residential property",
  },
  {
    id: "rendering-09",
    src: "/images/rendering-09.webp",
    category: "Rendering",
    title: "Luxury façade render with warm architectural texture",
  },
  {
    id: "rendering-10",
    src: "/images/rendering-10.webp",
    category: "Rendering",
    title: "Contemporary render detail with smooth finish",
  },
  {
  id: "rendering-11",
  src: "/images/rendering-11.webp",
  category: "Rendering",
  title: "Modern exterior render with clean architectural lines",
  },
  {
  id: "rendering-12",
  src: "/images/rendering-12.webp",
  category: "Rendering",
  title: "Fresh façade render improving property appearance",
},
{
  id: "rendering-13",
  src: "/images/rendering-13.webp",
  category: "Rendering",
  title: "High-quality wall rendering with smooth finish",
},
{
  id: "rendering-14",
  src: "/images/rendering-14.webp",
  category: "Rendering",
  title: "Professional exterior render on residential building",
},
{
  id: "rendering-15",
  src: "/images/rendering-15.webp",
  category: "Rendering",
  title: "Durable weather-resistant render application",
},
{
  id: "rendering-16",
  src: "/images/rendering-16.webp",
  category: "Rendering",
  title: "Detailed rendering work enhancing building façade",
},
{
  id: "rendering-17",
  src: "/images/rendering-17.webp",
  category: "Rendering",
  title: "Clean and modern render finish on exterior wall",
},
{
  id: "rendering-18",
  src: "/images/rendering-18.webp",
  category: "Rendering",
  title: "External wall rendering with premium coating system",
},
{
  id: "rendering-19",
  src: "/images/rendering-19.webp",
  category: "Rendering",
  title: "Architectural render upgrade with refined texture",
},
{
  id: "rendering-20",
  src: "/images/rendering-20.webp",
  category: "Rendering",
  title: "High-end exterior rendering with flawless finish",
},
];

export const galleryCategories = [
  "All",
  "Rendering",
] as const;

export type GalleryFilter = (typeof galleryCategories)[number];
