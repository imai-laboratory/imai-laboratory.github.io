import type React from "react";

type ResearchSubSectionProps = {
  title?: string;
  text: string;
  children?: React.ReactNode;
};

export function ResearchSubSection({
  title,
  text,
  children,
}: ResearchSubSectionProps) {
  return (
    <div className="container mx-auto px-6 py-8">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children ? (
        <div className="grid md:grid-cols-2 gap-8">
          {children}
          <div className="prose max-w-none">{text}</div>
        </div>
      ) : (
        <div className="prose max-w-none">{text}</div>
      )}
    </div>
  );
}
