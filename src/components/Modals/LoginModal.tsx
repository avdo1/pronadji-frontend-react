import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useStorelessFetch } from "../../hooks/fetch";
import { ModalComponent } from "./ModalComponent";
import { Loader } from "../Loader/Loader";

// import ValidationErrorWrapper from '@components/mainComponents/validationError/ValidationErrorWrapper'

type Props = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const LoginModal = ({ open, setIsOpen }: Props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, doLogin] = useStorelessFetch("login");
  //   const { access_token, setAccessToken } = useGlobalContext()
  const [validationErrors, setValidationErrors] = useState<any>({
    hasErrors: false,
    errorData: undefined,
  });

  const prijaviSe = async () => {
    // const hasError = false;
    // if (!hasError) {
    //   setValidationErrors({ hasErrors: false, errorData: undefined })
    //   await doLogin({
    //     email: userName,
    //     password: password,
    //     isRegularLogin: true,
    //   })
    // } else {
    //   setValidationErrors({
    //     hasErrors: true,
    //     errorData: {
    //       userNameError: hasError.filter(
    //         (error: any) => error.field === 'userName',
    //       )[0]?.message,
    //       passwordError: hasError.filter(
    //         (error: any) => error.field === 'password',
    //       )[0]?.message,
    //     },
    //   })
    // }
  };

  useEffect(() => {
    if (loginData.loaded) {
      //   if (!access_token) {
      //     setAccessToken(loginData.data?.access_token)
      //     setIsOpen(false)
      //     window.location.replace('/admin')
      //   }
    }
  }, [loginData]);

  return (
    <ModalComponent open={open} setIsOpen={setIsOpen}>
      {loginData.loading && <Loader />}
      <div className="p-5 flex flex-col gap-4">
        <div className="text-center text-lg font-bold uppercase mb-4">
          prijavite se u svoj nalog
        </div>

        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username@gmail.com"
            type="text"
            className="w-full bg-gray-200 h-12 px-3 text-black border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          />
          {validationErrors.hasErrors &&
            validationErrors?.errorData?.userNameError && (
              //   <ValidationErrorWrapper
              //     message={validationErrors?.errorData?.userNameError}
              //   />
              <></>
            )}
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="* * * * *"
            type="password"
            className="w-full bg-gray-200 h-12 px-3 text-black border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          />
          {validationErrors.hasErrors &&
            validationErrors?.errorData?.passwordError && (
              //   <ValidationErrorWrapper
              //     message={validationErrors?.errorData?.passwordError}
              //   />
              <></>
            )}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="accent-orange-500" />
          <p className="text-sm text-teal-600">Ostani prijavljen/a</p>
        </div>

        <div className="mt-6">
          <button
            onClick={prijaviSe}
            className="w-full bg-orange-500 text-white border border-orange-500 rounded py-3 text-lg font-medium"
          >
            PRIJAVI SE
          </button>
        </div>

        <div className="text-center mt-6">
          <a href={""} className="text-teal-600 text-sm">
            Zaboravljena šifra?
          </a>
        </div>
      </div>
    </ModalComponent>
  );
};
