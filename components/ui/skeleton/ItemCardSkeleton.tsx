type ItemCardSkeletonProps = {
  index: number;
  hasButtons?: boolean;
};

export const ItemCardSkeleton = ({
  index,
  hasButtons = false,
}: ItemCardSkeletonProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 animate-pulse">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-lg" />
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
            {index % 3 === 0 && (
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            )}
          </div>
          {hasButtons && (
            <div className="flex space-x-2 mt-3">
              <div className="h-6 w-12 bg-gray-200 rounded" />
              {index % 3 === 0 && (
                <div className="h-6 w-16 bg-gray-200 rounded" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
