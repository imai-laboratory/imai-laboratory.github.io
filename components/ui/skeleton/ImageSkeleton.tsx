"use client";

import Image from "next/image";
import { useState } from "react";

type ImageSkeletonProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
};

export const ImageSkeleton = ({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
}: ImageSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (fill) {
    return (
      <div className={`relative w-full aspect-video ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center z-10">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Loading image icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-xs text-gray-500">画像を読み込み中...</div>
            </div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Error loading image icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-xs text-red-600">
                画像の読み込みに失敗しました
              </div>
            </div>
          </div>
        )}

        <Image
          src={src}
          alt={alt}
          fill
          onLoad={handleLoad}
          onError={handleError}
          className={`object-contain rounded-lg ${isLoading || hasError ? "invisible" : "visible"}`}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Loading image icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-xs text-gray-500">画像を読み込み中...</div>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Error loading image icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-xs text-red-600">
              画像の読み込みに失敗しました
            </div>
          </div>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        onLoad={handleLoad}
        onError={handleError}
        className={`rounded-lg max-w-full h-auto ${isLoading || hasError ? "invisible" : "visible"}`}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
};
