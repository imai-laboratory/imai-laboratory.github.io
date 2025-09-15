"use client";

import { useTranslations } from "next-intl";
import { Navigation } from "@/components/elements/navigation";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const Footer = () => {
  const t = useTranslations("site");

  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="text-center">
        <p className="mb-4">{t("description")}</p>
      </div>
    </footer>
  );
};

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="font-sans">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
