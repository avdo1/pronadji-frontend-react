import { Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
