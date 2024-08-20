import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { Switch } from "@mui/material";
import { OglasiZaPosaoTable } from "./OglasiZaPosaoTable";

export const OglasiZaPosao = () => {
  const ActionDiv = ({ row }: any) => (
    <div
      className="w-full h-full flex flex-row items-center justify-center"
      {...row.getToggleRowExpandedProps({})}
    >
      <div className="w-8 h-8 cursor-pointer">{TrashCan}</div>
      <div className="w-8 h-8 cursor-pointer">{EditPen}</div>
    </div>
  );

  const ActionPonDiv = ({ row }: any) => (
    <div
      className="w-full h-full flex flex-row items-center justify-center"
      {...row.getToggleRowExpandedProps({})}
    >
      <Switch defaultChecked color="success" />
    </div>
  );

  const columns = [
    {
      Header: "Naziv pozicije",
      accessor: "nazivPozicije",
      id: "nazivPozicije",
    },
    {
      Header: "Opis pozicije",
      accessor: "opisPozicije",
      id: "opisPozicije",
    },
    {
      id: "action1",
      Header: "Aktivnost pozicije",
      Cell: ActionPonDiv,
    },
    {
      id: "action",
      Header: "Akcije",
      Cell: ActionDiv,
    },
  ];

  const rows = [
    {
      id: "123",
      nazivPozicije: "Pozicija 1",
      opisPozicije: "Opis 1",
      aktivnost: true,
    },
    {
      id: "223",
      nazivPozicije: "Pozicija 2",
      opisPozicije: "Opis 2",
      aktivnost: true,
    },
    {
      id: "323",
      nazivPozicije: "Pozicija 3",
      opisPozicije: "Opis 3",
      aktivnost: true,
    },
  ];

  return (
    <div className="w-full flex flex-col p-5">
      <OglasiZaPosaoTable columns={columns} data={rows} skipPageReset={true} />
    </div>
  );
};
