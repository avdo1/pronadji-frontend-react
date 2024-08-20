import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { PricesTable } from "./PricesTable";

export const Cjenovnik = () => {
  const ActionDiv = ({ row }: any) => (
    <div
      className="flex items-center justify-center w-full h-full"
      {...row.getToggleRowExpandedProps({})}
    >
      <div className="w-8 h-8 cursor-pointer">{TrashCan}</div>
      <div className="w-8 h-8 cursor-pointer">{EditPen}</div>
    </div>
  );

  const columns = [
    {
      Header: "Naziv kategorije",
      accessor: "nazivKategorije",
      id: "nazivKategorije",
    },
    {
      Header: "Naziv proizvoda",
      accessor: "nazivProizvoda",
      id: "nazivProizvoda",
    },
    {
      Header: "Cijena proizvoda",
      accessor: "cijenaProizvoda",
      id: "cijenaProizvoda",
    },
    {
      Header: "Opis proizvoda",
      accessor: "opisProizvoda",
      id: "opisProizvoda",
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
      nazivKategorije: "Kategorija 1",
      nazivProizvoda: [
        { id: 1, naziv: "Espresso" },
        { id: 2, naziv: "Espresso sa mlijekom" },
        { id: 3, naziv: "Capuccino" },
        { id: 4, naziv: "Macchiato" },
      ],
      cijenaProizvoda: [
        { id: 1, cijena: "1.50 KM" },
        { id: 2, cijena: "1.50 KM" },
        { id: 3, cijena: "1.50 KM" },
        { id: 4, cijena: "1.50 KM" },
      ],
      opisProizvoda: [
        { id: 1, opis: "" },
        { id: 2, opis: "" },
        { id: 3, opis: "" },
        { id: 4, opis: "" },
      ],
    },
    {
      id: "223",
      nazivKategorije: "Kategorija 2",
      nazivProizvoda: [
        { id: 1, naziv: "Juicy" },
        { id: 2, naziv: "Coca Cola" },
        { id: 3, naziv: "Fanta" },
        { id: 4, naziv: "Ledeni caj" },
      ],
      cijenaProizvoda: [
        { id: 1, cijena: "3.00 KM" },
        { id: 2, cijena: "3.00 KM" },
        { id: 3, cijena: "3.00 KM" },
        { id: 4, cijena: "3.00 KM" },
      ],
      opisProizvoda: [
        { id: 1, opis: "" },
        { id: 2, opis: "Breskva, Limun" },
        { id: 3, opis: "" },
        { id: 4, opis: "" },
      ],
    },
  ];

  return (
    <div className="w-full flex p-5">
      <PricesTable
        columns={columns}
        data={mockedBackendData}
        skipPageReset={false}
      />
    </div>
  );
};
