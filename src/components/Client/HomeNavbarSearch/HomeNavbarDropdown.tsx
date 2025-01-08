import { useState, useEffect } from "react";
import { useFilterContext } from "../../../context/FilterContext";
import { useNavigate } from "react-router-dom";

export const HomeNavbarDropdown = () => {
  const navigate = useNavigate();

  const { filters, setFilters } = useFilterContext();

  const [localFilters, setLocalFilters] = useState({
    nazivLokala: "",
    tipLokala: "",
    lokacija: "",
    event: "",
  });

  useEffect(() => {
    if (filters) {
      setLocalFilters(filters);
    }
  }, [filters]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchClick = () => {
    setFilters(localFilters);
    navigate("/lokali", { replace: false });
  };

  return (
    <div className="w-[300px] h-fit absolute right-0 top-[25px] bg-white shadow-lg p-2 flex flex-col gap-3 md:w-[220px] md:gap-2 md:top-[20px]">
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          name="nazivLokala"
          value={localFilters.nazivLokala}
          onChange={handleInputChange}
          placeholder="Naziv lokala"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          name="tipLokala"
          value={localFilters.tipLokala}
          onChange={handleInputChange}
          placeholder="Tip lokala"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          name="lokacija"
          value={localFilters.lokacija}
          onChange={handleInputChange}
          placeholder="Lokacija"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          name="event"
          value={localFilters.event}
          onChange={handleInputChange}
          placeholder="Event"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="h-[45px] w-full">
        <button
          className="h-full w-full bg-orange-600 text-white text-[18px] font-normal outline-none md:h-[35px] md:text-[16px]"
          onClick={handleSearchClick}
        >
          PRETRAZI
        </button>
      </div>
    </div>
  );
};
