import Image from "next/image";
import React from "react";
import success from "@/images/success.png";
import { useSelector } from "react-redux";

const Alert = () => {
  const { openAlert, text } = useSelector((state) => state.alert);
  return (
    <div
      className={`bg-success text-white px-4 py-3 rounded flex justify-center items-center gap-3 w-96 absolute bottom-7 left-7 ${
        openAlert ? "block" : "hidden"
      } `}
      role="alert"
    >
      <Image src={success} className="bg-success" width={20} alt="img" />
      <span className="block sm:inline">Patient is successfully {text}</span>
    </div>
  );
};

export default Alert;
