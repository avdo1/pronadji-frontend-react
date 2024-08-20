"use client";
import React, { useEffect, useState } from "react";
import { Clogo } from "../../../assets/ImagesFactory";
import { useLocation } from "react-router-dom";

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
    <div
      className={`w-full h-36 flex ${
        !isAdminSide ? "bg-black" : "hidden"
      } md:flex md:flex-row`}
    >
      <div className="w-1/2 h-full flex items-center pl-3">
        <Clogo />
      </div>
      <div className="w-1/2 h-full flex items-center justify-start gap-6">
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <a href="/">Naslovna</a>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <a href="/lokali">Lokali</a>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <a href="/eventi">Eventi</a>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <a href="/oNama">O nama</a>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <a href="/usluge">Paketi usluga</a>
        </div>
        <div className="flex items-center justify-center text-white text-xl font-normal">
          <a href="/kontakt">Kontakt</a>
        </div>
      </div>
    </div>
  );
};
