import { setRequestLocale } from "next-intl/server";
import { LinkCard } from "@/components/shared/LinkCard";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export default async function ResearchProjPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div id="content_links">
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">プロジェクト</h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        <LinkCard
          title="CREST"
          description="文脈と解釈の同時推定に基づく相互理解コンピューテーションの実現"
          url="http://crest.ailab.ics.keio.ac.jp/context/"
        />
        <LinkCard
          title="SIP"
          description="エビデンスに基づくテーラーメイド教育の研究開発"
          url="https://www.nedo.go.jp/activities/ZZJP2_100126.html"
        />
        <LinkCard
          title="農林中央金庫 アグベンチャーラボ"
          url="https://agventurelab.or.jp/"
        />
      </div>
    </div>
  );
}
