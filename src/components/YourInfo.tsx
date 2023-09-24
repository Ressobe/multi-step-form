import { useEffect, useRef, useState } from "react";
import { formFieldsStore } from "../../stores";

const defaultFormFields = {
  name: "",
  email: "",
  phone: "",
};

export default function YourInfo({ next }: { next: () => void }) {
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

  const handleSubmit = () => {
    let isError = false;
    const spanErrors = document.querySelectorAll(".text-red-600");

    [name, email, phone].forEach((item, idx) => {
      if (item.length === 0) {
        spanErrors[idx].innerHTML = "This field is required";
        inputsRefs[idx].current?.classList.add("border-red-600");
        isError = true;
      }
    });

    if (isError) return;

    next();
  };

  useEffect(() => {
    setFormFields(formFieldsStore.get());
  }, []);

  return (
    <>
      <h1 className='text-5xl pt-10 text-marine-blue font-bold'>
        Personal info
      </h1>
      <p className='text-cool-gray'>
        Please provide your name, email address, and phone number.
      </p>

      <div className='flex flex-col'>
        <label
          className='text-marine-blue pb-2 inline-flex justify-between'
          htmlFor='name'
        >
          <span>Name</span>
          <span className='text-red-600' data-input-error='email'></span>
        </label>
        <input
          className='border p-2.5 rounded-md outline-none focus:border-purplish-blue'
          type='text'
          placeholder='e.g. Stephen King'
          name='name'
          onChange={(e) => handleChange(e, 0)}
          value={name}
          ref={inputsRefs[0]}
          id='name'
          required
        />
      </div>

      <div className='flex flex-col'>
        <label
          className='text-marine-blue pb-2 inline-flex justify-between'
          htmlFor='email'
        >
          <span>Email Address</span>
          <span className='text-red-600' data-input-error='email'></span>
        </label>
        <input
          className='border p-2.5 rounded-md outline-none focus:border-purplish-blue'
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          name='email'
          onChange={(e) => handleChange(e, 1)}
          value={email}
          ref={inputsRefs[1]}
          id='email'
          required
        />
      </div>

      <div className='flex flex-col'>
        <label
          className='text-marine-blue pb-2 inline-flex justify-between'
          htmlFor='phone'
        >
          <span>Phone Number</span>
          <span className='text-red-600'></span>
        </label>
        <input
          className='border p-2.5 rounded-md outline-none focus:border-purplish-blue'
          type='text'
          placeholder='e.g. +1 234 567 890'
          name='phone'
          onChange={(e) => handleChange(e, 2)}
          value={phone}
          ref={inputsRefs[2]}
          id='phone'
          required
        />
      </div>
      <div className='flex  justify-between pt-5'>
        <div></div>
        <button
          id='next'
          type='button'
          className='bg-marine-blue  text-white px-6 py-3 rounded-md font-bold'
          onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </>
  );
}
