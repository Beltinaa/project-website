import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type PageMetaProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  canonicalPath?: string;
  keywords?: string;
  robots?: string;
};

const SITE_NAME = "KYR Construction Ltd";
const DEFAULT_IMAGE = "/images/rendering-01.webp";
const DEFAULT_IMAGE_ALT = "Rendering project by KYR Construction Ltd";
const DEFAULT_KEYWORDS =
  "rendering specialists, K Rend applicators, Weber applicators, silicone render, monocouche render, insulated render, external wall insulation, hard landscaping, Barking, Luton, Greater London, South East England, construction";

const resolveBaseUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "";
};

const resolveCanonicalUrl = (baseUrl: string, path?: string) => {
  if (path && (path.startsWith("http://") || path.startsWith("https://"))) {
    return path;
  }
  if (!baseUrl) {
    return "";
  }
  if (!path) {
    return baseUrl;
  }
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const resolveImageUrl = (baseUrl: string, image: string) => {
  if (!image) {
    return "";
  }
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  if (!baseUrl) {
    return image;
  }
  return `${baseUrl}${image.startsWith("/") ? image : `/${image}`}`;
};

const PageMeta = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  canonicalPath,
  keywords = DEFAULT_KEYWORDS,
  robots = "index, follow",
}: PageMetaProps) => {
  const location = useLocation();
  const baseUrl = resolveBaseUrl();
  const canonicalUrl = resolveCanonicalUrl(baseUrl, canonicalPath ?? location.pathname);
  const imageUrl = resolveImageUrl(baseUrl, image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageUrl ? <meta property="og:image:alt" content={imageAlt} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      {imageUrl ? <meta name="twitter:image:alt" content={imageAlt} /> : null}
    </Helmet>
  );
};

export default PageMeta;
