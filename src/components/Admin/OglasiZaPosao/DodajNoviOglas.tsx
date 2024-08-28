import { useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";

export const DodajNoviOglas = () => {
  const [nazivPozicije, setNazivPozicije] = useState("");
  const [kratkiOpis, setKratkiOpis] = useState("");
  const [kontaktTel, setKontaktTel] = useState("");
  const [email, setEmail] = useState("");

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
          setValue={setEmail}
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
        <button className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none">
          Objavi oglas
        </button>
      </div>
    </div>
  );
};
