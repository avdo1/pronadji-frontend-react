export const HomeNavbarDropdown = () => {
  return (
    <div className="w-[300px] h-fit absolute right-0 top-[25px] bg-white shadow-lg p-2 flex flex-col gap-3 md:w-[220px] md:gap-2 md:top-[20px]">
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          placeholder="Naziv lokala"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          placeholder="Tip lokala"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          placeholder="Lokacija"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="border border-black h-[45px] w-full">
        <input
          type="text"
          placeholder="Event"
          className="border-none h-full w-full pl-2 text-gray-600 text-[20px] font-normal outline-none placeholder-gray-600 md:text-[18px]"
        />
      </div>
      <div className="h-[45px] w-full">
        <button className="h-full w-full bg-orange-600 text-white text-[18px] font-normal outline-none md:h-[35px] md:text-[16px]">
          PRETRAZI
        </button>
      </div>
    </div>
  );
};
