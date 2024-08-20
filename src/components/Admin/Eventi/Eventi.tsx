import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { EventsTable } from "./EventsTable";

export const Eventi = () => {
  const ActionDiv = ({ row }: any) => (
    <div
      className="flex items-center justify-center w-full h-full"
      {...row.getToggleRowExpandedProps({})}
    >
      <div className="w-8 h-8 cursor-pointer">{TrashCan}</div>
      <div className="w-8 h-8 cursor-pointer">{EditPen}</div>
    </div>
  );

  const columnsNadolazeci = [
    {
      Header: "Naziv eventa",
      accessor: "nazivEventa",
      id: "nazivEventa",
    },
    {
      Header: "Datum eventa",
      accessor: "datumEventa",
      id: "datumEventa",
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
      accessor: "nazivEventa",
      id: "nazivEventa",
    },
    {
      Header: "Povezana galerija",
      accessor: "povezanaGalerija",
      id: "povezanaGalerija",
    },
    {
      Header: "Datum eventa",
      accessor: "datumEventa",
      id: "datumEventa",
    },
    {
      id: "action",
      Header: "Akcije",
      Cell: ActionDiv,
    },
  ];

  const mockedBackendDataProsli = [
    {
      id: "123",
      nazivEventa: "Prosli event 1",
      povezanaGalerija: "galerija1@galerija",
      datumEventa: "01-07-2023",
    },
    {
      id: "223",
      nazivEventa: "Prosli event 2",
      povezanaGalerija: "galerija2@galerija",
      datumEventa: "01-07-2023",
    },
    {
      id: "323",
      nazivEventa: "Prosli event 3",
      povezanaGalerija: "galerija3@galerija",
      datumEventa: "01-07-2023",
    },
  ];

  const mockedBackendDataNadolazeci = [
    {
      id: "123",
      nazivEventa: "Nadolazeci event 1",
      datumEventa: "01-07-2023",
    },
    {
      id: "223",
      nazivEventa: "Nadolazeci event 2",
      datumEventa: "01-07-2023",
    },
    {
      id: "323",
      nazivEventa: "Nadolazeci event 3",
      datumEventa: "01-07-2023",
    },
  ];

  return (
    <div className="w-full flex flex-col p-5">
      <div className="w-full h-10 flex items-center justify-start pb-8 mt-5">
        <p className="text-gray-500 font-sans font-light text-3xl">
          Nadolazeci eventi
        </p>
      </div>
      <EventsTable
        columns={columnsNadolazeci}
        data={mockedBackendDataNadolazeci}
        skipPageReset={false}
      />
      <div className="w-full h-10 flex items-center justify-start pb-8 mt-5">
        <p className="text-gray-500 font-sans font-light text-3xl">
          Prosli eventi
        </p>
      </div>
      <EventsTable
        columns={columnsProsli}
        data={mockedBackendDataProsli}
        skipPageReset={false}
      />
    </div>
  );
};
