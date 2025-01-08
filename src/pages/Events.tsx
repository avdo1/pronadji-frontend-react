import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Client/Card/Card";
import { getEvents } from "../api";
import { Loader } from "../components/Loader/Loader";

export const EventsPage = () => {
  const {
    data: eventsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getEvents"],
    queryFn: getEvents,
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
    <div className="w-full min-h-fit px-4 md:px-12">
      <div className="flex flex-wrap gap-4 mt-10 mb-10 md:gap-4 md:mt-5">
        {eventsData.length > 0 &&
          eventsData.map((data: any, idx: number) => {
            return (
              <Card
                subCategoryName={
                  data?.mainLocal?.name ? data.mainLocal.name : ""
                }
                card={data}
                key={idx}
              />
            );
          })}
      </div>
    </div>
  );
};
