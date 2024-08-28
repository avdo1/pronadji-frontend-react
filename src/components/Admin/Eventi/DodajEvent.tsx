import { useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { Switch } from "@mui/material";

export const DodajEvent = () => {
  const [eventObj, setEventObj] = useState({
    nazivEventa: "",
    vrijemeOdrzavanja: "",
    kratkiOpis: "",
    datumOdrzavanja: "",
    upad: "",
    uracunataCijenaUpada: false,
    specijalnaPonuda: "",
  });

  return (
    <div className="w-full flex flex-row pt-10 pb-5 sm:pt-10 sm:pb-5 flex-wrap">
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Naziv eventa"
          value={eventObj.nazivEventa}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="nazivEventa"
          placeholder="Dodajte naziv eventa"
          required
        />
        <AdminInput
          title="Vrijeme odrzavanja"
          value={eventObj.vrijemeOdrzavanja}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="vrijemeOdrzavanja"
          placeholder="Vrijeme odrzavanja eventa"
          required
        />
        <AdminInput
          title="Kratki opis"
          value={eventObj.kratkiOpis}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="kratkiOpis"
          placeholder="Unesite kratki opis svog eventa"
        />
        <button className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none">
          Objavi event
        </button>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Datum odrzavanja"
          value={eventObj.datumOdrzavanja}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="datumOdrzavanja"
          placeholder="Unesi datum odrzavanja"
          required
        />
        <AdminInput
          title="Upad"
          value={eventObj.upad}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="upad"
          placeholder="Cijena upada bez ili sa konzumacijom"
          required
        />
        <div className="flex flex-row gap-3 items-center">
          <p className="text-gray-400">Konzumacija uracunata u cijenu upada</p>
          <Switch
            color="success"
            onChange={(e) => {
              setEventObj({
                ...eventObj,
                uracunataCijenaUpada: e.target.checked,
              });
            }}
            checked={eventObj.uracunataCijenaUpada}
          />
        </div>
        <AdminInput
          title="Specijalne ponude"
          value={eventObj.specijalnaPonuda}
          setValue={setEventObj}
          valueObj={eventObj}
          keyOfValue="specijalnaPonuda"
          placeholder="Odaberi iz dnevnih ponuda"
          required
        />
      </div>
    </div>
  );
};
