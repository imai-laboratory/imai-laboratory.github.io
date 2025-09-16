const MemberCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 text-center h-full flex flex-col border border-gray-100">
    <div className="mb-4 relative">
      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
    </div>
    <div className="flex-grow">
      <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse w-3/4 mx-auto" />
      <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2 mx-auto" />
    </div>
  </div>
);

export const MemberSkeleton = () => (
  <div>
    <div className="h-8 bg-gray-200 rounded mb-6 mt-8 animate-pulse w-48" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
      <MemberCardSkeleton />
      <MemberCardSkeleton />
      <MemberCardSkeleton />
      <MemberCardSkeleton />
    </div>
  </div>
);
