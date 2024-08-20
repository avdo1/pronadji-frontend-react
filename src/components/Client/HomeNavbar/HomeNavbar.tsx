import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NLogo } from "../../../assets/ImagesFactory";
// import HomeSearchInput from '@components/mainComponents/homeSearch/homeSearchInput/HomeSearchInput'
// import MobileHomeNavbar from '../mobileHomeNavbar/MobileHomeNavbar'

export const HomeNavbar = () => {
  const [isAdminSide, setIsAdminSide] = useState<boolean>(false);
  const pathName = useLocation().pathname;
  const [activeNav, setActiveNav] = useState<string | null>(null);

  useEffect(() => {
    if (pathName === "/") {
      setActiveNav(null);
    } else {
      setActiveNav(pathName);
    }
    if (pathName.includes("/admin")) {
      setIsAdminSide(true);
    } else {
      setIsAdminSide(false);
    }
  }, [pathName]);

  if (pathName.includes("admin")) {
    return <></>;
  }

  return (
    <div
      className={`flex items-center h-[85px] w-full ${isAdminSide ? "hidden" : "flex-row"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center w-full md:w-[20%] bg-[#ed5034] h-full">
        <NLogo />
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex items-center justify-start w-full md:w-[55%] h-full pl-[50px] gap-[30px]">
        {["/home", "/eventi", "/oNama", "/usluge", "/kontakt"].map((path) => (
          <div
            key={path}
            className={`flex items-center justify-center text-[22px] font-${activeNav === path ? "bold" : "normal"} text-${activeNav === path ? "[#ed5034]" : "#6f6f6f"}`}
          >
            <Link
              to={path}
              onClick={() => {
                setActiveNav(path);
              }}
            >
              {path === "/"
                ? "Naslovna"
                : path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
            </Link>
          </div>
        ))}
      </div>

      {/* Search Section */}
      <div className="hidden md:flex items-center justify-center w-full md:w-[25%] h-full">
        {/* <HomeSearchInput /> */}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* <MobileHomeNavbar activeNav={activeNav} setActiveNav={setActiveNav} /> */}
      </div>
    </div>
  );
};
