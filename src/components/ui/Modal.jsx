import React from "react";
import close from "@/images/close.png";
import Image from "next/image";
import CreateForm from "../CreateForm";
import EditForm from "../EditForm";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/services/slice/modalSlice";

const ModalCustom = () => {
  const { open, type, editId } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <div
      className={`absolute inset-0 bg-light_gray/50 w-screen h-screen backdrop-blur-sm ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center h-full w-full">
        <div className="min-w-1/3 min-h-1/2 rounded-md bg-white shadow-md px-10 pb-7 relative">
          <button
            onClick={() =>
              dispatch(closeModal({ open: false, type: "create" }))
            }
            className="p-1 bg-primary rounded-md absolute top-4 right-4"
          >
            <Image alt="img" src={close} width={13} height={13} />
          </button>
          {type === "create" ? <CreateForm /> : <EditForm editId={editId} />}
        </div>
      </div>
    </div>
  );
};

export default ModalCustom;
