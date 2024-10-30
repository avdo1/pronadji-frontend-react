import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AdminInput } from "../AdminInput/AdminInput";
import { Switch } from "@mui/material";
import { createEvent, updateEvent } from "../../../api";
interface Props {
  localId?: string;
  editElement?: any;
  setIsCreateForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DodajEvent = ({
  localId,
  editElement,
  setIsCreateForm,
}: Props) => {
  const [eventObj, setEventObj] = useState(
    !!editElement && Object.keys(editElement).length > 0
      ? {
          id: editElement?.id,
          name: editElement?.name,
          startTime: editElement?.startTime,
          description: editElement?.description,
          startDate: editElement?.startDate,
          enterPrice: editElement?.enterPrice,
          enterPriceConsumation: editElement?.enterPriceConsumation,
          specialOffer: "",
          mainLocalId: "",
        }
      : {
          name: "",
          startTime: "",
          description: "",
          startDate: "",
          enterPrice: "",
          enterPriceConsumation: false,
          specialOffer: "",
          mainLocalId: "",
        },
  );

  const { mutate: doCreateEvent, isPending } = useMutation({
    mutationFn: (data: typeof eventObj) => {
      const formattedData = {
        ...data,
        enterPrice: Number(data.enterPrice) || 0,
        startDate: new Date(data.startDate),
        entDate: new Date(data.startDate),
        startTime: new Date(data.startTime),
        endTime: new Date(data.startTime),
        mainLocalId: localId,
      };
      return createEvent(formattedData);
    },
    onSuccess: () => {
      console.log("Event created successfully");
      setIsCreateForm && setIsCreateForm(false);
    },
    onError: (error) => {
      console.error("Error creating event:", error);
    },
  });

  const { mutate: doUpdateEvent } = useMutation({
    mutationFn: (data: typeof eventObj) => {
      const formattedData = {
        ...data,
        enterPrice: Number(data.enterPrice) || 0,
        startDate: new Date(data.startDate),
        entDate: new Date(data.startDate),
        startTime: new Date(data.startTime),
        endTime: new Date(data.startTime),
        mainLocalId: localId,
        id: data.id,
      };
      return updateEvent(formattedData);
    },
    onSuccess: () => {
      console.log("Event updated successfully");
    },
    onError: (error) => {
      console.error("Error updating event:", error);
    },
  });
  const handleCreateOrUpdateEvent = async () => {
    !editElement ? doCreateEvent(eventObj) : doUpdateEvent(eventObj);
  };

  useEffect(() => {
    if (!editElement) {
      setEventObj({
        name: "",
        startTime: "",
        description: "",
        startDate: "",
        enterPrice: "",
        enterPriceConsumation: false,
        specialOffer: "",
        mainLocalId: "",
      });
    }
  }, [editElement]);
  return (
    <div className="w-full flex flex-row pt-10 pb-5 sm:pt-10 sm:pb-5 flex-wrap">
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Naziv eventa"
          value={eventObj.name}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="name"
          placeholder="Dodajte naziv eventa"
          required
        />
        <AdminInput
          title="Vrijeme održavanja"
          value={eventObj.startTime}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="startTime"
          placeholder="Vrijeme održavanja eventa"
          required
        />
        <AdminInput
          title="Kratki opis"
          value={eventObj.description}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="description"
          placeholder="Unesite kratki opis svog eventa"
        />
        <button
          onClick={handleCreateOrUpdateEvent}
          className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none"
          disabled={isPending}
        >
          {isPending ? "Objavljivanje..." : "Objavi event"}
        </button>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Datum održavanja"
          value={eventObj.startDate}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="startDate"
          placeholder="Unesi datum održavanja"
          required
        />
        <AdminInput
          title="Upad"
          value={eventObj.enterPrice}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="enterPrice"
          placeholder="Cijena upada bez ili sa konzumacijom"
          required
        />
        <div className="flex flex-row gap-3 items-center">
          <p className="text-gray-400">Konzumacija uračunata u cijenu upada</p>
          <Switch
            color="success"
            onChange={(e) => {
              setEventObj({
                ...eventObj,
                enterPriceConsumation: e.target.checked,
              });
            }}
            checked={eventObj.enterPriceConsumation}
          />
        </div>
        <AdminInput
          title="Specijalne ponude"
          value={eventObj.specialOffer}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="specialOffer"
          placeholder="Odaberi iz dnevnih ponuda"
          required
        />
      </div>
    </div>
  );
};
