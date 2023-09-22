export default function Step4() {
  return (
    <div data-step-content className='hidden flex-col w-1/2 justify-center m-5'>
      <h1 className='text-5xl pt-8 text-marine-blue font-bold'>Finishing up</h1>
      <p className='text-cool-gray pb-5'>
        Double-check everything looks OK before confirming.
      </p>
      <div
        id='summary'
        className='flex flex-col justify-between items-start bg-pastel-blue p-10'
      >
        <h1
          id='plan'
          className='inline-flex justify-between items-center w-full'
        ></h1>
        <div className=''></div>
        <div id='add-ons' className='w-full flex flex-col flex-wrap'>
          <div className='inline-flex justify-between text-cool-gray'></div>
          <div className='inline-flex justify-between text-cool-gray'></div>
          <div className='inline-flex justify-between text-cool-gray'></div>
        </div>
      </div>

      <div
        id='total-price'
        className='inline-block justify-between items-center w-full'
      ></div>
      <div className='flex justify-between pt-10'>
        <button data-step-back type='button' className='text-cool-gray'>
          Go back
        </button>
        <button
          type='button'
          className='bg-marine-blue text-white px-6 py-3 rounded-md font-bold'
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
