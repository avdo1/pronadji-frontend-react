import { Switch } from "@mui/material";
import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { DnevnePonudeTable } from "./DnevnePonudeTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteDailyOfferById,
  getDailyOfferByLocalId,
  updateDailyOffer,
} from "../../../api";
import { Loader } from "../../Loader/Loader";

interface DnevnePonudeProp {
  localId: string;
  setEditElement: React.Dispatch<React.SetStateAction<{}>>;
}
export const DnevnePonude = ({ localId, setEditElement }: DnevnePonudeProp) => {
  const ActionDiv = ({ row }: any) => {
    const queryClient = useQueryClient();
    const { mutate: doDeleteDailyOffer } = useMutation({
      mutationFn: (dailyOfferId: string) => deleteDailyOfferById(dailyOfferId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getDailyOfferByLocalId", localId],
        });
      },
    });

    const handleDelete = () => {
      const dailyOfferId = row.original.id;
      doDeleteDailyOffer(dailyOfferId);
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

  const ActionPonDiv = ({ row }: any) => {
    const { mutate: doUpdateDailyOffer } = useMutation({
      mutationFn: (data: any) => {
        const formattedData = {
          id: data?.id,
          status: data?.status === "Deactive" ? "Active" : "Deactive",
        };
        return updateDailyOffer(formattedData);
      },
      onSuccess: () => {
        console.log("Daily Offer updated successfully");
      },
      onError: (error) => {
        console.error("Error updating daily offer:", error);
      },
    });
    const handleUpdate = async () => {
      const dailyOfferId = row.original.id;
      const dailyOfferStatus = row.original.status;
      doUpdateDailyOffer({ id: dailyOfferId, status: dailyOfferStatus });
    };
    return (
      <div
        className="flex items-center justify-center w-full h-full"
        {...row.getToggleRowExpandedProps({})}
      >
        <Switch
          onChange={() => {
            handleUpdate();
          }}
          defaultChecked={row.original?.status === "Deactive" ? false : true}
          color="success"
        />
      </div>
    );
  };

  const columns = [
    {
      Header: "Naziv ponude",
      accessor: "name",
      id: "name",
    },
    {
      Header: "Cijena ponude",
      accessor: "newPrice",
      id: "newPrice",
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

  const { data: dailyOfferData, isLoading } = useQuery({
    queryKey: ["getDailyOfferByLocalId", localId],
    queryFn: () => getDailyOfferByLocalId(localId),
  });
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col p-5">
      <DnevnePonudeTable
        columns={columns}
        data={dailyOfferData}
        skipPageReset={true}
      />
    </div>
  );
};
