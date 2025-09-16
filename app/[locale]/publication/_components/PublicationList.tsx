import Link from "next/link";
import type { Paper, PaperInfo } from "@/lib/types";
import { PaperDisplay } from "./PaperDisplay";

type PublicationListProps = {
  papers: PaperInfo[];
  lang: string;
};

const createPDFLink = (paper: Paper) => {
  if (paper.draft_pdf_url) {
    return <Link href={paper.draft_pdf_url}>[PDF]</Link>;
  }
  return null;
};

const createAppendixLink = (paper: Paper) => {
  if (paper.appendix_url) {
    return <Link href={paper.appendix_url}>[Appendix]</Link>;
  }
  return null;
};

export const PublicationList = ({ papers, lang }: PublicationListProps) => {
  // Count up the number of papers
  let paperTotalIdx = 0;
  papers.forEach((paperInfo) => {
    paperTotalIdx += paperInfo.paper?.length || 0;
  });

  // Create paper list
  const paperList = papers.map((paperInfo, _yearIdx) => {
    const year = paperInfo.year;
    const yearPapers = paperInfo.paper || [];

    const yearPaperList = yearPapers.map((paper, paperIdx) => (
      <tr
        key={`${year}-paper-${paperIdx}-${paper.title?.ja || paper.title?.en || paperIdx}`}
        style={{ borderBottom: "1px solid #95a5a6" }}
      >
        <td>{paperTotalIdx--}</td>
        <td style={{ padding: "12px" }}>
          <PaperDisplay paper={paper} lang={lang} />
          {createPDFLink(paper)}
          {createAppendixLink(paper)}
        </td>
      </tr>
    ));

    return (
      <div key={`year-${year}`}>
        <h3
          style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}
        >
          {year}
        </h3>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>{yearPaperList}</tbody>
        </table>
      </div>
    );
  });

  return <div>{paperList}</div>;
};
