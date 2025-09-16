type PageHeroProps = {
  title: string;
  backgroundImage?: string;
};

export const PageHero = ({ title, backgroundImage }: PageHeroProps) => {
  return (
    <section
      className={`text-white ${
        backgroundImage
          ? "py-16 md:py-24 bg-cover bg-center bg-no-repeat"
          : "py-6 bg-primary-500"
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            }
          : undefined
      }
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
};
