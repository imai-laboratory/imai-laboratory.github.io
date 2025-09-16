import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { generateStaticParams } from "@/lib/generateStaticParams";
import { GoogleMap } from "./_components/GoogleMap";
import { InfoCard } from "./_components/InfoCard";
import { accessInfoItems } from "./constants/accessInfo";

export { generateStaticParams };

type Props = {
  params: Promise<{ locale: string }>;
};

const AccessPage = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <PageHero title={t("navigation.access")} />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {accessInfoItems.map((item, index) => (
              <InfoCard
                key={`${item.titleKey}-${index}`}
                icon={item.icon}
                title={t(item.titleKey)}
                content={t(item.contentKey)}
              />
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("access.map.title")}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {t("access.map.description")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <GoogleMap />
            </div>

            {/* Action Button - Moved here */}
            <div className="text-center mt-8">
              <a
                className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 !text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                href="https://www.keio.ac.jp/ja/maps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">{t("access.accessmap_link")}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>External link icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
