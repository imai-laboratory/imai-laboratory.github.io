"use client";

import type React from "react";
import { useEffect, useState } from "react";

type WithSkeletonProps = {
  children: React.ReactNode;
  skeleton: React.ReactNode;
  initialDelay?: number;
};

export const WithSkeleton = ({
  children,
  skeleton,
  initialDelay = 800,
}: WithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  if (isLoading) {
    return <>{skeleton}</>;
  }

  return <>{children}</>;
};
