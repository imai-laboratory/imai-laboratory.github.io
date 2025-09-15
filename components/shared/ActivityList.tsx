import type { Activity, ActivityInfo } from "@/lib/types";

type ActivityListProps = {
  activities: ActivityInfo[];
};

const createActivityText = (activity: Activity, key: string) => {
  const description = (
    <div dangerouslySetInnerHTML={{ __html: activity.description }} />
  );
  return (
    <tr key={key} className="border-b border-gray-200">
      <td className="py-4 px-2">
        <strong className="text-lg block mb-2">{activity.title}</strong>
        {description}
      </td>
    </tr>
  );
};

const createActivityList = (activities: ActivityInfo[]) => {
  return activities.map((activityInfo) => {
    const year = activityInfo.year;
    const yearActivities = activityInfo.activity || [];

    const yearActivityList = yearActivities.map((activity, activityIdx) =>
      createActivityText(activity, `${year}-activity-${activityIdx}`),
    );

    return (
      <div key={`year-${year}`} className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{year}</h3>
        <table className="w-full table-auto">
          <tbody>{yearActivityList}</tbody>
        </table>
      </div>
    );
  });
};

export const ActivityList = ({ activities }: ActivityListProps) => {
  return <div>{createActivityList(activities.filter(Boolean))}</div>;
};
