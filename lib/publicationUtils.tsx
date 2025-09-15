import type { Paper } from "@/lib/types";

export const getLangText = (elem: any, lang: string): string => {
  return elem && elem[lang] !== undefined ? elem[lang] : elem;
};

export const formatDateJa = (dateStr: string): string => {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}月${day}日`;
  } catch {
    return dateStr;
  }
};

export const createPaperText = (paper: Paper, lang: string) => {
  const isJa = lang === "ja";
  const textList = [];

  if (paper.author) {
    const authors = getLangText(paper.author, lang);
    const authorList = Array.isArray(authors) ? authors : [authors];
    textList.push(
      <p key="authors" style={{ paddingBottom: "4px" }}>
        <strong>{authorList[0]?.replace(/_/g, " ")}</strong>
        {authorList.length > 1 && (
          <>
            <span>,</span>
            {authorList.slice(1).join(", ").replace(/_/g, " ")}
          </>
        )}
      </p>,
    );
  }

  if (paper.title) {
    textList.push(
      <p key="title" style={{ paddingBottom: "4px" }}>
        "<strong>{getLangText(paper.title, lang)?.replace(/_/g, " ")}</strong>"
      </p>,
    );
  }

  const place = [];
  if (paper.book) place.push(getLangText(paper.book, lang));
  if (paper.vol) place.push(paper.vol);
  if (paper.no) place.push(paper.no);
  if (paper.page) place.push(paper.page);
  if (paper.year) place.push(paper.year);

  textList.push(
    <p key="place" style={{ paddingBottom: "4px" }}>
      {place.join(",").replace(/_/g, " ")}
    </p>,
  );

  const parts = [];
  // Location
  const location = [];
  if (paper.host_city) location.push(getLangText(paper.host_city, lang));
  if (paper.host_country) location.push(getLangText(paper.host_country, lang));

  if (location.length > 0) {
    const locationStr = isJa
      ? location.reverse().join("・")
      : location.join(", ");
    parts.push(locationStr);
  }

  // Event duration
  if (paper.event_duration) {
    const [start, end] = paper.event_duration.split(" - ");
    const duration = isJa
      ? `開催期間: ${formatDateJa(start)}〜${formatDateJa(end)}`
      : `Event Duration: ${paper.event_duration}`;
    parts.push(duration);
  }

  // Presentation date
  if (paper.presentation_date) {
    const presentation = isJa
      ? `発表日: ${formatDateJa(paper.presentation_date)}`
      : `Presentation Date: ${paper.presentation_date}`;
    parts.push(presentation);
  }

  textList.push(
    <p key="details" style={{ paddingBottom: "4px" }}>
      {parts.join(", ").replace(/_/g, " ")}
    </p>,
  );

  return textList;
};
