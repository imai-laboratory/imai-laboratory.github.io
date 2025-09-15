"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { DropdownMenu } from "./dropdown-menu";
import { LanguageSwitcher } from "./language-switcher";
import { ExternalLink, MobileNavLink, NavLink } from "./nav-link";

export const Navigation = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
      aria-label="main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <NavLink href={`/${locale}`}>{t("home")}</NavLink>

            <DropdownMenu
              trigger={t("research")}
              items={[
                { href: `/${locale}/research`, label: t("research_theme") },
                { href: `/${locale}/research_proj`, label: t("research_proj") },
              ]}
            />

            <DropdownMenu
              trigger={t("publication")}
              items={[
                {
                  href: `/${locale}/publication_journal`,
                  label: t("publication_journal"),
                },
                {
                  href: `/${locale}/publication_international`,
                  label: t("publication_international"),
                },
                {
                  href: `/${locale}/publication_domestic`,
                  label: t("publication_domestic"),
                },
              ]}
            />

            <DropdownMenu
              trigger={t("activity")}
              items={[
                {
                  href: `/${locale}/activity_award`,
                  label: t("activity_award"),
                },
                {
                  href: `/${locale}/activity_media`,
                  label: t("activity_media"),
                },
                { href: `/${locale}/activity_talk`, label: t("activity_talk") },
              ]}
            />

            <NavLink href={`/${locale}/member`}>{t("member")}</NavLink>

            <NavLink href={`/${locale}/access`}>{t("access")}</NavLink>
            <NavLink href={`/${locale}/links`}>{t("links")}</NavLink>
            <NavLink href={`/${locale}/for_collaborations`}>
              {t("for_collaborations")}
            </NavLink>

            {/* External Links */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200/50">
              <ExternalLink
                href="https://www.ailab.ics.keio.ac.jp/welcome-junior/"
                size="sm"
              >
                {t("b3")}
              </ExternalLink>
              <ExternalLink
                href="https://twitter.com/imailab"
                variant="secondary"
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

              <MobileNavLink
                href={`/${locale}`}
                onClickAction={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/research`}
                onClickAction={() => setIsMobileMenuOpen(false)}
              >
                {t("research_theme")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/research_proj`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("research_proj")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/publication_journal`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("publication_journal")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/publication_international`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("publication_international")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/publication_domestic`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("publication_domestic")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/activity_award`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("activity_award")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/activity_media`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("activity_media")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/activity_talk`}
                onClickAction={() => setIsMobileMenuOpen(false)}
                className="pl-8"
              >
                {t("activity_talk")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/member`}
                onClickAction={() => setIsMobileMenuOpen(false)}
              >
                {t("member")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/access`}
                onClickAction={() => setIsMobileMenuOpen(false)}
              >
                {t("access")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/links`}
                onClickAction={() => setIsMobileMenuOpen(false)}
              >
                {t("links")}
              </MobileNavLink>
              <MobileNavLink
                href={`/${locale}/for_collaborations`}
                onClickAction={() => setIsMobileMenuOpen(false)}
              >
                {t("for_collaborations")}
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
