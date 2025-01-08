import { EditPen, TrashCan } from "../../../assets/ImagesFactory";
import { Switch } from "@mui/material";
import { OglasiZaPosaoTable } from "./OglasiZaPosaoTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader } from "../../Loader/Loader";
import {
  deleteJobOfferById,
  getJobOfferByLocalId,
  updateJobOffer,
} from "../../../api";
interface OglasiZaPosaoProp {
  localId: string;
  setEditElement: React.Dispatch<React.SetStateAction<{}>>;
}
export const OglasiZaPosao = ({
  localId,
  setEditElement,
}: OglasiZaPosaoProp) => {
  const ActionDiv = ({ row }: any) => {
    const queryClient = useQueryClient();
    const { mutate: doDeleteJobOffer } = useMutation({
      mutationFn: (jobOfferId: string) => deleteJobOfferById(jobOfferId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getJobOfferByLocalId", localId],
        });
      },
    });
    const handleDelete = () => {
      const jobOfferId = row.original.id;
      doDeleteJobOffer(jobOfferId);
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
    const { mutate: doUpdateJobOffer } = useMutation({
      mutationFn: (data: any) => {
        const formattedData = {
          id: data?.id,
          status: data?.status === "Deactive" ? "Active" : "Deactive",
        };
        return updateJobOffer(formattedData);
      },
      onSuccess: () => {
        console.log("Job Offer updated successfully");
      },
      onError: (error) => {
        console.error("Error updating job offer:", error);
      },
    });
    const handleUpdate = () => {
      const jobOfferId = row.original.id;
      const jobOfferStatus = row.original.status;
      doUpdateJobOffer({ id: jobOfferId, status: jobOfferStatus });
    };
    return (
      <div
        className="w-full h-full flex flex-row items-center justify-center"
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
      Header: "Naziv pozicije",
      accessor: "name",
      id: "name",
    },
    {
      Header: "Opis pozicije",
      accessor: "description",
      id: "description",
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

  const { data: jobOfferData, isLoading } = useQuery({
    queryKey: ["getJobOfferByLocalId", localId],
    queryFn: () => getJobOfferByLocalId(localId),
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
      <OglasiZaPosaoTable
        columns={columns}
        data={jobOfferData}
        skipPageReset={true}
      />
    </div>
  );
};
