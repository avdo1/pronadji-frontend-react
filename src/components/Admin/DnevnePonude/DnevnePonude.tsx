import { Switch } from "@mui/material";
import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { DnevnePonudeTable } from "./DnevnePonudeTable";

export const DnevnePonude = () => {
  const ActionDiv = ({ row }: any) => (
    <div
      className="flex items-center justify-center w-full h-full"
      {...row.getToggleRowExpandedProps({})}
    >
      <div className="w-8 h-8 cursor-pointer">{TrashCan}</div>
      <div className="w-8 h-8 cursor-pointer">{EditPen}</div>
    </div>
  );

  const ActionPonDiv = ({ row }: any) => (
    <div
      className="flex items-center justify-center w-full h-full"
      {...row.getToggleRowExpandedProps({})}
    >
      <Switch defaultChecked color="success" />
    </div>
  );

  const columns = [
    {
      Header: "Naziv ponude",
      accessor: "nazivPonude",
      id: "nazivPonude",
    },
    {
      Header: "Cijena ponude",
      accessor: "cijenaPonude",
      id: "cijenaPonude",
    },
    {
      id: "action1",
      Header: "Aktivnost ponude",
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
      nazivPonude: "Ponuda 1",
      cijenaPonude: "5,00",
      aktivnost: true,
    },
    {
      id: "223",
      nazivPonude: "Ponuda 2",
      cijenaPonude: "5,00",
      aktivnost: true,
    },
    {
      id: "323",
      nazivPonude: "Ponuda 3",
      cijenaPonude: "5,00",
      aktivnost: true,
    },
  ];

  return (
    <div className="w-full flex flex-col p-5">
      <DnevnePonudeTable columns={columns} data={rows} skipPageReset={true} />
    </div>
  );
};
