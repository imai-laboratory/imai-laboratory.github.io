import Link from "next/link";
import type React from "react";
import { ItemCard } from "@/components/ui/card/ItemCard";
import { YearSection } from "@/components/ui/layout/YearSection";
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
    <ItemCard index={totalIndex} colorScheme="emerald">
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
    </ItemCard>
  );
};

const PublicationYearSection = ({
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

  return (
    <YearSection
      year={year}
      itemCount={yearPapers.length}
      itemLabel="paper"
      colorScheme="emerald"
    >
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
    </YearSection>
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
          <PublicationYearSection
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
