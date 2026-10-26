import { css } from "../../styled-system/css";

export const hero = css({ position: "relative", overflow: "hidden" });

export const heroHome = css({
  minHeight: "280px",
  width: "min(1480px, calc(100% - 36px))",
  margin: "18px auto 0",
  borderRadius: "34px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 680px)": {
    width: "calc(100% - 24px)",
    minHeight: "300px",
    borderRadius: "25px",
  },
});

export const heroContent = css({
  width: "min(850px, 100%)",
  padding: "clamp(2rem, 7vw, 5rem)",
  color: "ink",
  textAlign: "center",
  "& h1": {
    margin: "0 0 20px",
    maxWidth: "760px",
    fontSize: "clamp(2rem, 4vw, 3.4rem)",
    letterSpacing: "-0.04em",
    "@media (max-width: 680px)": { fontSize: "clamp(2.2rem, 10vw, 3.2rem)" },
  },
  "@media (max-width: 680px)": { padding: "32px 24px" },
});

export const heroLead = css({
  maxWidth: "670px",
  marginInline: "auto",
  fontSize: "clamp(1.05rem, 1.9vw, 1.35rem)",
  color: "inkSoft",
});

export const homeResearch = css({
  width: "min(1480px, calc(100% - 36px))",
  marginTop: "18px",
  padding: "clamp(1.5rem, 4vw, 2.5rem)",
  borderRadius: "24px",
  color: "white",
  background: "linear-gradient(120deg, rgba(13, 198, 214, 0.9), rgba(39, 166, 239, 0.88))",
  border: "1px solid rgba(255, 255, 255, 0.86)",
  boxShadow: "glass",
  backdropFilter: "blur(22px) saturate(150%)",
  "& h2": { margin: "0 0 1.2rem", color: "white", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" },
  "@media (max-width: 680px)": { width: "calc(100% - 28px)", paddingInline: "14px" },
});

export const topicGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px",
  "@media (max-width: 980px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  "@media (max-width: 680px)": { gridTemplateColumns: "1fr" },
});

export const topicCard = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: 0,
  minHeight: "82px",
  padding: "18px",
  borderRadius: "18px",
  color: "ink",
  background: "rgba(255, 255, 255, 0.72)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  fontWeight: 700,
  transition: "transform 0.2s ease, background 0.2s ease",
  "& strong": { minWidth: 0, overflowWrap: "anywhere" },
  "&:hover": {
    transform: "translateY(-3px)",
    background: "rgba(255, 255, 255, 0.82)",
    color: "ink",
  },
  "@media (max-width: 680px)": { minHeight: "68px", padding: "15px", gap: "10px" },
});

export const topicMark = css({
  width: "8px",
  height: "8px",
  borderRadius: "full",
  flex: "0 0 auto",
  background: "#30b8e9",
  boxShadow: "0 0 0 5px rgba(48, 184, 233, 0.12)",
});
