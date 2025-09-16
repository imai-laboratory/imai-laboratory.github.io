"use client";

import Link from "next/link";
import { useState } from "react";

type Keyword = {
  id: string;
  title: string;
  href: string;
  icon: string;
  gradient: string;
};

type KeywordsSectionProps = {
  keywords: string;
  keywordData: Keyword[];
};

export function KeywordsSection({
  keywords,
  keywordData,
}: KeywordsSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gray-800/10 animate-pulse"></div>
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {keywords}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keywordData.map((keyword, index) => (
            <Link
              key={keyword.id}
              href={keyword.href}
              onMouseEnter={() => setHoveredCard(keyword.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative flex"
            >
              <div
                className={`
                  relative p-6 rounded-2xl backdrop-blur-sm border border-white/10
                  transform transition-all duration-500 hover:scale-105 flex-1 flex flex-col
                  ${hoveredCard === keyword.id ? "translate-y-2" : ""}
                  animate-fade-in-up
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  background: `linear-gradient(135deg, ${keyword.gradient})`,
                }}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center h-full">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      {keyword.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {keyword.title}
                    </h3>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredCard === keyword.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`particle-${keyword.id}-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
