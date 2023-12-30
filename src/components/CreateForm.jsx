import React, { useEffect, useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/services/slice/modalSlice";
import { useCreatePatientMutation } from "@/services/api/patientApi";
import { setOpenAlert } from "@/services/slice/alertSlice";
import Alert from "./ui/Alert";

const CreateForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    pawrent: "",
    gender: null,
    contact: "",
    city: "",
    status: "",
    breed: "",
    birthDate: "",
    address: "",
    township: "",
  });

  const [createPatient] = useCreatePatientMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const addNewPatientHandler = async (e) => {
    e.preventDefault();
    const res = await createPatient({
      id: `B-${uuidv4().slice(0, 3).toLocaleUpperCase()}`,
      ...patientInfo,
    });
    const data = res.data;
    if (data) {
      dispatch(closeModal({ open: false, type: "create" }));
      setPatientInfo({
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
      dispatch(setOpenAlert({ open: true, text: "added" }));

      setTimeout(() => {
        dispatch(setOpenAlert({ open: false }));
      }, 5000);
      router.refresh();
    }
  };

  return (
    <div className="flex items-center mt-4 flex-col">
      <h3 className="text-large font-semibold text-primary mb-1">
        Add new patient
      </h3>
      <p>Enter new patient information below</p>

      <form
        onSubmit={addNewPatientHandler}
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
                value={patientInfo.name}
                onChange={handleChange}
              />
              <InputField
                label="Pawrent"
                id="pawrent"
                name="pawRent"
                type="text"
                value={patientInfo.pawRent}
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
                value={patientInfo.contact}
                onChange={handleChange}
              />
              <InputField
                label="City"
                id="city"
                name="city"
                type="select"
                options={["Yangon", "Mandalay"]}
                value={patientInfo.city}
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
                value={patientInfo.status}
                onChange={handleChange}
              />
              <InputField
                label="Breed"
                id="breed"
                name="breed"
                type="select"
                options={["Golden Retriever", "German Shepherd", "Bulldog"]}
                value={patientInfo.breed}
                onChange={handleChange}
              />
              <InputField
                label="Date of birth"
                id="birthDate"
                name="birthDate"
                type="date"
                value={patientInfo.birthDate}
                onChange={handleChange}
              />
              <InputField
                label="Address"
                id="address"
                name="address"
                type="text"
                value={patientInfo.address}
                onChange={handleChange}
              />
              <InputField
                label="Township"
                id="township"
                name="township"
                type="select"
                options={["Haling", "Dagon"]}
                value={patientInfo.township}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <Button text={"Save"} outline={false} type="submit" />
          <Button
            text={"Cancel"}
            outline={true}
            onClick={() =>
              dispatch(closeModal({ open: false, type: "create" }))
            }
          />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
