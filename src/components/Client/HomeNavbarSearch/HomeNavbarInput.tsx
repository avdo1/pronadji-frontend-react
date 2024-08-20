import React, { useState } from "react";
import useOnClickOutside from "use-onclickoutside";
import { HomeNavbarDropdown } from "./HomeNavbarDropdown";

export const HomeNavbarInput = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setOpenDropdown(false));

  return (
    <div
      ref={ref}
      className="w-[300px] h-full flex justify-end items-center pr-20"
    >
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="w-[300px] h-[50px] border border-black flex flex-row cursor-pointer md:w-[290px] md:h-[40px]"
      >
        <div className="w-4/5 h-full flex items-center pl-5 font-sans text-[22px] font-normal text-[#6f6f6f] md:text-[18px]">
          <p>Pretraga</p>
        </div>
        <div className="w-1/5 h-full flex items-center justify-center">
          <img
            src="https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png"
            alt="search"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
      {openDropdown && (
        <div className="relative h-0">
          <HomeNavbarDropdown />
        </div>
      )}
    </div>
  );
};
