"use client";

import { Navigation } from "@/components/elements/navigation";
import { Footer } from "@/components/layout/Footer";

type ClientLayoutProps = {
  children: React.ReactNode;
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
