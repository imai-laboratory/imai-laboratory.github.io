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
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
            {activity.title}
          </h4>
          <div className="text-gray-600 leading-relaxed">
            <SafeHTML
              html={activity.description}
              className="whitespace-pre-line prose prose-sm max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const YearSection = ({ activityInfo }: { activityInfo: ActivityInfo }) => {
  const year = activityInfo.year;
  const yearActivities = activityInfo.activity || [];

  if (yearActivities.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            {year}
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1" />
        </div>
        <div className="flex-1 ml-6">
          <div className="text-sm text-gray-500 font-medium">
            {yearActivities.length}{" "}
            {yearActivities.length === 1 ? "activity" : "activities"}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {yearActivities.map((activity, index) => {
          const activityKey = `${year}-activity-${activity.title.slice(0, 20)}-${index}`;
          return (
            <ActivityCard key={activityKey} activity={activity} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export const ActivityList = ({ activities }: ActivityListProps) => {
  return (
    <div className="space-y-8">
      {activities.filter(Boolean).map((activityInfo) => (
        <YearSection
          key={`year-${activityInfo.year}`}
          activityInfo={activityInfo}
        />
      ))}
    </div>
  );
};
