import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LogSignInNavbarElement } from "../HomeNavbar/LogSignInNavbarElement";

export const HomeImagesAlbum = () => {
  const images: string[] = [
    "https://i.pinimg.com/originals/a7/a2/8a/a7a28a5db71534ab86457be78d9387af.jpg",
    "https://i.pinimg.com/originals/9b/86/fa/9b86fa55f2d0cdb03f6c22087b7192e3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR022ceCBqDvu1u4v9k8l81-HcxpQVPtkWeZXLWZ7E60Milp2dUs_1hSIcZzj6c7g2HJA&usqp=CAU",
  ];
  const [index, setIndex] = useState<number>(0);
  const [imageToShow, setImageToShow] = useState<string>(images[index]);
  const [isAdminSide, setIsAdminSide] = useState<boolean>(false);
  const route = useLocation().pathname;

  useEffect(() => {
    if (route.includes("/admin")) {
      setIsAdminSide(true);
    } else {
      setIsAdminSide(false);
    }
  }, [route]);

  useEffect(() => {
    setImageToShow(images[index]);
  }, [index]);

  const onPreviousImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onNextImage = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  if (route.includes("admin")) {
    return <></>;
  }

  return (
    <div
      className={`relative hidden flex-col w-full bg-cover bg-center md:flex`}
      style={{ backgroundImage: `url(${imageToShow})`, height: "540px" }}
    >
      <div className="w-full h-1/4">
        <LogSignInNavbarElement />
      </div>
      <div className="flex flex-row w-full h-3/4">
        <div
          className="flex items-center justify-start w-1/10 cursor-pointer text-white text-[60px] font-light md:text-[18px] md:w-1/5 lg:w-1/5 lg:h-3/4"
          onClick={onPreviousImage}
        >
          <div className="flex items-center justify-center w-1/3 h-1/3 bg-[#372727] opacity-50 mt-1/2">
            <p> {"<"} </p>
          </div>
        </div>
        <div className="flex-1" />
        <div
          className="flex items-center justify-end w-1/10 cursor-pointer text-white text-[60px] font-light md:text-[18px] md:w-1/5 lg:w-1/5 lg:h-3/4"
          onClick={onNextImage}
        >
          <div className="flex items-center justify-center w-1/3 h-1/3 bg-[#372727] opacity-50 mt-1/2">
            <p> {">"} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
