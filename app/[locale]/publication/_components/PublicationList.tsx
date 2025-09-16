import Link from "next/link";
import type React from "react";
import type { Paper, PaperInfo } from "@/types";
import { PaperDisplay } from "./PaperDisplay";

type PublicationListProps = {
  papers: PaperInfo[];
  lang: string;
};

const LinkButton = ({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) => {
  const baseClasses =
    "inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </Link>
  );
};

const PaperCard = ({
  paper,
  lang,
  totalIndex,
}: {
  paper: Paper;
  lang: string;
  totalIndex: number;
}) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform duration-300">
          {totalIndex}
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-3">
            <PaperDisplay paper={paper} lang={lang} />
          </div>
          <div className="flex items-center space-x-2">
            {paper.draft_pdf_url && (
              <LinkButton href={paper.draft_pdf_url} variant="primary">
                📄 PDF
              </LinkButton>
            )}
            {paper.appendix_url && (
              <LinkButton href={paper.appendix_url} variant="secondary">
                📎 Appendix
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const YearSection = ({
  paperInfo,
  lang,
  startIndex,
}: {
  paperInfo: PaperInfo;
  lang: string;
  startIndex: number;
}) => {
  const year = paperInfo.year;
  const yearPapers = paperInfo.paper || [];

  if (yearPapers.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
            {year}
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-1" />
        </div>
        <div className="flex-1 ml-6">
          <div className="text-sm text-gray-500 font-medium">
            {yearPapers.length} {yearPapers.length === 1 ? "paper" : "papers"}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {yearPapers.map((paper, index) => {
          const paperKey =
            `${year}-paper-${paper.title?.ja || paper.title?.en || ""}-${index}`.slice(
              0,
              50,
            );
          const currentTotal = startIndex - index;
          return (
            <PaperCard
              key={paperKey}
              paper={paper}
              lang={lang}
              totalIndex={currentTotal}
            />
          );
        })}
      </div>
    </div>
  );
};

export const PublicationList = ({ papers, lang }: PublicationListProps) => {
  // Calculate total papers count
  let currentIndex = papers.reduce(
    (sum, paperInfo) => sum + (paperInfo.paper?.length || 0),
    0,
  );

  return (
    <div className="space-y-8">
      {papers.filter(Boolean).map((paperInfo) => {
        const yearPaperCount = paperInfo.paper?.length || 0;
        const startIndex = currentIndex;
        currentIndex -= yearPaperCount;

        return (
          <YearSection
            key={`year-${paperInfo.year}`}
            paperInfo={paperInfo}
            lang={lang}
            startIndex={startIndex}
          />
        );
      })}
    </div>
  );
};
