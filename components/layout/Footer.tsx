"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("site");
  const tNav = useTranslations("navigation");
  const tExternal = useTranslations("external");
  const tFooter = useTranslations("footer");
  const tAccess = useTranslations("access");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lab Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {t("title")}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t("description")}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/imailab"
                  className="group p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tExternal("twitter")}
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>{tExternal("twitter")}</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://www.ailab.ics.keio.ac.jp/welcome-junior/"
                  className="group p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tExternal("b3")}
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>{tExternal("b3")}</title>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              {tFooter("quick_links")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/research`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  {tNav("research.main")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/member`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  {tNav("member")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/access`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                  {tNav("access")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              {tFooter("contact")}
            </h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div className="whitespace-pre-line">
                  {tAccess("address.content")}
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div className="whitespace-pre-line">
                  {tAccess("contact.content")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {tFooter("copyright")}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href={`/${locale}/links`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {tNav("links")}
              </Link>
              <Link
                href={`/${locale}/for_collaborations`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {tNav("for_collaborations")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </footer>
  );
};
