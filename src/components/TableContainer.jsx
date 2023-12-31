"use client";

import Header from "./ui/Header";
import Table from "./Table";
import ModalCustom from "./ui/Modal";
import { useGetAllPatientsQuery } from "@/services/api/patientApi";
import { useEffect, useState } from "react";
import ConfirmModal from "./ui/ConfirmModal";
import Alert from "./ui/Alert";

const TableContainer = () => {
  const { data, isLoading } = useGetAllPatientsQuery();
  const [patientsData, setPatientsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (data) {
      setPatientsData(data);
    }
  }, [data]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredPatients = patientsData.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      patient.breed.toLowerCase().includes(searchTerm.toLowerCase()) |
      patient.pawRent.toLowerCase().includes(searchTerm.toLowerCase()) |
      patient.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // .slice(0, rowsPerPage);

  return (
    <div className="">
      <div className="m-10 mx-auto flex justify-center flex-col items-center p-10 bg-white shadow-sm rounded-md">
        <div className="w-full">
          <Header
            searchHandler={searchHandler}
            setRowsPerPage={setRowsPerPage}
          />
          {isLoading ? (
            <div className="flex justify-center items-center h-80 w-full">
              <h1 className="text-3xl font-semibold text-primary">
                LOADING...
              </h1>
            </div>
          ) : (
            <Table patientsData={filteredPatients} rowsPerPage={rowsPerPage} />
          )}
          <ModalCustom />
          <ConfirmModal />
          <Alert />
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
