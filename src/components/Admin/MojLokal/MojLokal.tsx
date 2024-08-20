import { useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";

export const MojLokal = () => {
  const [mojLokalObj, setMojLokalObj] = useState({
    nazivLokala: "",
    tipLokala: "",
    sekundarniTipLokala: "",
    lokacija: "",
    kratkiOpis: "",
    logo: "",
    email: "",
    telefon: "",
    radnoVrijeme: "",
    facebook: "",
    instagram: "",
  });

  return (
    <div className="w-full flex flex-row pt-10 pb-5 sm:pt-10 sm:pb-5 flex-wrap">
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Naziv lokala"
          value={mojLokalObj.nazivLokala}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="nazivLokala"
          placeholder="Dodajte naziv svog lokala"
          required
        />
        <AdminInput
          title="Tip lokala"
          value={mojLokalObj.tipLokala}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="tipLokala"
          placeholder="Npr: Bar, Pub, Restoran"
          required
        />
        <AdminInput
          title="Sekundarni tip lokala"
          value={mojLokalObj.sekundarniTipLokala}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="sekundarniTipLokala"
          placeholder="Vaš lokal sadrzi jos (max 5 odabira)"
        />
        <AdminInput
          title="Lokacija"
          value={mojLokalObj.lokacija}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="lokacija"
          placeholder="Adresa lokala"
          required
        />
        <AdminInput
          title="Kratki opis"
          value={mojLokalObj.kratkiOpis}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="kratkiOpis"
          placeholder="Unesite kratki opis svog lokala"
          required
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 pl-5 gap-5">
        <AdminInput
          title="Logo"
          value={mojLokalObj.logo}
          valueObj={mojLokalObj}
          keyOfValue="logo"
          setValue={setMojLokalObj}
          placeholder="Uploadujte svoj logo"
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
          value={mojLokalObj.telefon}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="telefon"
          placeholder="Broj telefona lokala"
          required
        />
        <AdminInput
          title="Radno vrijeme"
          value={mojLokalObj.radnoVrijeme}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="radnoVrijeme"
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
          title="Instagram"
          value={mojLokalObj.instagram}
          setValue={setMojLokalObj}
          valueObj={mojLokalObj}
          keyOfValue="instagram"
          placeholder="Instagram page vaseg lokala"
          required
        />
        <button className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none">
          KREIRAJ SVOJ LOKAL
        </button>
      </div>
    </div>
  );
};
