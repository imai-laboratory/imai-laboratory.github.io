"use client";

import Image from "next/image";
import { useState } from "react";
import { SafeHTML } from "@/components/elements/SafeHTML";

type MemberCardProps = {
  name: string;
  grade: string;
  email: string;
  optionElement?: string;
  imgUrl: string;
};

export const MemberCard = ({
  name,
  grade,
  email,
  optionElement,
  imgUrl,
}: MemberCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group h-full">
      <div className="bg-white rounded-xl shadow-sm p-6 text-center h-full flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 hover:border-gray-200">
        <div className="mb-4 relative">
          {!imageLoaded && (
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
          <Image
            className={`w-24 h-24 mx-auto rounded-full object-cover transition-all duration-300 ring-4 ring-transparent group-hover:ring-blue-100 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={imgUrl}
            alt={name}
            width={96}
            height={96}
            onLoad={() => setImageLoaded(true)}
            priority
          />
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-lg mb-2 text-gray-900 transition-colors group-hover:text-blue-600">
            {name}
          </p>
          <p className="text-gray-600 text-sm font-medium mb-1">{grade}</p>
          <p className="text-gray-500 text-xs break-all hover:text-blue-500 transition-colors">
            {email}
          </p>
          {optionElement && (
            <SafeHTML
              html={optionElement}
              className="whitespace-pre-line text-sm text-gray-600 mt-3 leading-relaxed"
            />
          )}
        </div>
      </div>
    </div>
  );
};
