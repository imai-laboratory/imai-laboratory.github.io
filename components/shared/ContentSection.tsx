import type React from "react";

type ContentSectionProps = {
  title?: string;
  children?: React.ReactNode;
};

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
        {title && <h2 className="text-xl md:text-2xl font-bold">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
