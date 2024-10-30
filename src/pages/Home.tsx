import { CategoryHead } from "../components/Client/CategoryHead/CatogoryHead";
import { Card } from "../components/Client/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getLocals } from "../api";
import { LocalErrorPage } from "../components/ErrorPage/LocalErrorPage";
import { Loader } from "../components/Loader/Loader";

export const HomePage = () => {
  const {
    data: backendData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getLocals"],
    queryFn: getLocals,
  });

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="w-full h-auto flex flex-col pb-10">
      <div className="w-full px-5">
        {backendData?.length > 0 &&
          backendData?.map((data: any, idx: number) => {
            return (
              <div key={idx} className="flex flex-col w-full mt-10">
                <CategoryHead categoryId={data?.id} categoryName={data?.name} />
                <div
                  className={`flex flex-wrap gap-5 mt-10 flex-col md:flex-row`}
                >
                  {data?.mainLocals?.length > 0 ? (
                    data?.mainLocals.map((localData: any, localIdx: number) => {
                      return (
                        <Card
                          subCategoryName={data?.name}
                          card={localData}
                          key={localIdx}
                        />
                      );
                    })
                  ) : (
                    <LocalErrorPage />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
