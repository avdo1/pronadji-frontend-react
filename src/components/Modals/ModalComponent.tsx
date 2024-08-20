import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";
import useOnClickOutside from "use-onclickoutside";
import { CloseModalIcon } from "../../assets/ImagesFactory";

type Props = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
};

export const ModalComponent = ({ open, setIsOpen, children }: Props) => {
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const onCloseIconClick = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div
          ref={ref}
          className="flex flex-col relative min-w-[400px] min-h-[300px] bg-white rounded-lg"
        >
          <div className="flex justify-end p-2">
            <span onClick={onCloseIconClick} className="cursor-pointer">
              {CloseModalIcon}
            </span>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </Modal>
  );
};
