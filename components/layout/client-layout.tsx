"use client";

import { useState } from "react";
import { texts } from "@/lib/texts";
import type { Language } from "@/lib/types";
import { Navigation } from "@/components/ui/navigation";

type ClientLayoutProps = {
  children: React.ReactNode;
};

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="text-center">
        <p className="mb-4">{children}</p>
      </div>
    </footer>
  );
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [lang, setLang] = useState<Language>("ja");

  const changeLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="font-sans">
      <Navigation currentLanguage={lang} onLanguageChange={changeLang} />
      <main>{children}</main>
      <Footer>{texts.footer[lang]}</Footer>
    </div>
  );
}
