"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { externalLinks, navigationItems } from "@/lib/navigation";
import { DropdownMenu } from "../ui/DropdownMenu";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ExternalLink, MobileNavLink, NavLink } from "../ui/NavLink";

export const Navigation = () => {
  const t = useTranslations("navigation");
  const tExternal = useTranslations("external");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
      aria-label="main navigation"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}`}
              className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors"
            >
              Imai Lab
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-1">
            {navigationItems.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu
                    key={item.key}
                    trigger={t(item.key)}
                    items={item.children.map((child) => ({
                      href: `/${locale}${child.href}`,
                      label: t(child.key),
                    }))}
                  />
                );
              }
              return (
                <NavLink key={item.key} href={`/${locale}${item.href}`}>
                  {t(item.key)}
                </NavLink>
              );
            })}

            {/* External Links */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200/50">
              {externalLinks.map((link) => {
                if (link.key === "twitter") {
                  return (
                    <ExternalLink
                      key={link.key}
                      href={link.href}
                      variant={link.variant}
                      className="p-2 hover:scale-110 transform transition-transform"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-label="Twitter icon"
                      >
                        <title>Twitter</title>
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </ExternalLink>
                  );
                }
                return (
                  <ExternalLink
                    key={link.key}
                    href={link.href}
                    variant={link.variant}
                    size={link.size}
                  >
                    {tExternal(link.key)}
                  </ExternalLink>
                );
              })}
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="xl:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Menu icon"
            >
              <title>Menu</title>
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
          <div className="xl:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="py-2">
              <div className="px-4 py-1">
                <LanguageSwitcher />
              </div>

              {navigationItems.map((item) => {
                // If item has children, render parent and children
                if (item.children) {
                  return (
                    <div key={item.key}>
                      <div className="px-4 py-2 font-semibold text-gray-900 border-b border-gray-100">
                        {t(item.key)}
                      </div>
                      {item.children.map((child) => (
                        <MobileNavLink
                          key={child.key}
                          href={`/${locale}${child.href}`}
                          onClickAction={() => setIsMobileMenuOpen(false)}
                          className="pl-8"
                        >
                          {t(child.key)}
                        </MobileNavLink>
                      ))}
                    </div>
                  );
                }
                // Regular nav link
                return (
                  <MobileNavLink
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    onClickAction={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </MobileNavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
