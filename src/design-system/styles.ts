import { css } from "../../styled-system/css";

/**
 * 共通UIで使うPanda CSSのクラス。
 * ページ固有のレイアウトは各ページのCSSに残し、ここでは再利用する見た目だけを管理する。
 */
export const glassPanel = css({
  background: "surface",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "line",
  boxShadow: "glass",
  backdropFilter: "blur(22px) saturate(150%)",
});

export const glassCard = css({
  background: "surface",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "lineDark",
  borderRadius: "page",
  boxShadow: "glass",
  padding: "clamp(1.25rem, 3vw, 2rem)",
  backdropFilter: "blur(22px) saturate(150%)",
});

export const siteHeader = css({
  position: "sticky",
  top: "12px",
  zIndex: 20,
  width: "min(1480px, calc(100% - 36px))",
  minHeight: "76px",
  margin: "12px auto 0",
  padding: "10px 16px 10px 22px",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  gap: "22px",
  "@media (max-width: 1220px)": {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    top: "8px",
    width: "calc(100% - 20px)",
    margin: "10px auto 0",
    padding: "16px 18px",
    borderRadius: "22px",
    background: "rgba(255, 255, 255, 0.62)",
    border: "1px solid rgba(255, 255, 255, 0.86)",
    boxShadow: "0 18px 52px rgba(52, 102, 134, 0.11), 0 2px 8px rgba(47, 88, 114, 0.05)",
    backdropFilter: "blur(22px) saturate(150%)",
  },
});

export const brand = css({
  flex: "0 0 auto",
  display: "inline-flex",
  alignItems: "center",
  "& img": {
    width: "170px",
    maxHeight: "46px",
    objectFit: "contain",
  },
  "@media (max-width: 1220px)": {
    gridColumn: "1",
    gridRow: "1",
    justifySelf: "start",
    "& img": { width: "150px" },
  },
});

export const mainNav = css({
  display: "flex",
  flex: 1,
  alignItems: "center",
  gap: "2px",
  "@media (max-width: 1220px)": {
    display: "none",
    flex: "0 0 100%",
    width: "100%",
    gridColumn: "1 / -1",
    gridRow: "2",
    flexDirection: "column",
    alignItems: "stretch",
    paddingTop: "18px",
    "&.is-open": {
      display: "flex",
      borderTop: "1px solid rgba(255, 255, 255, 0.55)",
      marginTop: "10px",
      paddingTop: "12px",
    },
  },
});

export const navLink = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  border: 0,
  background: "transparent",
  color: "inkSoft",
  fontSize: "0.82rem",
  fontWeight: 600,
  padding: "10px 9px",
  borderRadius: "12px",
  whiteSpace: "nowrap",
  cursor: "pointer",
  "@media (max-width: 1220px)": {
    width: "100%",
    justifyContent: "flex-start",
    padding: "13px 0",
    fontSize: "1.05rem",
    textAlign: "left",
    borderRadius: "12px",
    "&:hover, &.is-active, &.router-link-exact-active": {
      background: "rgba(255, 255, 255, 0.24)",
      color: "primaryDeep",
      boxShadow: "none",
    },
  },
  "&:hover, &.is-active, &.router-link-exact-active": {
    background: "rgba(215, 239, 249, 0.72)",
    color: "primaryDeep",
    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.56)",
  },
});

export const navGroup = css({
  position: "relative",
});

export const chevron = css({
  width: "8px",
  height: "8px",
  marginTop: "-4px",
  borderRight: "2px solid currentColor",
  borderBottom: "2px solid currentColor",
  opacity: 0.58,
  transform: "rotate(45deg)",
  transition: "transform 0.18s ease",
  "&.is-open": {
    marginTop: "4px",
    transform: "rotate(225deg)",
  },
});

export const navDropdown = css({
  display: "none",
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: "220px",
  padding: "8px",
  borderRadius: "16px",
  background: "rgba(248, 252, 255, 0.91)",
  border: "1px solid white",
  boxShadow: "glass",
  backdropFilter: "blur(22px)",
  "&.is-open": {
    display: "grid",
  },
  "@media (max-width: 1220px)": {
    position: "static",
    minWidth: 0,
    margin: "0 0 8px 18px",
    padding: "4px 0",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    borderRadius: "14px",
    boxShadow: "0 10px 26px rgba(52, 102, 134, 0.08)",
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(18px) saturate(140%)",
    "&.is-open": { display: "grid" },
  },
});

export const dropdownLink = css({
  padding: "9px 12px",
  borderRadius: "10px",
  fontSize: "0.88rem",
  color: "inkSoft",
  "&:hover": {
    background: "rgba(215, 239, 249, 0.72)",
    color: "primaryDeep",
    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.56)",
  },
});

export const navActions = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginLeft: "auto",
});

export const languageSelect = css({
  maxWidth: "110px",
  color: "inkSoft",
  background: "rgba(255, 255, 255, 0.6)",
  border: "1px solid rgba(123, 165, 190, 0.25)",
  borderRadius: "10px",
  padding: "8px 6px",
  fontSize: "0.8rem",
});

export const button = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minHeight: "42px",
  padding: "9px 16px",
  borderRadius: "13px",
  border: "1px solid transparent",
  fontWeight: 700,
  fontSize: "0.9rem",
  transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
  "&:hover": {
    transform: "translateY(-1px)",
  },
});

export const primaryButton = css({
  color: "white",
  background: "linear-gradient(135deg, #35c4f2, #1797d4)",
  boxShadow: "0 7px 18px rgba(39, 170, 220, 0.24), inset 0 1px rgba(255, 255, 255, 0.32)",
  "&:hover": {
    color: "white",
    boxShadow: "0 10px 22px rgba(39, 170, 220, 0.32)",
  },
});

export const b3Button = css({
  color: "white",
  background: "linear-gradient(135deg, #35c4f2, #1797d4)",
  boxShadow: "0 7px 18px rgba(39, 170, 220, 0.24), inset 0 1px rgba(255, 255, 255, 0.32)",
  "&:hover": {
    color: "white",
    background: "linear-gradient(135deg, #35c4f2, #1797d4)",
    boxShadow: "0 10px 22px rgba(39, 170, 220, 0.32)",
  },
});

export const socialButton = css({
  display: "grid",
  placeItems: "center",
  width: "38px",
  height: "38px",
  borderRadius: "12px",
  color: "#1767a5",
  background: "rgba(255, 255, 255, 0.92)",
  border: "2px solid #1767a5",
  boxShadow: "0 2px 8px rgba(23, 103, 165, 0.16)",
  fontSize: "1.3rem",
  lineHeight: 1,
  fontWeight: 700,
  transition: "background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    color: "white",
    background: "#1767a5",
    boxShadow: "0 4px 12px rgba(23, 103, 165, 0.28)",
  },
});

export const menuToggle = css({
  display: "none",
  "@media (max-width: 1220px)": {
    display: "grid",
    gridColumn: "1 / -1",
    gridRow: "1",
    justifySelf: "end",
    gap: "5px",
    width: "42px",
    height: "42px",
    marginLeft: "auto",
    placeContent: "center",
    border: 0,
    borderRadius: 0,
    background: "transparent",
    cursor: "pointer",
    "& span": {
      width: "28px",
      height: "1px",
      borderRadius: "3px",
      background: "#333",
    },
    "&.is-open span:nth-child(1)": { transform: "translateY(7px) rotate(45deg)" },
    "&.is-open span:nth-child(2)": { opacity: 0 },
    "&.is-open span:nth-child(3)": { transform: "translateY(-7px) rotate(-45deg)" },
  },
});
