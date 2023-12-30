import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import editIcon from "@/images/edit.png";
import deleteIcon from "@/images/delete.png";
import allergy from "@/images/allergy.png";
import pickyEater from "@/images/pickyEater.png";
import { useDispatch } from "react-redux";
import { openModal } from "@/services/slice/modalSlice";
import { setOpenConfirmModal } from "@/services/slice/confirmModal";

const TableDataRow = ({ item }) => {
  const [openEditor, setOpenEditor] = useState(false);
  const dispatch = useDispatch();

  return (
    <tr className="text-start border border-gray-300 shadow-sm hover:bg-primary/20">
      <td className="p-5">
        <input type="checkbox" className="accent-primary" />
      </td>
      <td className="p-5">{item.id}</td>
      <td className="p-5">{item.name}</td>
      <td className="p-5 capitalize">
        {item.status === "allergy" ? (
          <Image alt="img" src={allergy} width={13} />
        ) : (
          <Image alt="img" src={pickyEater} width={13} />
        )}
      </td>
      <td className="p-5">{item.pawRent || item.pawrent}</td>
      <td className="p-5">{item.breed}</td>
      <td className="p-5 capitalize">{item.gender}</td>
      <td className="p-5">{item.birthDate}</td>
      <td className="p-5">{item.contact}</td>
      <td className="p-5">{`${item.address} , ${
        item.township && item.township
      }, ${item.city && item.city}`}</td>
      <td className="p-5 relative" onClick={() => setOpenEditor(!openEditor)}>
        <HiOutlineDotsVertical size={16} className="cursor-pointer" />
        <div
          className={`absolute  -left-[50%] -translate-x-[50%] px-2 py-1 rounded shadow bg-white ${
            openEditor ? "block" : "hidden"
          } `}
        >
          <button
            onClick={() => {
              dispatch(
                openModal({ open: true, type: "edit", editId: item.id })
              );
            }}
            className="flex items-center gap-5 w-32 py-1 hover:bg-slate-50 border-b"
          >
            <Image alt="img" src={editIcon} width={18} />
            <h4>Edit</h4>
          </button>
          <button
            onClick={() =>
              dispatch(setOpenConfirmModal({ open: true, confirmId: item.id }))
            }
            className="flex items -center gap-5 w-32 py-1 hover:bg-slate-50"
          >
            <Image alt="img" src={deleteIcon} width={18} />
            <h4>Delete</h4>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableDataRow;
