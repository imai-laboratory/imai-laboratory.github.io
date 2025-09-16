"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};

type MobileNavLinkProps = {
  href: string;
  children: ReactNode;
  onClickAction: () => void;
  className?: string;
};

export const MobileNavLink = ({
  href,
  children,
  onClickAction,
  className = "",
}: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer ${className}`}
      onClick={onClickAction}
    >
      {children}
    </Link>
  );
};

export const ExternalLink = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
}) => {
  const baseClasses =
    "font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md";
  const variants = {
    primary:
      "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white",
    secondary: "text-gray-500 hover:text-primary-600 hover:bg-primary-50/50",
  };
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
};
