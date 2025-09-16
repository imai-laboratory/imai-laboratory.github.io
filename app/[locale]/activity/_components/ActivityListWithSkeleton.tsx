"use client";

import { useEffect, useState } from "react";
import type { ActivityInfo } from "@/types";
import { ActivityList } from "./ActivityList";
import { ActivityListSkeleton } from "./ActivityListSkeleton";

type ActivityListWithSkeletonProps = {
  activities: ActivityInfo[];
  initialDelay?: number;
};

export const ActivityListWithSkeleton = ({
  activities,
  initialDelay = 800,
}: ActivityListWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  if (isLoading) {
    return <ActivityListSkeleton />;
  }

  return <ActivityList activities={activities} />;
};
