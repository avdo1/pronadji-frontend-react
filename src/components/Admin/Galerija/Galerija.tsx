import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { GalleryTable } from "./GalleryTable";

export const Galerije = () => {
  const ActionDiv = ({ row }: any) => (
    <div
      className="flex items-center justify-center w-full h-full space-x-4"
      {...row.getToggleRowExpandedProps({})}
    >
      <div className="w-6 h-6">{TrashCan}</div>
      <div className="w-6 h-6">{EditPen}</div>
    </div>
  );

  const columns = [
    {
      Header: "Naziv galerije",
      accessor: "nazivGalerije",
      id: "nazivGalerije",
    },
    {
      Header: "Datum objave",
      accessor: "datumObjave",
      id: "datumObjave",
    },
    {
      Header: "Broj slika u galeriji",
      accessor: "slikeUGaleriji",
      id: "slikeUGaleriji",
    },
    {
      id: "action",
      Header: "Akcije",
      Cell: ActionDiv,
    },
  ];

  const mockedBackendData = [
    {
      id: "123",
      nazivGalerije: "Galerija 1",
      datumObjave: "01-07-2023",
      slikeUGaleriji: 10,
    },
    {
      id: "223",
      nazivGalerije: "Galerija 2",
      datumObjave: "01-07-2023",
      slikeUGaleriji: 20,
    },
    {
      id: "323",
      nazivGalerije: "Galerija 3",
      datumObjave: "01-07-2023",
      slikeUGaleriji: 30,
    },
  ];

  return (
    <div className="w-full p-5">
      <GalleryTable
        columns={columns}
        data={mockedBackendData}
        skipPageReset={false}
      />
    </div>
  );
};
