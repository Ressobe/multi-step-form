export default function Summary() {
  return (
    <>
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
    </>
  );
}
