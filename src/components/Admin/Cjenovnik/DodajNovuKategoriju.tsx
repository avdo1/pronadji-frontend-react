import { useEffect, useState } from "react";
import { AdminInput } from "../AdminInput/AdminInput";
import { TrashCan } from "../../../assets/ImagesFactory";
import { useMutation } from "@tanstack/react-query";
import { createCategory, updateCategory } from "../../../api";
interface DodajNovuKategorijuProp {
  local: any;
  editElement?: any;
  setIsCreateForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DodajNovuKategoriju = ({
  local,
  editElement,
  setIsCreateForm,
}: DodajNovuKategorijuProp) => {
  const [nazivKategorije, setNazivKategorije] = useState(
    !editElement?.categoryName ? "" : editElement.categoryName,
  );
  const [nazivProizvoda, setNazivProizvoda] = useState("");
  const [cijenaProizvoda, setCijenaProizvoda] = useState("");
  const [opisProizvoda, setOpisProizvoda] = useState("");

  const [proizvodi, setProizvodi] = useState<any[]>(
    !editElement?.products ? [] : editElement.products,
  );

  const dodajProizvod = () => {
    const obj = {
      name: nazivProizvoda,
      price: cijenaProizvoda,
      description: opisProizvoda,
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

  const { mutate: doCreateCategory, isPending } = useMutation({
    mutationFn: () => {
      const formattedData = {
        description: nazivKategorije,
        categoryName: nazivKategorije,
        mainLocal: local,
        products: proizvodi,
      };
      return createCategory(formattedData);
    },
    onSuccess: () => {
      console.log("Category created successfully");
      setIsCreateForm && setIsCreateForm(false);
    },
    onError: (error) => {
      console.error("Error creating category:", error);
    },
  });
  const { mutate: doUpdateCategory } = useMutation({
    mutationFn: () => {
      const formattedData = {
        description: nazivKategorije,
        categoryName: nazivKategorije,
        mainLocal: local,
        id: editElement?.id,
        products: proizvodi,
      };
      return updateCategory(formattedData);
    },
    onSuccess: () => {
      console.log("Category updated successfully");
    },
    onError: (error) => {
      console.error("Error updating category:", error);
    },
  });

  const handleCreateOrUpdateCategory = async () => {
    !editElement ? doCreateCategory() : doUpdateCategory();
  };
  useEffect(() => {
    if (!editElement) {
      setNazivProizvoda("");
      setNazivKategorije("");
      setCijenaProizvoda("");
      setOpisProizvoda("");
      setProizvodi([]);
    }
  }, [editElement]);

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

      <div className="w-full flex flex-row items-end justify-start gap-4">
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
          className="h-[40px] w-[60px] bg-orange-600 text-white font-light text-lg rounded-md outline-none mb-1 "
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
                <div className="w-1/3">{proizvod.name}</div>
                <div className="w-1/3">{proizvod.price}</div>
                <div className="w-1/4">{proizvod.description}</div>
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

      <button
        onClick={handleCreateOrUpdateCategory}
        className="h-12 w-48 bg-orange-600 text-white font-light text-lg rounded-md outline-none"
      >
        {isPending ? "Objavljivanje kategorije.." : "Objavi kategoriju"}
      </button>
    </div>
  );
};
