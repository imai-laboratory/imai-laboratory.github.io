export type Paper = {
  author?: { [key: string]: string[] | string };
  title?: { [key: string]: string };
  book?: { [key: string]: string };
  vol?: string;
  no?: string;
  page?: string;
  year?: string;
  host_city?: { [key: string]: string };
  host_country?: { [key: string]: string };
  event_duration?: string;
  presentation_date?: string;
  draft_pdf_url?: string;
  appendix_url?: string;
};

export type PaperInfo = {
  year: string;
  paper: Paper[];
};