import { ReactNode } from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "accent" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
};

const Button = ({
  children,
  variant = "accent",
  size = "md",
  href,
  onClick,
  type = "button",
  isLoading = false,
}: ButtonProps) => {
  const classes = [
    "btn",
    variant === "outline" ? "btn-outline" : "btn-accent",
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "",
    isLoading ? "is-loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:|https:\/\/wa\.me)/.test(href);
    if (isExternal) {
      return (
        <a className={classes} href={href} onClick={onClick}>
          {isLoading && <span className="spinner" aria-hidden="true" />}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <Link className={classes} to={href} onClick={onClick}>
        {isLoading && <span className="spinner" aria-hidden="true" />}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} disabled={isLoading}>
      {isLoading && <span className="spinner" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
