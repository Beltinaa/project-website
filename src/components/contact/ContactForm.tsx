import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../ui/Button";

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: "Rendering",
  message: "",
};

type FormState = typeof initialState;

type FormErrors = Partial<Record<keyof FormState, string>>;

const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
const validatePhone = (value: string) => value.replace(/\D/g, "").length >= 10;

const ContactForm = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Full name is required.";
    if (!values.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (values.phone && !validatePhone(values.phone)) nextErrors.phone = "Enter a valid UK phone number.";
    if (!values.email.trim()) nextErrors.email = "Email address is required.";
    if (values.email && !validateEmail(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.message.trim()) nextErrors.message = "Please tell us about your project.";
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitted(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setValues(initialState);
    }, 1200);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </label>
        <label>
          Service Needed
          <select name="service" value={values.service} onChange={handleChange}>
            <option>Rendering</option>
            <option>Formwork &amp; Framework</option>
            <option>Hard Landscaping</option>
            <option>Civil Engineering &amp; Groundworks</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          rows={5}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </label>
      {submitted && <p className="form-success">Thanks for your enquiry. We will be in touch shortly.</p>}
      <Button type="submit" variant="accent" size="md" isLoading={isSubmitting}>
        {isSubmitting ? "Sending" : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
