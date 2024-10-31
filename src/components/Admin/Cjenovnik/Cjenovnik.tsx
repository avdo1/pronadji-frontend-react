import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { PricesTable } from "./PricesTable";
import { Loader } from "../../Loader/Loader";
import { deleteCategoryById, getCategoriesByLocalId } from "../../../api";
interface CjenovnikProp {
  localId: string;
  setEditElement: React.Dispatch<React.SetStateAction<{}>>;
}
export const Cjenovnik = ({ localId, setEditElement }: CjenovnikProp) => {
  const ActionDiv = ({ row }: any) => {
    const queryClient = useQueryClient();
    const { mutate: doDeleteCategory } = useMutation({
      mutationFn: (categoryId: string) => deleteCategoryById(categoryId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getCategoriesByLocalId", localId],
        });
      },
    });

    const handleDelete = () => {
      const categoryId = row.original.id;
      doDeleteCategory(categoryId);
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

  const columns = [
    {
      Header: "Naziv kategorije",
      accessor: "categoryName",
      id: "categoryName",
    },
    {
      Header: "Naziv proizvoda",
      accessor: "name",
      id: "name",
    },
    {
      Header: "Cijena proizvoda",
      accessor: "price",
      id: "price",
    },
    {
      Header: "Opis proizvoda",
      accessor: "description",
      id: "description",
    },
    {
      id: "action",
      Header: "Akcije",
      Cell: ActionDiv,
    },
  ];
  const { data: categoryData, isLoading } = useQuery({
    queryKey: ["getCategoriesByLocalId", localId],
    queryFn: () => getCategoriesByLocalId(localId),
  });

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full flex p-5">
      <PricesTable
        columns={columns}
        data={categoryData}
        skipPageReset={false}
      />
    </div>
  );
};
