import type { ReactNode } from "react";

type LinkCardProps = {
  title: string;
  description?: string;
  url: string;
  buttonText?: string;
  children?: ReactNode;
  className?: string;
};

export const LinkCard = ({
  title,
  description,
  url,
  buttonText = "Visit",
  children,
  className = "",
}: LinkCardProps) => {
  return (
    <div
      className={`group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 ${className} flex flex-col h-full`}
    >
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {children && <div className="mb-4">{children}</div>}
      </div>

      <div className="flex items-center space-x-2 mt-auto">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonText}
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>External link icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
