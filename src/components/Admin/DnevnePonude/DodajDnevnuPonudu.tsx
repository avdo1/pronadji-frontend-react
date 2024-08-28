import { useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { Switch } from "@mui/material";

export const DodajDnevnuPonudu = () => {
  const [nazivPonude, setNazivPonude] = useState("");
  const [cijenaPonude, setCijenaPonude] = useState("");
  const [slika, setSlika] = useState("");

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
        <button className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none">
          Objavi ponudu
        </button>
      </div>
    </div>
  );
};
