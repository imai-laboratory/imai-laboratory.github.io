"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useRef, useState } from "react";

export type DropdownItem = {
  href: string;
  label: string;
  onClick?: () => void;
};

type DropdownMenuProps = {
  trigger: ReactNode;
  items: DropdownItem[];
  className?: string;
};

export const DropdownMenu = ({
  trigger,
  items,
  className = "",
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all duration-200 flex items-center gap-1"
      >
        <span>{trigger}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Dropdown arrow</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200/50 rounded-xl shadow-2xl z-[60] opacity-100 visible transition-all duration-200 backdrop-blur-md">
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={`dropdown-${item.href}-${index}`}
                href={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50/70 hover:text-primary-700 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                onClick={() => {
                  setIsOpen(false);
                  item.onClick?.();
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
