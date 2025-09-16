"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

type ContactSectionProps = {
  titleKey: string;
};

export function ContactSection({ titleKey }: ContactSectionProps) {
  const t = useTranslations();

  const title = t(titleKey);
  const profInfo = t("for_collaborations.contact.prof_info");
  const email = t("for_collaborations.contact.email");

  const subject = encodeURIComponent(
    t("for_collaborations.contact.mail_subject", { site: t("site.title") }),
  );
  const body = encodeURIComponent(
    t("for_collaborations.contact.mail_body_placeholder"),
  );

  const mailto = email ? `mailto:${email}?subject=${subject}&body=${body}` : "";

  return (
    <AnimatedSection className="py-16 md:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title={title}
          icon="📧"
          iconBgColor="from-white/20 to-white/10"
          titleColor="text-white"
          lineColor="from-pink-400 to-purple-400"
        />

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl animate-fade-in-up">
            <div className="relative z-10">
              {/* Professor Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t("for_collaborations.contact.prof_block_title")}
                </h3>
                <div className="text-blue-200 mb-4">
                  {t("for_collaborations.contact.prof_block_role")}
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-white/90 whitespace-pre-line text-center">
                  {profInfo}
                </div>
              </div>

              {/* Email */}
              <div className="border-t border-white/10 pt-8">
                <h4 className="text-xl font-bold text-white mb-4">
                  {t("for_collaborations.contact.email_title")}
                </h4>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20 text-center">
                  <span className="text-white font-mono text-lg break-all">
                    {email}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                {mailto ? (
                  <a
                    href={mailto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-8 py-4 text-white! font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl">🚀</div>
                    <span>{t("for_collaborations.contact.cta_button")}</span>
                    <div className="text-2xl">🚀</div>
                  </a>
                ) : (
                  <div className="inline-flex items-center space-x-3 bg-white/20 rounded-full px-8 py-4 text-white! font-semibold shadow-lg">
                    <div className="text-2xl">ℹ️</div>
                    <span>{t("for_collaborations.contact.cta_fallback")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
