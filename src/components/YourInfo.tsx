import { useRef, useState } from "react";

const defaultFormFields = {
  name: "",
  email: "",
  phone: "",
};

export default function YourInfo() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, phone } = formFields;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const phoneErrorRef = useRef(null);

  const handleSubmit = () => {};

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
          onChange={handleChange}
          value={name}
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
          onChange={handleChange}
          value={email}
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
          onChange={handleChange}
          value={phone}
          id='phone'
          required
        />
      </div>
    </>
  );
}
