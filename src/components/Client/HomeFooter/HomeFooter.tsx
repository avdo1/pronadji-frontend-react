import { useEffect, useState } from "react";
import { Clogo } from "../../../assets/ImagesFactory";
import { Link, useLocation } from "react-router-dom";

export const HomeFooter = () => {
  const [isAdminSide, setIsAdminSide] = useState<boolean>(false);
  const route = useLocation().pathname;
  useEffect(() => {
    if (route.includes("/admin")) {
      setIsAdminSide(true);
    } else {
      setIsAdminSide(false);
    }
  }, [route]);

  if (route.includes("admin")) {
    return <></>;
  }

  return (
    <div className={`hidden md:flex flex-row bg-black w-full h-36 flex`}>
      <div className="hidden lg:flex w-1/2 h-full flex items-center pl-3">
        <Clogo />
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-start gap-6">
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <Link to="/naslovna">Naslovna</Link>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <Link to="/eventi">Eventi</Link>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <Link to="/oNama">O nama</Link>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <Link to="/usluge">Paketi usluga</Link>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </div>
    </div>
  );
};
