"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { LanguageSwitcher } from "./language-switcher";

export const Navigation = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white shadow-md"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="text-2xl font-bold text-primary-600 hover:text-primary-700"
            >
              Imai Lab
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t("home")}
            </Link>

            {/* Research Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                {t("research")}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href={`/${locale}/research`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("research_theme")}
                </Link>
                <Link
                  href={`/${locale}/research_proj`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("research_proj")}
                </Link>
              </div>
            </div>

            <Link
              href={`/${locale}/member`}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t("member")}
            </Link>

            {/* Publication Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                {t("publication")}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href={`/${locale}/publication_journal`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("publication_journal")}
                </Link>
                <Link
                  href={`/${locale}/publication_international`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("publication_international")}
                </Link>
                <Link
                  href={`/${locale}/publication_domestic`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("publication_domestic")}
                </Link>
              </div>
            </div>

            {/* Activity Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                {t("activity")}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href={`/${locale}/activity_award`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("activity_award")}
                </Link>
                <Link
                  href={`/${locale}/activity_media`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("activity_media")}
                </Link>
                <Link
                  href={`/${locale}/activity_talk`}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {t("activity_talk")}
                </Link>
              </div>
            </div>

            <Link
              href={`/${locale}/access`}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t("access")}
            </Link>

            <Link
              href={`/${locale}/links`}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t("links")}
            </Link>

            <Link
              href={`/${locale}/for_collaborations`}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t("for_collaborations")}
            </Link>

            {/* External Links */}
            <div className="flex items-center space-x-2">
              <a
                href="http://www.ailab.ics.keio.ac.jp/welcome-junior/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {t("b3")}
              </a>
              <a
                href="https://twitter.com/imailab"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-2">
              <Link
                href={`/${locale}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("home")}
              </Link>
              <Link
                href={`/${locale}/research`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("research_theme")}
              </Link>
              <Link
                href={`/${locale}/research_proj`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("research_proj")}
              </Link>
              <Link
                href={`/${locale}/member`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("member")}
              </Link>
              <Link
                href={`/${locale}/publication`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("publication")}
              </Link>
              <Link
                href={`/${locale}/activity`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("activity")}
              </Link>
              <Link
                href={`/${locale}/access`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("access")}
              </Link>
              <Link
                href={`/${locale}/links`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("links")}
              </Link>
              <Link
                href={`/${locale}/for_collaborations`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {t("for_collaborations")}
              </Link>

              {/* Publication sub-menu */}
              <Link
                href={`/${locale}/publication_journal`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("publication_journal")}
              </Link>
              <Link
                href={`/${locale}/publication_international`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("publication_international")}
              </Link>
              <Link
                href={`/${locale}/publication_domestic`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("publication_domestic")}
              </Link>

              {/* Activity sub-menu */}
              <Link
                href={`/${locale}/activity_award`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("activity_award")}
              </Link>
              <Link
                href={`/${locale}/activity_media`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("activity_media")}
              </Link>
              <Link
                href={`/${locale}/activity_talk`}
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {t("activity_talk")}
              </Link>

              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
