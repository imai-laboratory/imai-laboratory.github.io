import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };
const GoogleMap = (
  <iframe
    className="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9341102634576!2d139.6515391506741!3d35.55532944437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f9c5d6e11e5%3A0x2781d6958786ab3a!2z5oW25oeJ576p5aG-5aSn5a2mIOefouS4iuOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1502181984198"
    frameBorder="0"
    height="450"
    style={{ border: 0, width: "100%" }}
    allowFullScreen
  />
);

function createSpatialText(rawText: string) {
  const texts = rawText.split("\n").map((s, i) => <div key={i}>{s}</div>);
  return <div>{texts}</div>;
}

type Props = {
  params: { locale: string };
};

export default async function AccessPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div>
      <div id="content_access">
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              {t("navigation.access")}
            </h1>
          </div>
        </section>
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {createSpatialText(t("access.location_exp"))}
              {createSpatialText(t("access.address"))}
              {createSpatialText(t("access.rooms"))}
              {createSpatialText(t("access.tel"))}
              <div className="pt-4">
                <a
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block"
                  href="https://www.keio.ac.jp/ja/maps/"
                >
                  {t("access.accessmap_link")}
                </a>
              </div>
            </div>
            <div>{GoogleMap}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
