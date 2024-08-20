import React, { Dispatch, SetStateAction } from "react";
// import AdminMobileSidebar from '../adminMobileSidebar/AdminMobileSidebar'

type Props = {
  elements: any[];
  selectedElement: any;
  setSelectedElement: Dispatch<SetStateAction<any>>;
};

export const Sidebar = ({
  elements,
  selectedElement,
  setSelectedElement,
}: Props) => {
  return (
    <div className="w-1/5 min-h-full flex flex-col bg-gray-800 relative">
      <div className="w-full h-[10.3%] flex flex-col items-start justify-center text-left break-words pl-5 bg-orange-600">
        <p className="text-white font-light text-2xl">
          <span className="text-lg">Dobrodosli,</span>
        </p>
        <p className="text-white font-light text-2xl">IME KAFICA</p>
      </div>
      <div className="w-full h-[89.7%] pt-5 flex flex-col pb-2">
        <div className="flex flex-col h-[50%] w-full gap-2">
          {elements.map((element) => (
            <div
              className={`flex items-center h-11 text-white font-light text-lg uppercase cursor-pointer gap-7 ${
                element.isEnabled ? "bg-transparent" : "text-gray-500"
              }`}
              key={element.id}
              onClick={() => {
                if (element.isEnabled) setSelectedElement(element.id);
              }}
              style={
                element.id !== selectedElement ? { paddingLeft: "45px" } : {}
              }
            >
              {element.id === selectedElement && (
                <div className="bg-orange-600 h-full w-4" />
              )}
              {element.title}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-end absolute bottom-2">
          <div className="w-full h-24 flex items-center justify-center">
            <button className="h-3/4 w-3/4 bg-orange-600 text-white font-light text-lg rounded-md outline-none">
              POSTANI PREMIUM
            </button>
          </div>

          <div className="h-20 w-full flex items-center justify-center mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Glovo_logo.png"
              alt="logo"
              className="h-4/5 w-4/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
