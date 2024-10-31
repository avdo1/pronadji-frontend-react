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
import { useParams } from "react-router-dom";
import { sidebarElements } from "../constants/sideBarElements";
import { getLocalById } from "../api";
import { useQuery } from "@tanstack/react-query";
import { WithAuthProvider } from "../providers/WithAuthProvider";
import { useGlobalContext } from "../context/store";

export const AdminPage = () => {
  const { id } = useParams();
  const { user } = useGlobalContext();
  const [selectedElement, setSelectedElement] = useState(1);
  const [editElement, setEditElement] = useState({});
  const [isCreateForm, setIsCreateForm] = useState(false);

  const onButtonClick = () => {
    setEditElement({});
    setIsCreateForm(true);
  };

  useEffect(() => {
    setIsCreateForm(false);
  }, [selectedElement]);

  useEffect(() => {
    if (window.location.pathname === "/admin" && !!user?.mainLocals?.length) {
      window.location.replace(`/admin/${user?.mainLocals[0].id}`);
    }
  }, [user]);

  const { data: localData } = useQuery({
    queryKey: ["getLocalById", id],
    queryFn: id ? () => getLocalById(id) : () => getLocalById,
  });

  return (
    <WithAuthProvider>
      <div className="w-full flex flex-row h-screen">
        <Sidebar
          elements={sidebarElements}
          setEditElement={setEditElement}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          isDisabled={!id || !localData ? true : false}
          localname={!!localData && !!id ? localData.name : "Admine"}
        />
        <div className="w-4/5 h-full border-2 border-blue">
          <AdminHeader
            selectedMenu={sidebarElements[selectedElement - 1]}
            buttonText={
              sidebarElements[selectedElement - 1].buttonText as string
            }
            onButtonClick={onButtonClick}
            isCreateForm={isCreateForm}
          />
          {!isCreateForm && Object.keys(editElement).length === 0 ? (
            <>
              {selectedElement === 1 && (
                <MojLokal isDisabled={!!user?.mainLocals?.length} />
              )}
              {selectedElement === 2 && <Galerije />}
              {selectedElement === 3 && (
                <Eventi
                  localId={localData?.id}
                  setEditElement={setEditElement}
                />
              )}
              {selectedElement === 4 && (
                <Cjenovnik
                  localId={localData?.id}
                  setEditElement={setEditElement}
                />
              )}
              {selectedElement === 5 && (
                <DnevnePonude
                  localId={localData?.id}
                  setEditElement={setEditElement}
                />
              )}
              {selectedElement === 6 && (
                <OglasiZaPosao
                  localId={localData?.id}
                  setEditElement={setEditElement}
                />
              )}
            </>
          ) : !!isCreateForm ? (
            <>
              {selectedElement === 3 && (
                <DodajEvent localId={id} setIsCreateForm={setIsCreateForm} />
              )}
              {selectedElement === 4 && (
                <DodajNovuKategoriju
                  local={localData}
                  setIsCreateForm={setIsCreateForm}
                />
              )}
              {selectedElement === 5 && (
                <DodajDnevnuPonudu
                  local={localData}
                  setIsCreateForm={setIsCreateForm}
                />
              )}
              {selectedElement === 6 && (
                <DodajNoviOglas
                  local={localData}
                  setIsCreateForm={setIsCreateForm}
                />
              )}
            </>
          ) : (
            !!editElement &&
            Object.keys(editElement).length > 0 &&
            !isCreateForm && (
              <>
                {selectedElement === 3 && (
                  <DodajEvent
                    localId={id}
                    editElement={editElement}
                    setEditElement={setEditElement}
                  />
                )}
                {selectedElement === 4 && (
                  <DodajNovuKategoriju
                    local={localData}
                    editElement={editElement}
                    setEditElement={setEditElement}
                  />
                )}
                {selectedElement === 5 && (
                  <DodajDnevnuPonudu
                    local={localData}
                    editElement={editElement}
                    setEditElement={setEditElement}
                  />
                )}
                {selectedElement === 6 && (
                  <DodajNoviOglas
                    local={localData}
                    editElement={editElement}
                    setEditElement={setEditElement}
                  />
                )}
              </>
            )
          )}
        </div>
      </div>
    </WithAuthProvider>
  );
};
