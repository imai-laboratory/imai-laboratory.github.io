"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSectionProps = {
  title: string;
  message: string;
  exploreResearch: string;
  viewMembers: string;
  locale: string;
};

export function HeroSection({
  title,
  message,
  exploreResearch,
  viewMembers,
  locale,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
    }>
  >([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate floating particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
    }));

    setParticles(particleArray);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 md:py-32 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${3 + particle.speed}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative container mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {title.split(" ").map((word, index) => (
                <span
                  key={word}
                  className="inline-block mr-4 animate-bounce-in"
                  style={{ animationDelay: `${0.1 * index + 0.3}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <div className="max-w-4xl mx-auto">
            <p
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {message}
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link href={`/${locale}/research`} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <button
                type="button"
                className="relative bg-white text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
              >
                {exploreResearch}
              </button>
            </Link>

            <Link href={`/${locale}/member`} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <button
                type="button"
                className="relative bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {viewMembers}
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
