import { setRequestLocale } from "next-intl/server";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
type Props = { params: Promise<{ locale: string }> };

export default async function ForCollaborationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div>
      <div id="content_for_collaborations">
        {/* Hero Section */}
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">共同研究について</h1>
          </div>
        </section>

        {/* About Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl md:text-2xl font-bold">共同研究について</h3>
          </div>
        </div>

        {/* Examples Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">例</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>人工知能を利用したシステム開発</li>
              <li>ロボットと人間のインタラクション</li>
              <li>対話システムの研究</li>
              <li>情報理解技術</li>
              <li>ユーザーインターフェースの設計</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">お問い合わせ</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                ご興味のある方はお気軽にお問い合わせください。
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:imai@ics.keio.ac.jp"
                  className="text-primary-600 hover:text-primary-700"
                >
                  imai@ics.keio.ac.jp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
