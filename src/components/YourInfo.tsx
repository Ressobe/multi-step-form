import { useEffect, useRef, useState } from "react";
import { formFieldsStore } from "../../stores";

const defaultFormFields = {
  name: "",
  email: "",
  phone: "",
};

export default function YourInfo() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, phone } = formFields;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { name, value } = event.target;

    removeErrorState(idx);
    setFormFields({ ...formFields, [name]: value });
    formFieldsStore.set(formFields);
    console.log(formFieldsStore.get());
  };

  const inputsRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  const removeErrorState = (idx: number) => {
    if (!inputsRefs[idx].current?.classList.contains("border-red-600")) return;

    const spanErrors = document.querySelectorAll(".text-red-600");
    spanErrors[idx].innerHTML = "";
    inputsRefs[idx].current?.classList.remove("border-red-600");
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   let isError = false;
  //   const spanErrors = document.querySelectorAll(".text-red-600");
  //
  //   [name, email, phone].forEach((item, idx) => {
  //     if (item.length === 0) {
  //       spanErrors[idx].innerHTML = "This field is required";
  //       inputsRefs[idx].current?.classList.add("border-red-600");
  //       isError = true;
  //     }
  //   });
  //
  //   return isError;
  // };

  useEffect(() => {
    setFormFields(formFieldsStore.get());
  }, []);

  return (
    <>
      <h1 className="text-2xl text-marine-blue font-bold">Personal info</h1>
      <p className="text-cool-gray text-md font-thin">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col">
        <label htmlFor="name">
          <span className="text-marine-blue font-thin">Name</span>
          <span className="text-red-600" data-input-error="email"></span>
        </label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          className="outline-none border py-1 px-2 rounded-sm focus:border-purplish-blue"
          name="name"
          onChange={(e) => handleChange(e, 0)}
          value={name}
          ref={inputsRefs[0]}
          id="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">
          <span className="text-marine-blue font-thin">Email Address</span>
          <span className="text-red-600" data-input-error="email"></span>
        </label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="outline-none border py-1 px-2 rounded-sm focus:border-purplish-blue"
          name="email"
          onChange={(e) => handleChange(e, 1)}
          value={email}
          ref={inputsRefs[1]}
          id="email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">
          <span className="text-marine-blue font-thin">Phone Number</span>
          <span className="text-red-600"></span>
        </label>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          className="outline-none border py-1 px-2 rounded-sm focus:border-purplish-blue"
          name="phone"
          onChange={(e) => handleChange(e, 2)}
          value={phone}
          ref={inputsRefs[2]}
          id="phone"
          required
        />
      </div>
    </>
  );
}
