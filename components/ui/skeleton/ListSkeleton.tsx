import { ItemCardSkeleton } from "./ItemCardSkeleton";

type ListSkeletonProps = {
  yearCount?: number;
  hasButtons?: boolean;
};

const YearSectionSkeleton = ({
  yearIndex,
  hasButtons = false,
}: {
  yearIndex: number;
  hasButtons?: boolean;
}) => {
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

      <div className="grid gap-4">
        {Array.from({ length: itemCount }, (_, index) => {
          const uniqueKey = `skeleton-item-y${yearIndex}-i${index}-${Date.now()}-${index}`;
          return (
            <ItemCardSkeleton
              key={uniqueKey}
              index={index}
              hasButtons={hasButtons}
            />
          );
        })}
      </div>
    </div>
  );
};

export const ListSkeleton = ({
  yearCount = 3,
  hasButtons = false,
}: ListSkeletonProps) => {
  return (
    <div className="space-y-6">
      {Array.from({ length: yearCount }, (_, index) => {
        const yearKey = `skeleton-year-${index}-${Date.now()}`;
        return (
          <YearSectionSkeleton
            key={yearKey}
            yearIndex={index}
            hasButtons={hasButtons}
          />
        );
      })}
    </div>
  );
};
