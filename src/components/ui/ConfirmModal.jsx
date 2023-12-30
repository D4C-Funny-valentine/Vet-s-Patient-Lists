import Image from "next/image";
import React from "react";
import close from "@/images/close.png";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useDeletePatientsMutation } from "@/services/api/patientApi";
import { setOpenConfirmModal } from "@/services/slice/confirmModal";
import { setOpenAlert } from "@/services/slice/alertSlice";

const ConfirmModal = () => {
  const { openConfirmModal, confirmId } = useSelector(
    (state) => state.confirmModal
  );

  const dispatch = useDispatch();
  const [deletePatients] = useDeletePatientsMutation();

  const closeConfirmModal = () => {
    dispatch(setOpenConfirmModal({ open: false }));
  };

  const deletePatientsHandler = async () => {
    const res = await deletePatients(confirmId);
    const data = res.data;
    if (data) {
      closeConfirmModal();
      dispatch(setOpenAlert({ open: true, text: "deleted" }));

      setTimeout(() => {
        dispatch(setOpenAlert({ open: false }));
      }, 5000);
    }
  };

  return (
    <div
      className={`absolute bg-light_gray/50 inset-0 ${
        openConfirmModal ? "block" : "hidden"
      }`}
    >
      <div className=" flex justify-center">
        <div className="px-5 py-4 rounded bg-white h-44 w-96 flex flex-col gap-4 justify-center mt-32">
          <div className="flex items-center justify-between">
            <h3 className="text-large font-semibold text-primary">
              Confirmation
            </h3>
            <button
              onClick={closeConfirmModal}
              className="bg-light_blue p-1 rounded"
            >
              <Image src={close} width={12} alt="img" />
            </button>
          </div>
          <p>Are you sure you want to delete patient?</p>
          <div className="flex justify-center gap-4">
            <Button
              outline={false}
              role="delete"
              text={"Delete"}
              onClick={deletePatientsHandler}
            />
            <Button
              outline={true}
              text={"Cancel"}
              onClick={closeConfirmModal}
              outlineColor="border-dust text-light_gray"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
