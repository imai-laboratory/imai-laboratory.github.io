import { VideoSkeleton } from "@/components/ui/skeleton/VideoSkeleton";
import { ResearchSection } from "./ResearchSection";
import { ResearchSubSection } from "./ResearchSubSection";

type ProjectData = {
  key: string;
  type: "single" | "multi" | "text-only";
  video?: string;
  videos?: readonly [string, string];
  descKey?: string;
  descKeys?: readonly [string, string];
};

type ProjectRendererProps = {
  project: ProjectData;
  tResearch: (key: string) => string;
};

export function ProjectRenderer({ project, tResearch }: ProjectRendererProps) {
  const { key, type } = project;

  const renderContent = () => {
    switch (type) {
      case "single":
        return (
          <ResearchSubSection
            text={tResearch(`projects.${key}.${project.descKey}`)}
          >
            <div className="flex justify-center">
              <VideoSkeleton
                src={project.video || ""}
                aria-label={`${key} demonstration video`}
              />
            </div>
          </ResearchSubSection>
        );

      case "multi":
        return (
          <>
            <ResearchSubSection
              text={tResearch(
                `projects.${key}.${project.descKeys?.[0] || "desc"}`,
              )}
            >
              <div className="flex justify-center">
                <VideoSkeleton
                  src={project.videos?.[0] || ""}
                  aria-label={`${key} first demonstration video`}
                />
              </div>
            </ResearchSubSection>
            <ResearchSubSection
              text={tResearch(
                `projects.${key}.${project.descKeys?.[1] || "desc"}`,
              )}
            >
              <div className="flex justify-center">
                <VideoSkeleton
                  src={project.videos?.[1] || ""}
                  aria-label={`${key} second demonstration video`}
                />
              </div>
            </ResearchSubSection>
          </>
        );

      case "text-only":
        return (
          <ResearchSubSection
            text={tResearch(`projects.${key}.${project.descKey}`)}
          />
        );
    }
  };

  return (
    <ResearchSection
      key={key}
      id={key}
      title={tResearch(`projects.${key}.title`)}
    >
      {renderContent()}
    </ResearchSection>
  );
}
