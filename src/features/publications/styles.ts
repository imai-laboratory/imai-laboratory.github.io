import { css } from "../../../styled-system/css";

export const publicationRow = css({
  display: "grid",
  gridTemplateColumns: "48px minmax(0, 1fr)",
  gap: "12px",
  padding: "20px",
  borderRadius: "17px",
  "@media (max-width: 680px)": {
    gridTemplateColumns: "30px minmax(0, 1fr)",
    gap: "8px",
    padding: "14px",
  },
  "& p": { margin: "0 0 6px" },
});

export const publicationIndex = css({
  display: "grid",
  placeItems: "start center",
  paddingTop: "2px",
  color: "#36a8d8",
  fontSize: "0.85rem",
  fontWeight: 800,
});

export const paperTitle = css({ fontSize: "1.03rem", color: "ink" });
export const paperMeta = css({ fontSize: "0.9rem", color: "var(--muted)" });
export const paperLinks = css({ display: "flex", gap: "12px", marginTop: "8px", fontWeight: 700 });
