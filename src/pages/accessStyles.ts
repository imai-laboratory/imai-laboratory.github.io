import { css } from "../../styled-system/css";

export const accessLayout = css({
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
  gap: "20px",
  alignItems: "stretch",
  "@media (max-width: 680px)": { gridTemplateColumns: "1fr" },
});

export const accessCopy = css({
  "& p": { whiteSpace: "pre-line" },
  "& .multiline": { color: "inkSoft" },
});

export const mapFrame = css({
  minHeight: "420px",
  overflow: "hidden",
  padding: "8px",
  "& iframe": {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    border: 0,
    borderRadius: "18px",
  },
  "@media (max-width: 680px)": {
    minHeight: "320px",
    "& iframe": { minHeight: "300px" },
  },
});
