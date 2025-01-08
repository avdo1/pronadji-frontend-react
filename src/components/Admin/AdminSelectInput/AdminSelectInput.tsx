import { Dispatch, SetStateAction } from "react";

type Option = {
  id: string;
  name: string;
};

type Props = {
  required?: boolean;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  options: Option[];
  placeholder: string;
  customWidth?: string;
  title: string;
};

export const AdminSelectInput = ({
  value,
  setValue,
  options,
  required,
  placeholder,
  customWidth,
  title,
}: Props) => {
  return (
    <div
      className={`flex flex-col ${
        customWidth ? `w-[${customWidth}] max-w-[${customWidth}]` : "w-[370px]"
      }  h-[80px] sm:w-[90%] sm:h-[80px] md:h-[70px]`}
      style={customWidth ? { width: customWidth } : {}}
    >
      <div className="flex items-center h-[30%] text-gray-500 font-semibold text-lg">
        <p>
          {title} {required && <>*</>}
        </p>
      </div>
      <div className="flex items-center h-[70%]">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-[90%] pl-4 outline-none border border-gray-400 rounded-sm text-lg font-normal text-gray-700 placeholder-gray-400"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
