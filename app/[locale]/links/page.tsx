import { getTranslations, setRequestLocale } from "next-intl/server";
import { LinkCard } from "@/components/shared/LinkCard";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LinksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div id="content_links">
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{t("links.head")}</h1>
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        <LinkCard
          title="Imai Laboratory - GitHub"
          url="https://github.com/imai-laboratory"
        />
        <LinkCard
          title="計算理論2017 - お魚天国"
          url="http://osakana.ailab.ics.keio.ac.jp"
        />
        <LinkCard
          title="『心と脳－認知科学入門』コメント・参考文献"
          url="http://www.ayu.ics.keio.ac.jp/references/cognitivescience/"
        />
        <LinkCard
          title="Cognitive Robot Interaction 参考文献"
          url="https://www.ailab.ics.keio.ac.jp/webpage_personal/cognitive_robot_interaction/"
        />
      </div>
    </div>
  );
}
