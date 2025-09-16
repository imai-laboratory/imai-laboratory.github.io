import { WithSkeleton } from "@/components/ui/skeleton/WithSkeleton";
import type { PaperInfo } from "@/types";
import { PublicationList } from "./PublicationList";
import { PublicationListSkeleton } from "./PublicationListSkeleton";

type PublicationListWithSkeletonProps = {
  papers: PaperInfo[];
  lang: string;
  initialDelay?: number;
};

export const PublicationListWithSkeleton = ({
  papers,
  lang,
  initialDelay = 800,
}: PublicationListWithSkeletonProps) => {
  return (
    <WithSkeleton
      skeleton={<PublicationListSkeleton />}
      initialDelay={initialDelay}
    >
      <PublicationList papers={papers} lang={lang} />
    </WithSkeleton>
  );
};
