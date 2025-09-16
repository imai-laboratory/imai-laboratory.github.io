"use client";

import { useEffect, useState } from "react";
import type { PaperInfo } from "@/types";
import { PublicationList } from "./PublicationList";
import { PublicationListSkeleton } from "./PublicationListSkeleton";

type PublicationListWithSkeletonProps = {
  papers: PaperInfo[];
  lang: string;
  initialDelay?: number;
};

export const PublicationListWithSkeleton = ({
  papers,
  lang,
  initialDelay = 800,
}: PublicationListWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  if (isLoading) {
    return <PublicationListSkeleton />;
  }

  return <PublicationList papers={papers} lang={lang} />;
};
