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
  buttonText = "here",
  children,
  className = "",
}: LinkCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 mb-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {description && <p className="text-gray-600 mb-4">{description}</p>}

      {children && <div className="mb-4">{children}</div>}

      <div className="space-y-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
