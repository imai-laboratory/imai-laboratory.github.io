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

export const formatPaperData = (paper: Paper, lang: string) => {
  const isJa = lang === "ja";

  // Authors
  let authors: string[] = [];
  if (paper.author) {
    const authorData = getLangText(paper.author, lang);
    authors = Array.isArray(authorData) ? authorData : [authorData];
  }

  // Title
  const title = paper.title
    ? getLangText(paper.title, lang)?.replace(/_/g, " ")
    : "";

  // Publication info
  const place = [];
  if (paper.book) place.push(getLangText(paper.book, lang));
  if (paper.vol) place.push(paper.vol);
  if (paper.no) place.push(paper.no);
  if (paper.page) place.push(paper.page);
  if (paper.year) place.push(paper.year);

  // Location
  const location = [];
  if (paper.host_city) location.push(getLangText(paper.host_city, lang));
  if (paper.host_country) location.push(getLangText(paper.host_country, lang));

  const locationStr =
    location.length > 0
      ? isJa
        ? location.reverse().join("・")
        : location.join(", ")
      : "";

  // Event duration
  let eventDuration = "";
  if (paper.event_duration) {
    const [start, end] = paper.event_duration.split(" - ");
    eventDuration = isJa
      ? `開催期間: ${formatDateJa(start)}〜${formatDateJa(end)}`
      : `Event Duration: ${paper.event_duration}`;
  }

  // Presentation date
  let presentationDate = "";
  if (paper.presentation_date) {
    presentationDate = isJa
      ? `発表日: ${formatDateJa(paper.presentation_date)}`
      : `Presentation Date: ${paper.presentation_date}`;
  }

  return {
    authors,
    title,
    place: place.join(",").replace(/_/g, " "),
    location: locationStr,
    eventDuration,
    presentationDate,
  };
};
