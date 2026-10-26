import { css } from "../../../styled-system/css";

export const memberGroup = css({ marginBottom: "1.6rem" });

export const sectionTitle = css({
  margin: "1rem 0 1.2rem",
  textAlign: "center",
  fontSize: "1.8rem",
});

export const memberGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "16px",
  "@media (max-width: 980px)": { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
  "@media (max-width: 680px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "10px",
  },
});

export const memberCard = css({
  padding: "20px 14px",
  textAlign: "center",
  borderRadius: "20px",
  overflow: "hidden",
  "@media (max-width: 680px)": { padding: "15px 10px" },
  "& h3": { margin: "0 0 7px", fontSize: "1.1rem" },
  "& p": { color: "var(--muted)", marginBottom: "5px" },
  "& a": {
    display: "block",
    fontSize: "0.8rem",
    overflowWrap: "anywhere",
    "@media (max-width: 680px)": { fontSize: "0.72rem" },
  },
});

export const memberAvatar = css({
  width: "min(100%, 180px)",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "full",
  margin: "0 auto 16px",
  background: "rgba(255, 255, 255, 0.6)",
  border: "4px solid rgba(255, 255, 255, 0.88)",
  boxShadow: "0 8px 20px rgba(45, 91, 117, 0.12)",
  "@media (max-width: 680px)": { width: "130px" },
});

export const memberOption = css({ marginTop: "8px", fontSize: "0.86rem" });

export const pastMemberList = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "18px",
  "@media (max-width: 680px)": { gridTemplateColumns: "1fr" },
  "& section": {
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.38)",
    border: "1px solid rgba(255, 255, 255, 0.7)",
  },
  "& h3": { margin: "0 0 10px", fontSize: "1.2rem" },
  "& p": { margin: "0 0 6px" },
});
