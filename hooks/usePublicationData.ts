import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/fetchJson";
import { PaperInfo } from "@/lib/types";

type UsePublicationDataProps = {
  jsonBase: string;
  dataType: "journal" | "international" | "domestic";
}

export const usePublicationData = ({ jsonBase, dataType }: UsePublicationDataProps) => {
  const [papers, setPapers] = useState<PaperInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const dataJsonExp = `${jsonBase}${dataType}/${dataType}_{yy}.json`;
  const yearsJson = `${jsonBase}${dataType}/${dataType}_years.json`;

  useEffect(() => {
    setLoading(true);

    fetchJson(yearsJson).then((years: unknown) => {
      const yearsArray = years as string[];
      if (!Array.isArray(yearsArray)) {
        setLoading(false);
        return;
      }

      setPapers(new Array(yearsArray.length));

      yearsArray.forEach((year, yearIdx) => {
        const url = dataJsonExp.replace("{yy}", year);
        fetchJson(url).then((paperData: unknown) => {
          setPapers((prevPapers) => {
            const newPapers = [...prevPapers];
            newPapers[yearIdx] = {
              year,
              paper: Array.isArray(paperData) ? paperData : []
            };
            return newPapers;
          });
        });
      });

      setLoading(false);
    });
  }, [dataJsonExp, yearsJson]);

  return { papers, loading };
};