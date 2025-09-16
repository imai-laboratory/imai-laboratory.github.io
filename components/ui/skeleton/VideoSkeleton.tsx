"use client";

import { useEffect, useRef, useState } from "react";

type VideoSkeletonProps = {
  src: string;
  controls?: boolean;
  "aria-label"?: string;
  className?: string;
};

export const VideoSkeleton = ({
  src,
  controls = true,
  "aria-label": ariaLabel,
  className = "",
}: VideoSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if video is already loaded on mount (for reload case)
    if (video.readyState >= 3) {
      // HAVE_FUTURE_DATA or higher
      setIsLoading(false);
      return;
    }

    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);
  }, []);

  const handleLoadedData = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleLoadedMetadata = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Loading video icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-sm text-gray-500">動画を読み込み中...</div>
          </div>
        </div>
      )}

      {hasError && (
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Error loading video icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-sm text-red-600">
              動画の読み込みに失敗しました
            </div>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        controls={controls}
        aria-label={ariaLabel}
        onLoadedData={handleLoadedData}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onError={handleError}
        className={`w-full h-auto rounded-lg ${isLoading || hasError ? "invisible" : "visible"}`}
        preload="metadata"
      />
    </div>
  );
};
