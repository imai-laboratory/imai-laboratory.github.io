"use client";

import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/shared/Navigation";

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
