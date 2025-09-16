"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

type AboutSectionProps = {
  titleKey: string;
};

export function AboutSection({ titleKey }: AboutSectionProps) {
  const t = useTranslations();

  return (
    <AnimatedSection className="py-16 md:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6">
        <SectionHeader titleKey={titleKey} icon="🎓" />

        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {/* 背景デコレーション */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full -translate-y-32 translate-x-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-50 to-pink-100 rounded-full translate-y-24 -translate-x-24 opacity-50" />

            {/* 本文 */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                <span className="font-semibold text-gray-900">
                  {t("for_collaborations.about.labName")}
                </span>
                {t("for_collaborations.about.description1")}
                <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg mx-1">
                  {t("for_collaborations.about.consulting")}
                </span>
                {t("for_collaborations.about.description2")}
                <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg mx-1">
                  {t("for_collaborations.about.collaboration")}
                </span>
                {t("for_collaborations.about.description3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
