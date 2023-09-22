import useForm from "../hooks/useForm";

export default function Step1() { 
  const {values, handleChange, handleSubmit } = useForm();
  console.log("Step 1");
  return (
    <form data-step-content className='flex flex-col justify-evenly m-5'>
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
          <span className='text-red-600' data-input-error='phone'></span>
        </label>
        <input
          className='border p-2.5 rounded-md outline-none focus:border-purplish-blue'
          type='text'
          placeholder='e.g. +1 234 567 890'
          name='phone'
          id='phone'
          required
        />
      </div>

      <button
        type='button'
        className='bg-marine-blue self-end text-white px-6 py-3 rounded-md font-bold'
        data-step-next='step-1'
      >
        Next Step
      </button>
    </form>
  );
}
