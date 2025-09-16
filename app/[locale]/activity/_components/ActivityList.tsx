import { ItemCard } from "@/components/ui/card/ItemCard";
import { YearSection } from "@/components/ui/layout/YearSection";
import { SafeHTML } from "@/components/ui/SafeHTML";
import type { Activity, ActivityInfo } from "@/types";

type ActivityListProps = {
  activities: ActivityInfo[];
};

const ActivityCard = ({
  activity,
  index,
}: {
  activity: Activity;
  index: number;
}) => {
  return (
    <ItemCard index={index + 1} colorScheme="blue">
      <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
        {activity.title}
      </h4>
      <div className="text-gray-600 leading-relaxed">
        <SafeHTML
          html={activity.description}
          className="whitespace-pre-line prose prose-sm max-w-none"
        />
      </div>
    </ItemCard>
  );
};

const ActivityYearSection = ({
  activityInfo,
}: {
  activityInfo: ActivityInfo;
}) => {
  const year = activityInfo.year;
  const yearActivities = activityInfo.activity || [];

  return (
    <YearSection
      year={year}
      itemCount={yearActivities.length}
      itemLabel="activit"
      colorScheme="blue"
    >
      <div className="grid gap-6">
        {yearActivities.map((activity, index) => {
          const activityKey = `${year}-activity-${activity.title.slice(0, 20)}-${index}`;
          return (
            <ActivityCard key={activityKey} activity={activity} index={index} />
          );
        })}
      </div>
    </YearSection>
  );
};

export const ActivityList = ({ activities }: ActivityListProps) => {
  return (
    <div className="space-y-8">
      {activities.filter(Boolean).map((activityInfo) => (
        <ActivityYearSection
          key={`year-${activityInfo.year}`}
          activityInfo={activityInfo}
        />
      ))}
    </div>
  );
};
