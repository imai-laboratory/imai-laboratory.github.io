import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
export const dynamic = "force-static";
type Props = { params: Promise<{ locale: string }> };

export default async function ResearchAsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <div id="content_research_as">
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">AS研究</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="content">
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
