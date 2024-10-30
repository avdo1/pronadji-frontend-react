import { useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { useMutation } from "@tanstack/react-query";
import { createLocal } from "../../../api";
import { AdminSelectInput } from "../AdminSelectInput/AdminSelectInput";
interface MojLokalProps {
  isDisabled: boolean;
}
export const MojLokal = ({ isDisabled }: MojLokalProps) => {
  const [mojLokalObj, setMojLokalObj] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
    workingHours: "",
    facebook: "",
    twitter: "",
    instagram: "",
    subCategoryId: "00000000-0000-2000-a000-000000000001",
  });

  const { mutate: doCreateLocal } = useMutation({
    mutationFn: (data: typeof mojLokalObj) => createLocal(data),
    onSuccess: (data) => {
      window.location.replace(`/admin/${data.id}`);
    },
    onError: (error) => {
      console.error("Error creating local:", error);
    },
  });

  const onCreate = async () => {
    doCreateLocal(mojLokalObj);
  };
  const handleSelectChange = (selectedValue: string) => {
    setMojLokalObj((prev) => ({ ...prev, subCategoryId: selectedValue }));
  };
  return (
    <div className="w-full flex flex-row pt-10 pb-5 sm:pt-10 sm:pb-5 flex-wrap">
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Naziv lokala"
          value={mojLokalObj.name}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="name"
          placeholder="Dodajte naziv svog lokala"
          required
        />
        <AdminInput
          title="Email"
          value={mojLokalObj.email}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="email"
          placeholder="Kontakt email"
          required
        />
        <AdminInput
          title="Telefon"
          value={mojLokalObj.phone}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="phone"
          placeholder="Broj telefona lokala"
          required
        />
        <AdminInput
          title="Lokacija"
          value={mojLokalObj.location}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="location"
          placeholder="Adresa lokala"
          required
        />
        <AdminInput
          title="Kratki opis"
          value={mojLokalObj.description}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="description"
          placeholder="Unesite kratki opis svog lokala"
          required
        />
        <AdminSelectInput
          title="Kategorija lokala"
          value={mojLokalObj.subCategoryId}
          setValue={handleSelectChange}
          options={[
            {
              id: "00000000-0000-2000-a000-000000000001",
              name: "Kafa",
            },
            {
              id: "00000000-0000-2000-a000-000000000004",
              name: "Nocni klub",
            },
            {
              id: "00000000-0000-2000-a000-000000000005",
              name: "Restoran",
            },
            {
              id: "00000000-0000-2000-a000-000000000003",
              name: "FastFood",
            },
            {
              id: "00000000-0000-2000-a000-000000000002",
              name: "Nargila",
            },
          ]}
          placeholder="Odaberite kategoriju lokala"
          required
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Radno vrijeme"
          value={mojLokalObj.workingHours}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="workingHours"
          placeholder="Radno vrijeme lokala"
          required
        />
        <AdminInput
          title="Facebook"
          value={mojLokalObj.facebook}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="facebook"
          placeholder="Facebook page vaseg lokala"
          required
        />
        <AdminInput
          title="Twitter"
          value={mojLokalObj.twitter}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="twitter"
          placeholder="Twitter page vaseg lokala"
        />
        <AdminInput
          title="Instagram"
          value={mojLokalObj.instagram}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="instagram"
          placeholder="Instagram page vaseg lokala"
          required
        />
        <button
          disabled={isDisabled}
          onClick={() => {
            onCreate();
          }}
          className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none"
        >
          KREIRAJ SVOJ LOKAL
        </button>
      </div>
    </div>
  );
};
