import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

type FilterContextProviderProps = {
  children: React.ReactNode;
};

type FilterState = {
  nazivLokala: string;
  tipLokala: string;
  lokacija: string;
  event: string;
};

type FilterContextType = {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterContextProvider = ({
  children,
}: FilterContextProviderProps) => {
  const location = useLocation();
  const [filters, setFilters] = useState<FilterState>({
    nazivLokala: "",
    tipLokala: "",
    lokacija: "",
    event: "",
  });
  useEffect(() => {
    const resetFilters = () => {
      if (location.pathname !== "/lokali") {
        setFilters({
          nazivLokala: "",
          tipLokala: "",
          lokacija: "",
          event: "",
        });
      }
    };

    resetFilters();
  }, [location.pathname]);
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext must be used inside FilterContext.Provider",
    );
  }
  return context;
};
