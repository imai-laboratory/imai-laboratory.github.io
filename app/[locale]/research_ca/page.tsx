import React from "react";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
export const dynamic = 'force-static';
type Props = {
  params: { locale: string };
};

export default function ResearchCaPage({ params: { locale } }: Props) {
  return (
    <div id="content_research_ca">
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">CA研究</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="prose max-w-none">
            <p>
              This page is under construction. Please visit the{" "}
              <a href="/research">main research page</a> for current research
              information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
