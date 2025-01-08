import React from "react";
interface CategoryHeadProp {
  categoryId?: string;
  categoryName: string;
}
export const CategoryHead = ({
  categoryId,
  categoryName,
}: CategoryHeadProp) => {
  return (
    <div className="w-full h-[60px] flex flex-row items-center justify-between bg-red-600 text-white font-sans text-lg font-bold px-8 md:px-5">
      <div>{categoryName}</div>
      <div>
        {categoryId && (
          <a
            href={`/kategorija/${categoryId}`}
            className="cursor-pointer font-light"
          >
            {"POGLEDAJ SVE >"}
          </a>
        )}
      </div>
    </div>
  );
};
