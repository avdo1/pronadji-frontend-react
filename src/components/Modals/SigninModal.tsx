import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ModalComponent } from "./ModalComponent";
import { Loader } from "../Loader/Loader";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../api";

type Props = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SigninModal = ({ open, setIsOpen }: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const {
    mutate: doSignup,
    data,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      setIsOpen(false);
      window.location.replace("/admin");
    },
    onError: (error) => {
      //
    },
  });

  const handleSignup = async () => {
    if (termsAccepted) {
      await doSignup({
        firstName: userName,
        lastName: userName,
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        roleId: 1,
      });
    }
  };

  useEffect(() => {
    if (data?.data) {
      window.location.replace("/");
    }
  }, [data]);

  return (
    <ModalComponent open={open} setIsOpen={setIsOpen}>
      {isPending && <Loader />}
      <div className="p-6 w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-bold text-gray-900 uppercase mb-4">
          Registrujte svoj nalog
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Korisničko ime"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Šifra"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ponovite šifru"
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-orange-500"
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <a href={""} className="text-sm text-teal-600 underline ml-2">
            Prihvatam{" "}
            <span className="font-bold text-orange-500">uslove korištenja</span>
            .
          </a>
        </div>
        <div className="mt-6">
          <button
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={handleSignup}
          >
            Registruj se
          </button>
        </div>
      </div>
    </ModalComponent>
  );
};
