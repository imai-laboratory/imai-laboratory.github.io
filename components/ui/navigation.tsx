"use client";

import Link from "next/link";
import { useState } from "react";
import { texts } from "@/lib/texts";
import type { Language } from "@/lib/types";

type NavigationProps = {
  currentLanguage?: Language;
  onLanguageChange?: (lang: Language) => void;
};

export function Navigation({
  currentLanguage = "ja",
  onLanguageChange,
}: NavigationProps) {
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
              href="/"
              className="text-2xl font-bold text-primary-600 hover:text-primary-700"
            >
              Imai Lab
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {texts.menu_home[currentLanguage]}
            </Link>

            {/* Research Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                {texts.menu_research[currentLanguage]}
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
                  href="/research"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_research_theme[currentLanguage]}
                </Link>
                <Link
                  href="/research_proj"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_research_proj[currentLanguage]}
                </Link>
              </div>
            </div>

            <Link
              href="/member"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {texts.menu_member[currentLanguage]}
            </Link>

            {/* Publication Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                {texts.menu_publication[currentLanguage]}
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
                  href="/publication_journal"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_publication_journal[currentLanguage]}
                </Link>
                <Link
                  href="/publication_international"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_publication_international[currentLanguage]}
                </Link>
                <Link
                  href="/publication_domestic"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_publication_domestic[currentLanguage]}
                </Link>
              </div>
            </div>

            {/* Activity Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                {texts.menu_activity[currentLanguage]}
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
                  href="/activity_award"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_activity_award[currentLanguage]}
                </Link>
                <Link
                  href="/activity_media"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_activity_media[currentLanguage]}
                </Link>
                <Link
                  href="/activity_talk"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {texts.menu_activity_talk[currentLanguage]}
                </Link>
              </div>
            </div>

            <Link
              href="/access"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {texts.menu_access[currentLanguage]}
            </Link>

            <Link
              href="/links"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {texts.menu_links[currentLanguage]}
            </Link>

            <Link
              href="/for_collaborations"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {texts.menu_for_collaborations[currentLanguage]}
            </Link>

            {/* External Links */}
            <div className="flex items-center space-x-2">
              <a
                href="http://www.ailab.ics.keio.ac.jp/welcome-junior/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {texts.menu_b3[currentLanguage]}
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
            {onLanguageChange && (
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 text-sm rounded ${currentLanguage === "ja" ? "bg-primary-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                  onClick={() => onLanguageChange("ja")}
                >
                  日本語
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded ${currentLanguage === "en" ? "bg-primary-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                  onClick={() => onLanguageChange("en")}
                >
                  English
                </button>
              </div>
            )}
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
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_home[currentLanguage]}
              </Link>
              <Link
                href="/research"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_research_theme[currentLanguage]}
              </Link>
              <Link
                href="/research_proj"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_research_proj[currentLanguage]}
              </Link>
              <Link
                href="/member"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_member[currentLanguage]}
              </Link>
              <Link
                href="/publication"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_publication[currentLanguage]}
              </Link>
              <Link
                href="/activity"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_activity[currentLanguage]}
              </Link>
              <Link
                href="/access"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_access[currentLanguage]}
              </Link>
              <Link
                href="/links"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_links[currentLanguage]}
              </Link>
              <Link
                href="/for_collaborations"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_for_collaborations[currentLanguage]}
              </Link>

              {/* Publication sub-menu */}
              <Link
                href="/publication_journal"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_publication_journal[currentLanguage]}
              </Link>
              <Link
                href="/publication_international"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_publication_international[currentLanguage]}
              </Link>
              <Link
                href="/publication_domestic"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_publication_domestic[currentLanguage]}
              </Link>

              {/* Activity sub-menu */}
              <Link
                href="/activity_award"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_activity_award[currentLanguage]}
              </Link>
              <Link
                href="/activity_media"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_activity_media[currentLanguage]}
              </Link>
              <Link
                href="/activity_talk"
                className="block px-4 py-2 pl-8 text-gray-700 hover:bg-gray-50"
              >
                {texts.menu_activity_talk[currentLanguage]}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
