import { LogoutIcon } from "../../../assets/ImagesFactory";

type Props = {
  selectedMenu: { title: string };
  buttonText: string;
  onButtonClick: () => void;
  isCreateForm: boolean;
};

export const AdminHeader = ({
  selectedMenu,
  buttonText,
  onButtonClick,
  isCreateForm,
}: Props) => {
  const logout = () => {
    window.localStorage.removeItem("access_token");
    window.location.replace("/");
  };

  return (
    <div className="flex w-full h-[80px]">
      <div className="flex items-center justify-start w-9/12 h-full pl-8">
        <p className="text-gray-600 font-light text-3xl">
          {selectedMenu.title}
        </p>
      </div>
      <div className="flex items-center justify-end w-3/12 h-full pr-5">
        {buttonText && !isCreateForm && (
          <button
            className="h-2/3 w-fit min-w-[180px] p-2 font-semibold text-white text-[15px] bg-orange-600 rounded-[2px]"
            onClick={onButtonClick}
          >
            + {buttonText}
          </button>
        )}
        <div
          className="flex items-center justify-center w-2/5 h-1/2 cursor-pointer"
          onClick={logout}
        >
          {LogoutIcon}
        </div>
      </div>
    </div>
  );
};
