"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

type SafeHTMLProps = {
  html: string;
  className?: string;
};

export const SafeHTML = ({ html, className = "" }: SafeHTMLProps) => {
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    // DOMPurifyはクライアントサイドでのみ動作するため、useEffectで実行
    const clean = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "a",
        "p",
        "br",
        "ul",
        "ol",
        "li",
      ],
      ALLOWED_ATTR: ["href", "target", "rel"],
    });
    setSanitizedHTML(clean);
  }, [html]);

  if (!sanitizedHTML) {
    // サニタイズ前は元のテキストをそのまま表示
    return <div className={className}>{html}</div>;
  }

  return (
    <div
      className={className}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Using DOMPurify for safe HTML rendering
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};
