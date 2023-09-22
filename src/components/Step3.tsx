export default function Step3() {
  console.log("Step 3");
  return (
    <div className='hidden flex-col w-1/2 justify-center m-5'>
      <h1 className='text-5xl pt-8 text-marine-blue font-bold'>Pick add-ons</h1>
      <p className='pt-4 pb-8 text-cool-gray'>
        Add-ons help enhance your gaming experience.
      </p>

      <div className='grid grid-rows-3 gap-8'>
        <button
          className='flex w-full justify-between text-left items-center p-5 border hover:border-purplish-blue rounded-lg'
          data-add-ons
        >
          <input type='checkbox' className='h-6 w-6' />
          <div className='w-full pl-6 pr-20'>
            <h2 className='text-xl text-marine-blue'>Online service</h2>
            <p className='text-cool-gray'>Access to multiplayer games</p>
          </div>
          <div data-price-add-ons className='text-purplish-blue'>
            +$1/mo
          </div>
        </button>
        <button
          className='flex w-full justify-between text-left items-center p-5 border hover:border-purplish-blue rounded-lg'
          data-add-ons
        >
          <input type='checkbox' className='h-6 w-6' />
          <div className='w-full pl-6 pr-20'>
            <h2 className='text-xl text-marine-blue'>Larger storage</h2>
            <p className='text-cool-gray'>Extra 1TB of cloud save</p>
          </div>
          <div data-price-add-ons className='text-purplish-blue'>
            +$2/mo
          </div>
        </button>

        <button
          className='flex w-full justify-between items-center text-left p-5 border hover:border-purplish-blue rounded-lg'
          data-add-ons
        >
          <input type='checkbox' className='h-6 w-6' />
          <div className='w-full pl-6 pr-20'>
            <h2 className='text-xl text-marine-blue'>Customizable Profile</h2>
            <p className='text-cool-gray'>Custom theme on your profile</p>
          </div>
          <div data-price-add-ons className='text-purplish-blue'>
            +$2/mo
          </div>
        </button>
      </div>

      <div className='flex justify-between py-10'>
        <button className='text-cool-gray'>
          Go back
        </button>
        <button
          data-step-next='step-3'
          type='button'
          className='bg-marine-blue text-white px-6 py-3 rounded-md font-bold'
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
