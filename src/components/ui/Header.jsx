import React, { useState } from "react";
import Image from "next/image";
import Search from "@/images/search.png";
import DropdownOption from "./DropdownOption";
import Add from "@/images/add.png";
import GreenDown from "@/images/green_down.png";
import { openModal } from "@/services/slice/modalSlice";
import { useDispatch } from "react-redux";

const Header = ({ searchHandler, setRowsPerPage }) => {
  const dispatch = useDispatch();
  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
  };

  const searchPatientHandler = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="header px-16 flex justify-between items-end w-full">
      <div className="flex flex-col gap-3">
        <h2 className="font-extrabold text-extraLarge text-primary">
          Patient List
        </h2>
        <div className="px-3 py-1 rounded-xl w-80 border border-gray-300 text-light_gray/50 flex items-center gap-3">
          <input
            type="text"
            onChange={searchPatientHandler}
            className="outline-none flex-1 placeholder:text-dust text-black"
            placeholder="Search table"
          />
          <Image alt="img" src={Search} height={16} />
        </div>
        <div className="flex items-center gap-8">
          <DropdownOption
            options={["Allergy", "Sick"]}
            onChange={searchPatientHandler}
          />
          <DropdownOption
            options={["Golden Retriever", "Beagle", "Spaniel"]}
            type="breed"
            onChange={searchPatientHandler}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => {
            dispatch(openModal({ open: true, type: "create" }));
          }}
          className="px-8 py-1 rounded-xl bg-primary flex items-center gap-3 active:scale-95 duration-150"
        >
          <Image alt="img" src={Add} width={13} />
          <span className="text-white">Add new patient</span>
        </button>
        <div className="flex items-center gap-2">
          <h4 className="font-medium">Row per pages : </h4>
          <button className="border border-gray-300 rounded-xl pr-2 outline-none flex justify-center items-center">
            <select
              id="row"
              className="bg-transparent text-primary outline-none px-3 cursor-pointer"
              onChange={(e) =>
                handleRowsPerPageChange(parseInt(e.target.value))
              }
            >
              <option>5</option>
              <option>10</option>
            </select>
            <Image alt="img" src={GreenDown} width={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
