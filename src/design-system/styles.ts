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
});

export const mainNav = css({
  display: "flex",
  flex: 1,
  alignItems: "center",
  gap: "2px",
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
  color: "ink",
  background: "rgba(255, 255, 255, 0.58)",
  fontWeight: 700,
});

export const menuToggle = css({
  display: "none",
});
