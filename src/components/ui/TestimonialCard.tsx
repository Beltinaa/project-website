type TestimonialCardProps = {
  name: string;
  quote: string;
  rating: number;
};

const TestimonialCard = ({ name, quote, rating }: TestimonialCardProps) => {
  return (
    <article className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">“</span>
      <p>{quote}</p>
      <div className="stars" aria-label={`${rating} star rating`}>
        {"★".repeat(rating)}
      </div>
      <h4>{name}</h4>
    </article>
  );
};

export default TestimonialCard;
