import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "ink" | "light" | "text";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const baseStyles =
  "inline-flex items-center gap-2 font-sans text-[0.85rem] font-medium tracking-[0.06em] uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer";

const variants = {
  primary:
    "px-7 py-3.5 border border-ink-warm bg-transparent text-ink-warm hover:bg-ink-warm hover:text-cream rounded-sm",
  ink: "px-7 py-3.5 bg-ink-warm text-cream hover:bg-accent border border-ink-warm rounded-sm",
  light:
    "px-7 py-3.5 bg-cream text-ink-warm hover:bg-sand border border-border-subtle rounded-sm",
  text: "text-ink-warm hover:text-accent group",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 ${className}`}
    >
      →
    </span>
  );
}
