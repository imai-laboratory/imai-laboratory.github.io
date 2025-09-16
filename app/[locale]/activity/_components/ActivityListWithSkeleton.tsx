import { WithSkeleton } from "@/components/ui/skeleton/WithSkeleton";
import type { ActivityInfo } from "@/types";
import { ActivityList } from "./ActivityList";
import { ActivityListSkeleton } from "./ActivityListSkeleton";

type ActivityListWithSkeletonProps = {
  activities: ActivityInfo[];
  initialDelay?: number;
};

export const ActivityListWithSkeleton = ({
  activities,
  initialDelay = 800,
}: ActivityListWithSkeletonProps) => {
  return (
    <WithSkeleton
      skeleton={<ActivityListSkeleton />}
      initialDelay={initialDelay}
    >
      <ActivityList activities={activities} />
    </WithSkeleton>
  );
};
