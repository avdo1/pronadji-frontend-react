import { CategoryHead } from "../components/Client/CategoryHead/CatogoryHead";
import { Card } from "../components/Client/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../api";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { id } = useParams();

  const {
    data: backendData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getCategoryById"],
    queryFn: id ? () => getCategoryById(id) : () => getCategoryById,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="w-full h-auto flex flex-col pb-10">
      <div className="w-full px-5">
        {!!backendData && (
          <div className="flex flex-col w-full mt-10">
            <CategoryHead categoryName={backendData?.name} />
            <div className={`flex flex-wrap gap-5 mt-10 flex-col md:flex-row`}>
              {backendData.mainLocals.map((localData: any, idx: number) => {
                return (
                  <Card
                    subCategoryName={backendData?.name}
                    card={localData}
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
