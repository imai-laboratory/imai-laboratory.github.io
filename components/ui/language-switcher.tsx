"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "ja" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLocale("ja")}
        className={`px-2 py-1 text-sm rounded ${
          locale === "ja"
            ? "bg-primary-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 text-sm rounded ${
          locale === "en"
            ? "bg-primary-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        English
      </button>
    </div>
  );
};
