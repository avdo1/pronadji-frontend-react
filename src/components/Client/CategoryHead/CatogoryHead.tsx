import React from "react";

export const CategoryHead = () => {
  return (
    <div className="w-full h-[60px] flex flex-row items-center justify-between bg-red-600 text-white font-sans text-lg font-bold px-8 md:px-5">
      <div>Kategorija</div>
      <div>
        <a href="/" className="cursor-pointer font-light">
          {"POGLEDAJ SVE >"}
        </a>
      </div>
    </div>
  );
};
