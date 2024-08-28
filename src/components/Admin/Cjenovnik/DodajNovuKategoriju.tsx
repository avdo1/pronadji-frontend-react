import { useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { EditPen, TrashCan } from "../../../assets/ImagesFactory";

export const DodajNovuKategoriju = () => {
  const [nazivKategorije, setNazivKategorije] = useState("");
  const [nazivProizvoda, setNazivProizvoda] = useState("");
  const [cijenaProizvoda, setCijenaProizvoda] = useState("");
  const [opisProizvoda, setOpisProizvoda] = useState("");

  const [proizvodi, setProizvodi] = useState<any[]>([]);

  const dodajProizvod = () => {
    const obj = {
      nazivProizvoda: nazivProizvoda,
      cijenaProizvoda: cijenaProizvoda,
      opisProizvoda: opisProizvoda,
    };

    setProizvodi([...proizvodi, obj]);

    setNazivProizvoda("");
    setCijenaProizvoda("");
    setOpisProizvoda("");
  };

  const izbaciProizvod = (index: number) => {
    const noviProizvodi = proizvodi.filter((_, i) => i !== index);
    setProizvodi(noviProizvodi);
  };

  return (
    <div className="w-full flex flex-col gap-5 pt-10 pb-5 pl-5">
      <AdminInput
        title="Naziv kategorije"
        value={nazivKategorije}
        setValue={setNazivKategorije}
        placeholder="Dodajte naziv za svoju novu kategoriju"
        required
        customWidth="350px"
      />

      <div className="w-full flex flex-row items-center justify-start gap-4">
        <AdminInput
          title="Naziv proizvoda"
          value={nazivProizvoda}
          setValue={setNazivProizvoda}
          placeholder="Naziv novog proizvoda"
          required
          customWidth="320px"
        />
        <AdminInput
          title="Cijena proizvoda"
          value={cijenaProizvoda}
          setValue={setCijenaProizvoda}
          placeholder="Dodajte cijenu novog proizvoda"
          required
          customWidth="320px"
        />
        <AdminInput
          title="Opis proizvoda"
          value={opisProizvoda}
          setValue={setOpisProizvoda}
          placeholder="Dodajte opis novog proizvoda"
          required
          customWidth="320px"
        />
        <button
          className="h-[40px] w-[60px] bg-orange-600 text-white font-light text-lg rounded-md outline-none"
          onClick={dodajProizvod}
        >
          Dodaj
        </button>
      </div>

      <div className="w-full flex flex-col pr-3">
        {proizvodi.length > 0 &&
          proizvodi.map((proizvod: any, index: number) => {
            return (
              <div
                key={index}
                className={`w-full flex p-4 flex-row border-t ${index === proizvodi.length - 1 ? "border-b" : ""}`}
              >
                <div className="w-1/3">{proizvod.nazivProizvoda}</div>
                <div className="w-1/3">{proizvod.cijenaProizvoda}</div>
                <div className="w-1/4">{proizvod.opisProizvoda}</div>
                <div className="flex flex-row gap-2 items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => izbaciProizvod(index)}
                  >
                    {TrashCan}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <button className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none">
        Objavi kategoriju
      </button>
    </div>
  );
};
