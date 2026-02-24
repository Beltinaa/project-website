import { useState, type ChangeEvent, type FormEvent } from "react";
import { company } from "../../data/company";
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

const SERVICE_OPTIONS = ["Rendering", "Hard Landscaping", "Other"] as const;
const NAME_MIN = 2;
const NAME_MAX = 80;
const EMAIL_MAX = 120;
const PHONE_MAX = 20;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 900;

const stripControlChars = (value: string) => value.replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, "");
const normalizeText = (value: string) => stripControlChars(value).replace(/\s+/g, " ").trim();
const normalizeMessage = (value: string) =>
  stripControlChars(value)
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim();

const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
const validatePhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
};

const ContactForm = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const maxLengths: Partial<Record<keyof FormState, number>> = {
      name: NAME_MAX,
      phone: PHONE_MAX,
      email: EMAIL_MAX,
      message: MESSAGE_MAX,
    };
    const limit = maxLengths[name as keyof FormState];
    const nextValue = typeof limit === "number" ? value.slice(0, limit) : value;
    setValues((prev) => ({ ...prev, [name]: nextValue }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (formValues: FormState) => {
    const nextErrors: FormErrors = {};
    const cleanedName = normalizeText(formValues.name);
    const cleanedEmail = normalizeText(formValues.email);
    const cleanedPhone = normalizeText(formValues.phone);
    const cleanedMessage = normalizeMessage(formValues.message);

    if (!cleanedName) nextErrors.name = "Full name is required.";
    if (cleanedName && cleanedName.length < NAME_MIN) {
      nextErrors.name = "Please enter your full name.";
    }
    if (cleanedName.length > NAME_MAX) nextErrors.name = `Name must be under ${NAME_MAX} characters.`;

    if (!cleanedPhone) nextErrors.phone = "Phone number is required.";
    if (cleanedPhone && !validatePhone(cleanedPhone)) {
      nextErrors.phone = "Enter a valid phone number with 10–15 digits.";
    }

    if (!cleanedEmail) nextErrors.email = "Email address is required.";
    if (cleanedEmail && cleanedEmail.length > EMAIL_MAX) {
      nextErrors.email = `Email must be under ${EMAIL_MAX} characters.`;
    }
    if (cleanedEmail && !validateEmail(cleanedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!SERVICE_OPTIONS.includes(formValues.service as (typeof SERVICE_OPTIONS)[number])) {
      nextErrors.service = "Please choose a valid service.";
    }

    if (!cleanedMessage) nextErrors.message = "Please tell us about your project.";
    if (cleanedMessage && cleanedMessage.length < MESSAGE_MIN) {
      nextErrors.message = `Message should be at least ${MESSAGE_MIN} characters.`;
    }
    if (cleanedMessage.length > MESSAGE_MAX) {
      nextErrors.message = `Message must be under ${MESSAGE_MAX} characters.`;
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitted(false);

    const payload = {
      name: normalizeText(values.name),
      phone: normalizeText(values.phone),
      email: normalizeText(values.email).toLowerCase(),
      service: SERVICE_OPTIONS.includes(values.service as (typeof SERVICE_OPTIONS)[number])
        ? values.service
        : SERVICE_OPTIONS[0],
      message: normalizeMessage(values.message),
    };

    const subject = encodeURIComponent("New project enquiry - KYR Construction Ltd");
    const body = encodeURIComponent(
      `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nService Needed: ${payload.service}\n\nMessage:\n${payload.message}`
    );
    try {
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setValues(initialState);
    } finally {
      setIsSubmitting(false);
    }

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
            autoComplete="name"
            maxLength={NAME_MAX}
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
            autoComplete="tel"
            inputMode="tel"
            maxLength={PHONE_MAX}
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
            autoComplete="email"
            maxLength={EMAIL_MAX}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </label>
        <label>
          Service Needed
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            required
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.service && <span className="form-error">{errors.service}</span>}
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
          maxLength={MESSAGE_MAX}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </label>
      <p className="form-hint">
        If your email client does not open, email us directly at {company.email} with your details.
      </p>
      {submitted && <p className="form-success">Thanks for your enquiry. We will be in touch shortly.</p>}
      <Button type="submit" variant="accent" size="md" isLoading={isSubmitting}>
        {isSubmitting ? "Sending" : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
