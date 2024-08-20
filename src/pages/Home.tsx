import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CategoryHead } from "../components/Client/CategoryHead/CatogoryHead";
import { Card } from "../components/Client/Card/Card";

export const HomePage = () => {
  const backendData = [{}, {}, {}];
  const smallScreen = useMediaQuery("(max-width:1023px)");

  return (
    <div className="w-full h-auto flex flex-col pb-10">
      <div className="w-full px-5">
        {backendData.length > 0 &&
          backendData.map((data, idx) => {
            return (
              <div key={idx} className="flex flex-col w-full mt-10">
                <CategoryHead />
                <div
                  className={`flex flex-wrap gap-2 mt-10 ${smallScreen ? "flex-col" : "flex-row"}`}
                >
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
