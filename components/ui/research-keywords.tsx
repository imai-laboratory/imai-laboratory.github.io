import Link from "next/link";
import type { Language, ResearchArea } from "@/lib/types";

type ResearchKeywordsProps = {
  researchAreas: ResearchArea[];
  language: Language;
};

export function ResearchKeywords({
  researchAreas,
  language,
}: ResearchKeywordsProps) {
  return (
    <div className="columns is-multiline">
      {researchAreas.map((area) => (
        <div key={area.id} className="column is-4">
          <div className="card">
            <div className="card-content">
              <h3 className="title is-5">{area.title[language]}</h3>
              <p className="content">{area.description[language]}</p>
              <div className="tags">
                {area.keywords.map((keyword) => (
                  <span key={keyword} className="tag is-primary is-light">
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/research#${area.id}`}
                className="button is-primary is-light mt-3"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
