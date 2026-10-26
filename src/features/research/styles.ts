import { css } from "../../../styled-system/css";

export const researchBlock = css({
  paddingBottom: "12px",
});

export const subsectionHeading = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  padding: "19px 24px",
  marginBottom: "12px",
  borderRadius: "18px",
  color: "white",
  background: "linear-gradient(120deg, rgba(35, 153, 199, 0.95), rgba(39, 190, 245, 0.88))",
  boxShadow: "0 10px 28px rgba(37, 149, 193, 0.16)",
  "& h2": {
    width: "100%",
    margin: 0,
    textAlign: "left",
    fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
  },
});

export const researchContent = css({
  display: "grid",
  gridTemplateColumns: "minmax(240px, 0.85fr) minmax(0, 1.15fr)",
  gap: "26px",
  alignItems: "start",
  padding: "24px 8px",
  "@media (max-width: 680px)": {
    gridTemplateColumns: "1fr",
    gap: "14px",
    padding: "16px 2px",
  },
});

export const researchContentFull = css({
  gridTemplateColumns: "1fr",
});

export const researchMedia = css({
  padding: "10px",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.56)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  "& img, & video": {
    width: "100%",
    maxHeight: "390px",
    objectFit: "contain",
    borderRadius: "12px",
  },
});

export const researchImageShell = css({
  position: "relative",
  minHeight: "220px",
  "& img": {
    display: "block",
    minHeight: "220px",
    transition: "opacity 0.18s ease",
  },
  "& img.is-loading": { opacity: 0 },
});

export const researchSkeleton = css({
  position: "absolute",
  inset: "10px",
  minHeight: "200px",
  borderRadius: "12px",
  background:
    "linear-gradient(100deg, rgba(210, 229, 239, 0.62) 20%, rgba(255, 255, 255, 0.82) 40%, rgba(210, 229, 239, 0.62) 60%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-shimmer 1.4s ease-in-out infinite",
});

export const researchDescription = css({
  color: "inkSoft",
  lineHeight: 1.9,
  "& video": { width: "100%", marginTop: "14px", borderRadius: "14px" },
});
