import type React from "react";

type ItemCardProps = {
  index: number;
  colorScheme: "blue" | "emerald";
  children: React.ReactNode;
};

export const ItemCard = ({ index, colorScheme, children }: ItemCardProps) => {
  const sizeClasses = "w-8 h-8 text-xs rounded-lg";

  const gradientClasses =
    colorScheme === "blue"
      ? "from-blue-500 to-indigo-600"
      : "from-emerald-500 to-teal-600";

  const hoverBorderClass =
    colorScheme === "blue"
      ? "hover:border-blue-200"
      : "hover:border-emerald-200";

  return (
    <div
      className={`group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${hoverBorderClass} hover:-translate-y-1`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`flex-shrink-0 ${sizeClasses} bg-gradient-to-br ${gradientClasses} flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}
        >
          {index}
        </div>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
};
