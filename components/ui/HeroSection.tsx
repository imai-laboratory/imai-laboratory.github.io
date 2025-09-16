type HeroSectionProps = {
  title: string;
  description: string;
};

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-white mb-4">{title}</h1>
          <h2 className="subtitle is-4 has-text-white">{description}</h2>
        </div>
      </div>
    </section>
  );
}
