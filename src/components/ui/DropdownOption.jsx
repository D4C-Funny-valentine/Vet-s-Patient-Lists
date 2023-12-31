import Image from "next/image";
import React from "react";
import black_down from "@/images/black_down.png";

const DropdownOption = ({ options, type = "status", onChange }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    // Ignore the default value (placeholder) in the onChange callback
    if (selectedValue !== "") {
      onChange(event);
    }
  };
  return (
    <div className="border border-gray-300 rounded-xl px-2 outline-none flex justify-center items-center font-medium">
      <select
        onChange={handleSelectChange}
        className="bg-transparent w-full outline-none px-4 cursor-pointer"
      >
        <option value="" hidden>
          {type === "status" ? "Status" : "Breed"}
        </option>{" "}
        {options?.map((item) => (
          <option key={item} className={"bg-transparent"}>
            {item}
          </option>
        ))}
      </select>
      <Image alt="img" src={black_down} height={15} />
    </div>
  );
};

export default DropdownOption;
