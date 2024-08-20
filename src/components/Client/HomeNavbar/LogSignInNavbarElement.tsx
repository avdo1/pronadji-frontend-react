import React, { useState } from "react";
import { LoginModal } from "../../Modals/LoginModal";
import { SigninModal } from "../../Modals/SigninModal";

export const LogSignInNavbarElement = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="flex items-center justify-end gap-2 p-6 bg-transparent w-full h-[150px]">
      <button
        onClick={() => setIsSignUpOpen(true)}
        className="border-2 border-[#ed5034] rounded px-3 py-2 text-white bg-[#ed5034] text-base font-normal hover:bg-[#d74327] transition"
      >
        REGISTRIRAJ SE
      </button>
      <button
        onClick={() => setIsLoginOpen(true)}
        className="border-2 border-[#ed5034] rounded px-3 py-2 text-white bg-[#ed5034] text-base font-normal hover:bg-[#d74327] transition"
      >
        PRIJAVI SE
      </button>
      {isLoginOpen && (
        <LoginModal open={isLoginOpen} setIsOpen={setIsLoginOpen} />
      )}
      {isSignUpOpen && (
        <SigninModal open={isSignUpOpen} setIsOpen={setIsSignUpOpen} />
      )}
    </div>
  );
};
