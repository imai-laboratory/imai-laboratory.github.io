"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type PageHeroProps = {
  titleKey?: string;
  title?: string;
  backgroundImage?: string;
  iconKey?: string;
  icon?: string;
  subtitleKey?: string;
  subtitle?: string;
};

export const PageHero = ({
  titleKey,
  title,
  backgroundImage,
  iconKey,
  icon,
  subtitleKey,
  subtitle,
}: PageHeroProps) => {
  const t = useTranslations();

  const displayTitle = titleKey ? t(titleKey) : title || "";
  const displayIcon = iconKey ? t(iconKey) : icon;
  const displaySubtitle = subtitleKey ? t(subtitleKey) : subtitle;
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
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.5 + 0.3,
    }));

    setParticles(particleArray);
  }, []);

  const gradientClasses = backgroundImage
    ? "from-black/60 via-black/40 to-black/60"
    : "from-indigo-900 via-purple-900 to-pink-900";

  return (
    <section
      className={`relative bg-gradient-to-br ${gradientClasses} py-16 md:py-24 overflow-hidden`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
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
              animationDelay: `${particle.id * 0.15}s`,
              animationDuration: `${4 + particle.speed}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {displayIcon && (
            <div className="inline-block mb-4">
              <div
                className="text-6xl mb-4 animate-bounce-in"
                style={{ animationDelay: "0.2s" }}
              >
                {displayIcon}
              </div>
            </div>
          )}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            <span
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {displayTitle}
            </span>
          </h1>

          {displaySubtitle && (
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                {displaySubtitle}
              </p>
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
