"use client";

import { useTranslations } from "next-intl";

type BaseStyleProps = {
  iconBgColor?: string;
  titleColor?: string;
  lineColor?: string;
};

type TitleByKey = { titleKey: string; title?: never };
type TitleByText = { title: string; titleKey?: never };
type IconByKey =
  | { iconKey: string; icon?: never }
  | { icon?: string; iconKey?: never };

export type SectionHeaderProps = (TitleByKey | TitleByText) &
  IconByKey &
  BaseStyleProps;

export function SectionHeader({
  titleKey,
  title,
  iconKey,
  icon,
  iconBgColor = "from-blue-100 to-indigo-100",
  titleColor = "text-gray-900",
  lineColor = "from-blue-500 to-indigo-600",
}: SectionHeaderProps) {
  const t = useTranslations();

  const displayTitle = titleKey ? t(titleKey) : (title ?? "");
  const displayIcon = iconKey ? t(iconKey) : (icon ?? "");

  const hasIcon = displayIcon.trim().length > 0;
  const hasTitle = displayTitle.trim().length > 0;

  return (
    <div className="text-center mb-16">
      {hasIcon && (
        <div
          className={`inline-block p-4 bg-gradient-to-br ${iconBgColor} rounded-2xl mb-6 animate-bounce-in`}
          style={{ animationDelay: "0.2s" }}
          aria-hidden="true"
        >
          <div className="text-4xl">{displayIcon}</div>
        </div>
      )}

      {hasTitle && (
        <h2
          className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4 animate-fade-in-up`}
          style={{ animationDelay: "0.4s" }}
          aria-label={displayTitle}
        >
          {displayTitle}
        </h2>
      )}

      {hasTitle && (
        <div
          className={`w-24 h-1 bg-gradient-to-r ${lineColor} rounded-full mx-auto animate-fade-in-up`}
          style={{ animationDelay: "0.6s" }}
        />
      )}
    </div>
  );
}
