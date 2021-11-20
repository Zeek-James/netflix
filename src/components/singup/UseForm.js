import React, { useState } from "react";
import { Check } from "./Check";
// import { Confirm } from "./Confirm";
import { PersonalDetails } from "./PersonalDetails";
import { Success } from "./Success";
import { UserDetails } from "./UserDetails";

export const UseForm = () => {
  const [step, setStep] = useState(1);

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    country: "",
    age: 18,
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (input) => (e) => {
    e.preventDefault();
    setDetails({ ...details, [input]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const signup = (details) => {
    const saveToLocal = () =>
      localStorage.setItem("details", JSON.stringify(details));
    saveToLocal();
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          details={details}
          handleOnChange={handleOnChange}
          title="Users Details"
        />
      );
    case 2:
      return (
        <PersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          details={details}
          handleOnChange={handleOnChange}
          title="Personal Details"
        />
      );
    case 3:
      return (
        <Check
          details={details}
          signup={signup}
          prevStep={prevStep}
          nextStep={nextStep}
          title="Confirm Details"
        />
      );
    case 4:
      return <Success user={details.userName} title="Congratulations" />;
    default:
      break;
  }
};
