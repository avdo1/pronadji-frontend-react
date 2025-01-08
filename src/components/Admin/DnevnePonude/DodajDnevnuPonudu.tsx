import { useEffect, useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { useMutation } from "@tanstack/react-query";
import { createDailyOffer, updateDailyOffer } from "../../../api";
interface Props {
  local?: any;
  editElement?: any;
  setEditElement?: React.Dispatch<React.SetStateAction<any>>;
  setIsCreateForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DodajDnevnuPonudu = ({
  local,
  editElement,
  setEditElement,
  setIsCreateForm,
}: Props) => {
  const [nazivPonude, setNazivPonude] = useState(
    !editElement?.name ? "" : editElement.name,
  );
  const [cijenaPonude, setCijenaPonude] = useState(
    !editElement?.newPrice ? "" : editElement.newPrice,
  );
  const [slika, setSlika] = useState("");

  const { mutate: doCreateDailyOffer, isPending } = useMutation({
    mutationFn: () => {
      const formattedData = {
        name: nazivPonude,
        newPrice: cijenaPonude,
        status: "Active",
        mainLocal: local,
      };
      return createDailyOffer(formattedData);
    },
    onSuccess: () => {
      console.log("Daily Offer created successfully");
      setIsCreateForm && setIsCreateForm(false);
    },
    onError: (error) => {
      console.error("Error creating daily offer:", error);
    },
  });

  const { mutate: doUpdateDailyOffer } = useMutation({
    mutationFn: () => {
      const formattedData = {
        name: nazivPonude,
        newPrice: cijenaPonude,
        status: "Active",
        mainLocal: local,
        id: editElement?.id,
      };
      return updateDailyOffer(formattedData);
    },
    onSuccess: () => {
      console.log("Daily Offer updated successfully");
      setEditElement && setEditElement({});
    },
    onError: (error) => {
      console.error("Error updating daily offer:", error);
    },
  });
  const handleCreateOrUpdateDailyOffer = async () => {
    !editElement ? doCreateDailyOffer() : doUpdateDailyOffer();
  };

  useEffect(() => {
    if (!editElement) {
      setCijenaPonude("");
      setNazivPonude("");
    }
  }, [editElement]);
  return (
    <div className="w-full flex flex-row pt-10 pb-5 sm:pt-10 sm:pb-5 flex-wrap">
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Naziv ponude"
          value={nazivPonude}
          setValue={setNazivPonude}
          placeholder="Dodajte naziv ponude"
          required
        />
        <AdminInput
          title="Cijena"
          value={cijenaPonude}
          setValue={setCijenaPonude}
          placeholder="Cijena ponude izrazena u KM"
          required
        />
        <AdminInput
          title="Slika"
          value={slika}
          setValue={setSlika}
          placeholder="Dodaj sliku"
        />
        <button
          onClick={handleCreateOrUpdateDailyOffer}
          className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none"
        >
          {isPending ? "Objavljivanje ponude.." : "Objavi ponudu"}
        </button>
      </div>
    </div>
  );
};
