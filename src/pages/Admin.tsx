import { useState } from "react";
import { Sidebar } from "../components/Admin/Sidebar/Sidebar";
import { MojLokal } from "../components/Admin/MojLokal/MojLokal";
import { Galerije } from "../components/Admin/Galerija/Galerija";
import { Eventi } from "../components/Admin/Eventi/Eventi";
import { Cjenovnik } from "../components/Admin/Cjenovnik/Cjenovnik";
import { DnevnePonude } from "../components/Admin/DnevnePonude/DnevnePonude";
import { OglasiZaPosao } from "../components/Admin/OglasiZaPosao/OglasiZaPosao";
import { AdminHeader } from "../components/Admin/AdminHeader/AdminHeader";

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
    },
    {
      title: "Cjenovnik",
      id: 4,
      isEnabled: true,
    },
    {
      title: "Dnevne ponude",
      id: 5,
      isEnabled: true,
    },
    {
      title: "Oglasi za posao",
      id: 6,
      isEnabled: true,
    },
    {
      title: "Dospjele slike",
      id: 7,
      isEnabled: true,
    },
  ];

  const [selectedElement, setSelectedElement] = useState(1);

  return (
    <div className="w-full flex flex-row h-screen">
      <Sidebar
        elements={sidebarElements}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      <div className="w-4/5 h-full border-2 border-blue">
        <AdminHeader selectedMenu={sidebarElements[selectedElement - 1]} />
        {selectedElement === 1 && <MojLokal />}
        {selectedElement === 2 && <Galerije />}
        {selectedElement === 3 && <Eventi />}
        {selectedElement === 4 && <Cjenovnik />}
        {selectedElement === 5 && <DnevnePonude />}
        {selectedElement === 6 && <OglasiZaPosao />}
      </div>
    </div>
  );
};
