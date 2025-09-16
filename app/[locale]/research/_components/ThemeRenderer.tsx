import { ImageSkeleton } from "@/components/ui/skeleton/ImageSkeleton";
import { ResearchSection } from "./ResearchSection";
import { ResearchSubSection } from "./ResearchSubSection";

type ThemeData = {
  key: string;
  type: "image" | "localized-image" | "text-only";
  image?: string;
  images?: { ja: string; en: string };
  descKey: string;
};

type ThemeRendererProps = {
  theme: ThemeData;
  locale: string;
  tResearch: (key: string) => string;
};

export function ThemeRenderer({
  theme,
  locale,
  tResearch,
}: ThemeRendererProps) {
  const { key, type } = theme;

  const renderContent = () => {
    switch (type) {
      case "image":
        return (
          <ResearchSubSection
            text={tResearch(`themes.${key}.${theme.descKey}`)}
          >
            <div className="flex justify-center">
              <ImageSkeleton
                src={theme.image || ""}
                alt={tResearch(`themes.${key}.title`)}
                width={800}
                height={600}
                priority={key === "iu"}
              />
            </div>
          </ResearchSubSection>
        );

      case "localized-image": {
        const imageSrc =
          theme.images?.[locale as "ja" | "en"] || theme.images?.en || "";
        return (
          <ResearchSubSection
            text={tResearch(`themes.${key}.${theme.descKey}`)}
          >
            <div className="flex justify-center">
              <ImageSkeleton
                src={imageSrc}
                alt={tResearch(`themes.${key}.title`)}
                width={800}
                height={600}
                priority={key === "iu"}
              />
            </div>
          </ResearchSubSection>
        );
      }

      case "text-only":
        return (
          <ResearchSubSection
            text={tResearch(`themes.${key}.${theme.descKey}`)}
          />
        );
    }
  };

  return (
    <ResearchSection
      key={key}
      id={key}
      title={tResearch(`themes.${key}.title`)}
    >
      {renderContent()}
    </ResearchSection>
  );
}
