import PageMeta from "../components/seo/PageMeta";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <section className="section">
      <PageMeta
        title="Page Not Found | KYR Construction Ltd"
        description="The requested page could not be found."
        robots="noindex, nofollow"
      />
      <div className="container not-found">
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist. Return to the homepage to explore our services.</p>
        <Button href="/" variant="accent" size="sm">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
