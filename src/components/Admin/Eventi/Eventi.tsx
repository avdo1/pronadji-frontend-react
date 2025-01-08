import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { EventsTable } from "./EventsTable";
import {
  deleteEventById,
  getActiveEventsByLocalId,
  getPassedEventsByLocalId,
} from "../../../api";
import { Loader } from "../../Loader/Loader";
interface EventiProp {
  localId: string;
  setEditElement: React.Dispatch<React.SetStateAction<{}>>;
}
export const Eventi = ({ localId, setEditElement }: EventiProp) => {
  const ActionDiv = ({ row }: any) => {
    const queryClient = useQueryClient();
    const { mutate: doDeleteEvent } = useMutation({
      mutationFn: (eventId: string) => deleteEventById(eventId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getPassedEventsByLocalId", localId],
        });
        queryClient.invalidateQueries({
          queryKey: ["getActiveEventsByLocalId", localId],
        });
      },
    });

    const handleDelete = () => {
      const eventId = row.original.id;
      doDeleteEvent(eventId);
    };
    return (
      <div
        className="flex items-center justify-center gap-4 w-full h-full"
        {...row.getToggleRowExpandedProps({})}
      >
        <div onClick={handleDelete} className="w-8 h-8 cursor-pointer h-full">
          {TrashCan}
        </div>
        <div
          onClick={() => {
            setEditElement(row.original);
          }}
          className="w-8 h-8 cursor-pointer h-full"
        >
          {EditPen}
        </div>
      </div>
    );
  };

  const columnsNadolazeci = [
    {
      Header: "Naziv eventa",
      accessor: "name",
      id: "name",
    },
    {
      Header: "Datum eventa",
      accessor: "startDate",
      id: "startDate",
    },
    {
      id: "action",
      Header: "Akcije",
      Cell: ActionDiv,
    },
  ];

  const columnsProsli = [
    {
      Header: "Naziv eventa",
      accessor: "name",
      id: "name",
    },
    {
      Header: "Povezana galerija",
      accessor: "povezanaGalerija",
      id: "povezanaGalerija",
    },
    {
      Header: "Datum eventa",
      accessor: "startDate",
      id: "startDate",
    },
    {
      id: "action",
      Header: "Akcije",
      Cell: ActionDiv,
    },
  ];

  const { data: passedEventsData, isLoading: pasedIsLoading } = useQuery({
    queryKey: ["getPassedEventsByLocalId", localId],
    queryFn: () => getPassedEventsByLocalId(localId),
  });
  const { data: activeEventsData, isLoading: activeIsLoading } = useQuery({
    queryKey: ["getActiveEventsByLocalId", localId],
    queryFn: () => getActiveEventsByLocalId(localId),
  });
  const isLoading = activeIsLoading || pasedIsLoading;
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col p-5">
      <div className="w-full h-10 flex items-center justify-start pb-8 mt-5">
        <p className="text-gray-500 font-sans font-light text-3xl">
          Nadolazeci eventi
        </p>
      </div>
      <EventsTable
        columns={columnsNadolazeci}
        data={activeEventsData}
        skipPageReset={false}
      />
      <div className="w-full h-10 flex items-center justify-start pb-8 mt-10">
        <p className="text-gray-500 font-sans font-light text-3xl">
          Prosli eventi
        </p>
      </div>
      <EventsTable
        columns={columnsProsli}
        data={passedEventsData}
        skipPageReset={false}
      />
    </div>
  );
};
