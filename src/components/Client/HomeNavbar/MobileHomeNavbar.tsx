import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import useOnClickOutside from "use-onclickoutside";
import { Link, useLocation } from "react-router-dom";
import { CloseSidebarIcon, NLogoNav } from "../../../assets/ImagesFactory";
import { MobileHomeNavbarIcon } from "./MobileHomeNavbarIcon";

type Props = {
  activeNav: string | null;
  setActiveNav: Dispatch<SetStateAction<string | null>>;
};

export const MobileHomeNavbar = ({ activeNav, setActiveNav }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = useLocation().pathname;

  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    if (pathName === "/") {
      setActiveNav(null);
    } else {
      setActiveNav(pathName);
    }
  }, [pathName]);

  const onOpenCloseClick = () => {
    setIsOpen(!isOpen);
  };

  if (pathName === "/admin") {
    return <></>;
  }

  return (
    <div className="lg:hidden">
      {!isOpen ? (
        <div onClick={onOpenCloseClick}>
          <MobileHomeNavbarIcon />
        </div>
      ) : (
        <div
          ref={ref}
          className="fixed top-0 left-0 h-full w-2/5 bg-[#f5efe9] z-100 overflow-x-scroll transition-width duration-1000"
        >
          <div className="flex items-center justify-between h-2/10 w-full px-2 bg-[#ed5034] text-white">
            <NLogoNav />
            <span onClick={onOpenCloseClick}>{CloseSidebarIcon}</span>
          </div>
          <div className="flex flex-col items-center gap-2 w-full h-4/5 text-[#6f6f6f] font-sans text-lg font-normal">
            <div className="w-full h-1/10 flex items-center pl-2 text-2xl font-semibold underline decoration-[#ed5034]">
              Meni:
            </div>
            <div
              className={`w-4/5 h-1/10 border border-[#ed5034] rounded-lg flex items-center justify-center font-sans text-lg ${pathName === "/" ? "bg-[#ed5034] text-white" : "text-[#6f6f6f]"}`}
            >
              <Link
                to="/naslovna"
                onClick={() => {
                  setActiveNav("/");
                  setIsOpen(false);
                }}
              >
                Naslovna
              </Link>
            </div>
            <div
              className={`w-4/5 h-1/10 border border-[#ed5034] rounded-lg flex items-center justify-center font-sans text-lg ${pathName === "/eventi" ? "bg-[#ed5034] text-white" : "text-[#6f6f6f]"}`}
            >
              <Link
                to="/eventi"
                onClick={() => {
                  setActiveNav("/eventi");
                  setIsOpen(false);
                }}
              >
                Eventi
              </Link>
            </div>
            <div
              className={`w-4/5 h-1/10 border border-[#ed5034] rounded-lg flex items-center justify-center font-sans text-lg ${pathName === "/oNama" ? "bg-[#ed5034] text-white" : "text-[#6f6f6f]"}`}
            >
              <Link
                to="/oNama"
                onClick={() => {
                  setActiveNav("/oNama");
                  setIsOpen(false);
                }}
              >
                O nama
              </Link>
            </div>
            <div
              className={`w-4/5 h-1/10 border border-[#ed5034] rounded-lg flex items-center justify-center font-sans text-lg ${pathName === "/usluge" ? "bg-[#ed5034] text-white" : "text-[#6f6f6f]"}`}
            >
              <Link
                to="/usluge"
                onClick={() => {
                  setActiveNav("/usluge");
                  setIsOpen(false);
                }}
              >
                Paketi usluga
              </Link>
            </div>
            <div
              className={`w-4/5 h-1/10 border border-[#ed5034] rounded-lg flex items-center justify-center font-sans text-lg ${pathName === "/kontakt" ? "bg-[#ed5034] text-white" : "text-[#6f6f6f]"}`}
            >
              <Link
                to="/kontakt"
                onClick={() => {
                  setActiveNav("/kontakt");
                  setIsOpen(false);
                }}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
