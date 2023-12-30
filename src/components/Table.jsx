import { tableHeader } from "@/helper/data";
import React, { useState } from "react";
import TableDataRow from "./TableDataRow";

const Table = ({ patientsData }) => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(patientsData.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const visiblePatients = patientsData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  return (
    <>
      <table className="w-full select-none mt-10">
        <thead className="border border-gray-300">
          <tr className="">
            <th className="p-5">
              <input type="checkbox" className="accent-primary" />
            </th>
            {tableHeader.map((item, index) => (
              <th
                className={`capitalize font-semibold text-primary text-start p-3`}
                key={index}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {visiblePatients?.map((item) => (
            <TableDataRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="p-4 flex justify-center items-center gap-5">
        <button
          className="px-2 py-1 rounded bg-primary text-white disabled:bg-primary/30"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <span className="px-2 py-1 rounded bg-slate-100 shadow text-primary">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-2 py-1 rounded bg-primary text-white disabled:bg-primary/30"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default Table;
