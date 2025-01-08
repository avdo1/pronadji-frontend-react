import { Card } from "../components/Client/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getSearchLocals } from "../api";
import { useFilterContext } from "../context/FilterContext";
import { FilterErrorPage } from "../components/ErrorPage/FilterErrorPage";

export const MainLocals = () => {
  const { filters } = useFilterContext();
  const { data: backendData } = useQuery({
    queryKey: [
      "searchLocals",
      {
        name: filters.nazivLokala,
        location: filters.lokacija,
        category: filters.tipLokala,
        event: filters.event,
      },
    ],
    queryFn: () =>
      getSearchLocals({
        name: filters.nazivLokala,
        location: filters.lokacija,
        category: filters.tipLokala,
        event: filters.event,
      }),
  });
  return (
    <div className="w-full h-auto flex flex-row pb-10">
      <div className="w-full px-5 flex flex-wrap gap-5 mt-10 flex-row">
        {backendData?.length > 0 ? (
          backendData.map((data: any, idx: number) => {
            return (
              <Card
                subCategoryName={
                  data?.subcategories?.length > 0
                    ? data?.subcategories[0].name
                    : ""
                }
                card={data}
                key={idx}
              />
            );
          })
        ) : (
          <FilterErrorPage />
        )}
      </div>
    </div>
  );
};
