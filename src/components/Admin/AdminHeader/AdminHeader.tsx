import { LogoutIcon } from "../../../assets/ImagesFactory";

type Props = {
  selectedMenu: { title: string };
};

export const AdminHeader = ({ selectedMenu }: Props) => {
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
