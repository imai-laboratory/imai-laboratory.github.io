import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type React from "react";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };

type ResearchSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function ResearchSection({ id, title, children }: ResearchSectionProps) {
  return (
    <div id={`research_section_${id}`} className="mb-12">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        </div>
      </div>
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
  const t = await getTranslations({ locale });
  const tResearch = await getTranslations({ locale, namespace: "research" });

  return (
    <div id="content_research">
      <PageHero title={t("navigation.research_theme")} />

      <ResearchSection
        key="isc"
        id="isc"
        title={tResearch("projects.isc.title")}
      >
        <ResearchSubSection text={tResearch("projects.isc.desc")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4"
              controls
              aria-label="Interactive Smart Clerk demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection
        key="scains"
        id="scains"
        title={tResearch("projects.scains.title")}
      >
        <ResearchSubSection text={tResearch("projects.scains.desc1")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4"
              controls
              aria-label="SCAINs Presenter demonstration video"
            />
          </div>
        </ResearchSubSection>
        <ResearchSubSection text={tResearch("projects.scains.desc2")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4"
              controls
              aria-label="SCAINs algorithm demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection
        key="closer"
        id="closer"
        title={tResearch("projects.closer.title")}
      >
        <ResearchSubSection text={tResearch("projects.closer.desc")} />
      </ResearchSection>

      <ResearchSection
        key="relbot"
        id="relbot"
        title={tResearch("projects.relbot.title")}
      >
        <ResearchSubSection text={tResearch("projects.relbot.desc")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4"
              controls
              aria-label="RelBot demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection
        key="travot"
        id="travot"
        title={tResearch("projects.travot.title")}
      >
        <ResearchSubSection text={tResearch("projects.travot.desc")}>
          <div className="flex justify-center">
            <video
              src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4"
              controls
              aria-label="TRAVOT demonstration video"
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ai" id="ai" title={tResearch("themes.ai.title")}>
        <ResearchSubSection text={tResearch("themes.ai.desc")}>
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

      <ResearchSection key="si" id="si" title={tResearch("themes.si.title")}>
        <ResearchSubSection text={tResearch("themes.si.desc")}>
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

      <ResearchSection key="ad" id="ad" title={tResearch("themes.ad.title")}>
        <ResearchSubSection text={tResearch("themes.ad.desc")} />
      </ResearchSection>

      <ResearchSection key="iu" id="iu" title={tResearch("themes.iu.title")}>
        <ResearchSubSection text={tResearch("themes.iu.desc")}>
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

      <ResearchSection key="ui" id="ui" title={tResearch("themes.ui.title")}>
        <ResearchSubSection text={tResearch("themes.ui.desc")}>
          <div className="flex justify-center">
            <Image
              src="/res/research/ui.png"
              alt="User Interface"
              width={800}
              height={600}
            />
          </div>
        </ResearchSubSection>
      </ResearchSection>

      <ResearchSection key="ag" id="ag" title={tResearch("themes.ag.title")}>
        <ResearchSubSection text={tResearch("themes.ag.desc")}>
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
