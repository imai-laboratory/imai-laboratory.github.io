const ActivityCardSkeleton = ({ index }: { index: number }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 animate-pulse">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-xl" />
      <div className="flex-1 min-w-0 space-y-3">
        <div
          className="h-5 bg-gray-300 rounded"
          style={{ width: `${60 + (index % 3) * 15}%` }}
        />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div
            className="h-4 bg-gray-200 rounded"
            style={{ width: `${80 + (index % 4) * 5}%` }}
          />
          {index % 3 === 0 && <div className="h-4 bg-gray-200 rounded w-3/4" />}
        </div>
      </div>
    </div>
  </div>
);

const YearSectionSkeleton = ({ yearIndex }: { yearIndex: number }) => {
  const itemCount = 2 + (yearIndex % 3);

  return (
    <div className="mb-12">
      <div className="flex items-center mb-8 animate-pulse">
        <div className="flex-shrink-0">
          <div className="h-9 w-16 bg-gray-300 rounded" />
          <div className="w-12 h-1 bg-gray-200 rounded-full mt-1" />
        </div>
        <div className="flex-1 ml-6">
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>

      <div className="grid gap-6">
        {Array.from({ length: itemCount }, (_, index) => {
          const uniqueKey = `skeleton-card-y${yearIndex}-i${index}-${Date.now()}-${index}`;
          return <ActivityCardSkeleton key={uniqueKey} index={index} />;
        })}
      </div>
    </div>
  );
};

export const ActivityListSkeleton = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }, (_, index) => {
        const yearKey = `skeleton-year-${index}-${Date.now()}`;
        return <YearSectionSkeleton key={yearKey} yearIndex={index} />;
      })}
    </div>
  );
};
