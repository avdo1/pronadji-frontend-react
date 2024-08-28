import { useEffect, useState } from "react";
import { Sidebar } from "../components/Admin/Sidebar/Sidebar";
import { MojLokal } from "../components/Admin/MojLokal/MojLokal";
import { Galerije } from "../components/Admin/Galerija/Galerija";
import { Eventi } from "../components/Admin/Eventi/Eventi";
import { Cjenovnik } from "../components/Admin/Cjenovnik/Cjenovnik";
import { DnevnePonude } from "../components/Admin/DnevnePonude/DnevnePonude";
import { OglasiZaPosao } from "../components/Admin/OglasiZaPosao/OglasiZaPosao";
import { AdminHeader } from "../components/Admin/AdminHeader/AdminHeader";
import { DodajEvent } from "../components/Admin/Eventi/DodajEvent";
import { DodajNovuKategoriju } from "../components/Admin/Cjenovnik/DodajNovuKategoriju";
import { DodajDnevnuPonudu } from "../components/Admin/DnevnePonude/DodajDnevnuPonudu";
import { DodajNoviOglas } from "../components/Admin/OglasiZaPosao/DodajNoviOglas";

export const AdminPage = () => {
  const sidebarElements = [
    {
      title: "Moj lokal",
      id: 1,
      isEnabled: true,
    },
    {
      title: "Galerija",
      id: 2,
      isEnabled: true,
    },
    {
      title: "Eventi",
      id: 3,
      isEnabled: true,
      buttonText: "Dodaj novi event",
    },
    {
      title: "Cjenovnik",
      id: 4,
      isEnabled: true,
      buttonText: "Dodaj novi cjenovnik",
    },
    {
      title: "Dnevne ponude",
      id: 5,
      isEnabled: true,
      buttonText: "Dodaj dnevnu ponudu",
    },
    {
      title: "Oglasi za posao",
      id: 6,
      isEnabled: true,
      buttonText: "Dodaj novi oglas",
    },
  ];

  const [selectedElement, setSelectedElement] = useState(1);
  const [isCreateForm, setIsCreateForm] = useState(false);

  const onButtonClick = () => {
    setIsCreateForm(true);
  };

  useEffect(() => {
    setIsCreateForm(false);
  }, [selectedElement]);

  return (
    <div className="w-full flex flex-row h-screen">
      <Sidebar
        elements={sidebarElements}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      <div className="w-4/5 h-full border-2 border-blue">
        <AdminHeader
          selectedMenu={sidebarElements[selectedElement - 1]}
          buttonText={sidebarElements[selectedElement - 1].buttonText as string}
          onButtonClick={onButtonClick}
          isCreateForm={isCreateForm}
        />
        {!isCreateForm ? (
          <>
            {selectedElement === 1 && <MojLokal />}
            {selectedElement === 2 && <Galerije />}
            {selectedElement === 3 && <Eventi />}
            {selectedElement === 4 && <Cjenovnik />}
            {selectedElement === 5 && <DnevnePonude />}
            {selectedElement === 6 && <OglasiZaPosao />}
          </>
        ) : (
          <>
            {selectedElement === 3 && <DodajEvent />}
            {selectedElement === 4 && <DodajNovuKategoriju />}
            {selectedElement === 5 && <DodajDnevnuPonudu />}
            {selectedElement === 6 && <DodajNoviOglas />}
          </>
        )}
      </div>
    </div>
  );
};
