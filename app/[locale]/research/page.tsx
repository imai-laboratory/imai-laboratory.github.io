import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type React from "react";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };

type ResearchSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function ResearchSection({ id, title, children }: ResearchSectionProps) {
  return (
    <div id={`research_section_${id}`}>
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </section>
      {children}
    </div>
  );
}

// Research SubSection component

type ResearchSubSectionProps = {
  title?: string;
  text: string;
  children?: React.ReactNode;
};

function ResearchSubSection({
  title,
  text,
  children,
}: ResearchSubSectionProps) {
  return (
    <div className="container mx-auto px-6 py-8">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div className="grid md:grid-cols-2 gap-8">
        {children}
        <div className="prose max-w-none">{text}</div>
      </div>
    </div>
  );
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "research" });

  return (
    <div id="content_research">
      <section id="hero-research" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("research_theme")}
          </h1>
        </div>
      </section>

      <ResearchSection key="isc" id="isc" title="Interactive Smart Clerk">
        <ResearchSubSection text="スマートクラークシステムの研究">
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4"
              controls
              aria-label="Interactive Smart Clerk demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="scains" id="scains" title={t("scains_head")}>
        <ResearchSubSection text={t("scains1_exp")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4"
              controls
              aria-label="SCAINs Presenter demonstration video"
            />
          </div>
        </ResearchSubSection>
        <ResearchSubSection text={t("scains2_exp")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4"
              controls
              aria-label="SCAINs algorithm demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="closer" id="closer" title={t("closer_head")}>
        <ResearchSubSection text={t("closer_exp")} />
      </ResearchSection>

      <ResearchSection key="relbot" id="relbot" title={t("relbot_head")}>
        <ResearchSubSection text={t("relbot_exp")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4"
              controls
              aria-label="RelBot demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="travot" id="travot" title={t("travot_head")}>
        <ResearchSubSection text={t("travot_exp")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4"
              controls
              aria-label="TRAVOT demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ai" id="ai" title={t("ai_head")}>
        <ResearchSubSection text={t("ai_exp")}>
          <div className="flex justify-center">
            {locale === "ja" && (
              <Image
                src="/res/research/scain_ja.png"
                alt="AI Research"
                width={800}
                height={600}
              />
            )}
            {locale !== "ja" && (
              <Image
                src="/res/research/scain_en.png"
                alt="AI Research"
                width={800}
                height={600}
              />
            )}
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="si" id="si" title={t("si_head")}>
        <ResearchSubSection text={t("si_exp")}>
          <div className="flex justify-center">
            <Image
              src="/res/research/context-situated.png"
              alt="Situated Interaction"
              width={800}
              height={600}
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ad" id="ad" title={t("ad_head")}>
        <ResearchSubSection text={t("ad_exp")} />
      </ResearchSection>

      <ResearchSection key="iu" id="iu" title={t("iu_head")}>
        <ResearchSubSection text={t("iu_exp")}>
          <div className="flex justify-center">
            <Image
              src="/res/research/iu.jpg"
              alt="Interactive Understanding"
              width={800}
              height={600}
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ui" id="ui" title={t("ui_head")}>
        <ResearchSubSection text={t("ui_exp")}>
          <div className="flex justify-center">
            <Image
              src="/res/research/ui.png"
              alt="User Interface"
              width={800}
              height={600}
            />
          </div>
        </ResearchSubSection>
        {/*
        <ResearchSubSection text={t('ui_exp2')}>
          <div className='column has-text-centered'>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/4doyLws0zC0?si=39YIJRieC8d1EIAX' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen />
          </div>
        </ResearchSubSection>
        */}
      </ResearchSection>

      <ResearchSection key="ag" id="ag" title={t("ag_head")}>
        <ResearchSubSection text={t("ag_exp")}>
          <div className="flex justify-center">
            <Image
              src="/res/research/ag.png"
              alt="Agent Technology"
              width={800}
              height={600}
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>
    </div>
  );
}
