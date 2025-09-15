import { formatPaperData } from "@/lib/publicationUtils";
import type { Paper } from "@/lib/types";

type PaperDisplayProps = {
  paper: Paper;
  lang: string;
};

export const PaperDisplay = ({ paper, lang }: PaperDisplayProps) => {
  const data = formatPaperData(paper, lang);

  return (
    <div>
      {data.authors.length > 0 && (
        <p style={{ paddingBottom: "4px" }}>
          <strong>{data.authors[0]?.replace(/_/g, " ")}</strong>
          {data.authors.length > 1 && (
            <>
              <span>,</span>
              {data.authors.slice(1).join(", ").replace(/_/g, " ")}
            </>
          )}
        </p>
      )}

      {data.title && (
        <p style={{ paddingBottom: "4px" }}>
          "<strong>{data.title}</strong>"
        </p>
      )}

      {data.place && <p style={{ paddingBottom: "4px" }}>{data.place}</p>}

      {(data.location || data.eventDuration || data.presentationDate) && (
        <p style={{ paddingBottom: "4px" }}>
          {[data.location, data.eventDuration, data.presentationDate]
            .filter(Boolean)
            .join(", ")
            .replace(/_/g, " ")}
        </p>
      )}
    </div>
  );
};
