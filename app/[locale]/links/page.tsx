import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
type ContentLinkProps = {
  title: string;
  url: string;
  text?: string;
};

function ContentLink({ title, url, text }: ContentLinkProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {text && <p className="text-gray-700">{text}</p>}
        <a
          href={url}
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block"
        >
          here
        </a>
      </div>
    </div>
  );
}

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
        <ContentLink
          title="Imai Laboratory - GitHub"
          url="https://github.com/imai-laboratory"
        />
        <ContentLink
          title="計算理論2017 - お魚天国"
          url="http://osakana.ailab.ics.keio.ac.jp"
        />
        <ContentLink
          title="『心と脳－認知科学入門』コメント・参考文献"
          url="http://www.ayu.ics.keio.ac.jp/references/cognitivescience/"
        />
        <ContentLink
          title="Cognitive Robot Interaction 参考文献"
          url="http://www.ailab.ics.keio.ac.jp/webpage_personal/cognitive_robot_interaction/"
        />
      </div>
    </div>
  );
}
