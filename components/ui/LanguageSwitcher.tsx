"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { code: "ja", flag: "🇯🇵", name: "日本語" },
  { code: "en", flag: "🇺🇸", name: "English" },
];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleSelect = (newLocale: "ja" | "en") => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

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
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg px-3 py-1.5 text-sm text-gray-700 hover:border-primary-200 hover:bg-primary-50/50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:block font-medium">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-all duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Language switcher dropdown arrow</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 sm:right-0 top-full mt-1 w-40 bg-white border border-gray-200/50 rounded-xl shadow-xl z-[9999] duration-200">
          <div className="p-1">
            {languages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelect(lang.code as "ja" | "en");
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 text-sm rounded-lg hover:bg-primary-50/70 transition-all duration-150 touch-manipulation ${
                  locale === lang.code
                    ? "bg-primary-50 text-primary-700 shadow-sm"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium flex-1 text-left">
                  {lang.name}
                </span>
                {locale === lang.code && (
                  <svg
                    className="w-4 h-4 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <title>Selected language checkmark</title>
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
