import type React from "react";

type ResearchSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function ResearchSection({ id, title, children }: ResearchSectionProps) {
  return (
    <div id={`research_section_${id}`} className="mb-16">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white shadow-sm border-l-4 border-gray-100">
        {children}
      </div>
    </div>
  );
}
