import { useEffect, useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { useMutation } from "@tanstack/react-query";
import { createJobOffer, updateJobOffer } from "../../../api";
interface Props {
  local?: any;
  editElement?: any;
  setIsCreateForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DodajNoviOglas = ({
  local,
  editElement,
  setIsCreateForm,
}: Props) => {
  const [nazivPozicije, setNazivPozicije] = useState(
    !editElement ? "" : editElement.name,
  );
  const [kratkiOpis, setKratkiOpis] = useState(
    !editElement ? "" : editElement.description,
  );
  const [kontaktTel, setKontaktTel] = useState(
    !editElement ? "" : editElement.phone,
  );
  const [email, setEmail] = useState(!editElement ? "" : editElement.email);
  const { mutate: doCreateJobOffer, isPending } = useMutation({
    mutationFn: () => {
      const formattedData = {
        name: nazivPozicije,
        description: kratkiOpis,
        phone: kontaktTel,
        email: email,
        status: "Active",
        mainLocal: local,
      };
      return createJobOffer(formattedData);
    },
    onSuccess: () => {
      console.log("Job Offer created successfully");
      setIsCreateForm && setIsCreateForm(false);
    },
    onError: (error) => {
      console.error("Error creating job offer:", error);
    },
  });

  const { mutate: doUpdateJobOffer } = useMutation({
    mutationFn: () => {
      const formattedData = {
        name: nazivPozicije,
        description: kratkiOpis,
        phone: kontaktTel,
        id: editElement?.id,
        email: email,
        status: "Active",
        mainLocal: local,
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

  const handleCreateOrUpdateJobOffer = async () => {
    !editElement ? doCreateJobOffer() : doUpdateJobOffer();
  };
  useEffect(() => {
    if (!editElement) {
      setEmail("");
      setKontaktTel("");
      setKratkiOpis("");
      setNazivPozicije("");
    }
  }, [editElement]);
  return (
    <div className="w-full flex flex-row pt-10 pb-5 sm:pt-10 sm:pb-5 flex-wrap">
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Naziv pozivije"
          value={nazivPozicije}
          setValue={setNazivPozicije}
          placeholder="Dodajte naziv pozicije"
          required
        />
        <AdminInput
          title="Kratki opis"
          value={kratkiOpis}
          setValue={setKratkiOpis}
          placeholder="Unesite kratki opis pozicije"
          required
        />
        <AdminInput
          title="Kontakt telefon"
          value={kontaktTel}
          setValue={setKontaktTel}
          placeholder="Unesite kontakt telefon"
          required
        />
        <AdminInput
          title="Kontakt email"
          value={email}
          setValue={setEmail}
          placeholder="Unesite kontakt email"
          required
        />
        <button
          onClick={handleCreateOrUpdateJobOffer}
          className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none"
        >
          {isPending ? "Objavljivanje oglasa.." : "Objavi oglas"}
        </button>
      </div>
    </div>
  );
};
