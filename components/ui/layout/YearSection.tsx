import type React from "react";

type YearSectionProps = {
  year: string | number;
  itemCount: number;
  itemLabel: string;
  colorScheme: "blue" | "emerald";
  children: React.ReactNode;
};

export const YearSection = ({
  year,
  itemCount,
  itemLabel,
  colorScheme,
  children,
}: YearSectionProps) => {
  if (itemCount === 0) {
    return null;
  }

  const gradientClasses =
    colorScheme === "blue"
      ? {
          text: "from-blue-600 to-indigo-600",
          line: "from-blue-500 to-indigo-500",
        }
      : {
          text: "from-emerald-600 to-teal-600",
          line: "from-emerald-500 to-teal-500",
        };

  return (
    <div className="mb-12">
      <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
          <div
            className={`text-3xl font-bold text-transparent bg-gradient-to-r ${gradientClasses.text} bg-clip-text`}
          >
            {year}
          </div>
          <div
            className={`w-12 h-1 bg-gradient-to-r ${gradientClasses.line} rounded-full mt-1`}
          />
        </div>
        <div className="flex-1 ml-6">
          <div className="text-sm text-gray-500 font-medium">
            {itemCount} {itemCount === 1 ? itemLabel : `${itemLabel}s`}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
