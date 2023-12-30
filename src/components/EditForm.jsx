import React, { useEffect, useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import { closeModal } from "@/services/slice/modalSlice";
import {
  useGetSinglePatientQuery,
  useUpdatePatientMutation,
} from "@/services/api/patientApi";
import { useDispatch } from "react-redux";
import { setOpenAlert } from "@/services/slice/alertSlice";

const EditForm = ({ editId }) => {
  const { data } = useGetSinglePatientQuery(editId);
  const [patientData, setPatientData] = useState(null);
  const dispatch = useDispatch();
  const [updatePatient] = useUpdatePatientMutation();

  useEffect(() => {
    if (data) {
      setPatientData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPatientData((prevInfo) => ({
      ...prevInfo,
      [name]: type === "radio" ? (checked ? value : null) : value,
    }));
  };

  const updatePatientDataHandler = async () => {
    const res = await updatePatient({ id: editId, data: patientData });
    const data = res.data;
    if (data) {
      dispatch(closeModal({ open: false, type: "edit" }));
      setPatientData({
        name: "",
        pawRent: "",
        gender: null,
        contact: "",
        city: "",
        status: "",
        breed: "",
        birthDate: "",
        address: "",
        township: "",
      });
      dispatch(setOpenAlert({ open: true, text: "updated" }));

      setTimeout(() => {
        dispatch(setOpenAlert({ open: false }));
      }, 5000);
    }
  };

  return (
    <div className="flex items-center mt-4 flex-col">
      <h3 className="text-large font-semibold text-primary mb-1">
        Update patient
      </h3>
      <p className="text-light_gray">Enter update patient information below</p>

      <form
        onSubmit={updatePatientDataHandler}
        className="flex flex-col items-center gap-8 mt-6"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-4">
              <InputField
                label="Pet Name"
                id="petName"
                name="name"
                type="text"
                value={patientData?.name}
                onChange={handleChange}
              />
              <InputField
                label="Pawrent"
                id="pawrent"
                name="pawRent"
                type="text"
                value={patientData?.pawRent}
                onChange={handleChange}
              />

              <div className="flex flex-col">
                <label>Gender</label>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <InputField
                label="Contact Phone No."
                id="contact"
                name="contact"
                type="number"
                value={patientData?.contact}
                onChange={handleChange}
              />
              <InputField
                label="City"
                id="city"
                name="city"
                type="select"
                options={["Yangon", "Mandalay"]}
                value={patientData?.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-4">
              <InputField
                label="Status"
                id="status"
                name="status"
                type="select"
                options={["Allergy", "Sick"]}
                value={patientData?.status}
                onChange={handleChange}
              />
              <InputField
                label="Breed"
                id="breed"
                name="breed"
                type="select"
                options={["Golden Retriever", "German Shepherd", "Bulldog"]}
                value={patientData?.breed}
                onChange={handleChange}
              />
              <InputField
                label="Date of birth"
                id="birthDate"
                name="birthDate"
                type="date"
                value={patientData?.birthDate}
                onChange={handleChange}
              />
              <InputField
                label="Address"
                id="address"
                name="address"
                type="text"
                value={patientData?.address}
                onChange={handleChange}
              />
              <InputField
                label="Township"
                id="township"
                name="township"
                type="select"
                options={["Haling", "Dagon"]}
                value={patientData?.township}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <Button text={"Edit"} outline={false} type="submit" role="edit" />
          <Button
            text={"Cancel"}
            outline={true}
            onClick={() => dispatch(closeModal({ open: false, type: "edit" }))}
          />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
