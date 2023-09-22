export default function Step2() {
  console.log("Step 2");

  return (
    <div className='hidden flex-col w-1/2 justify-evenly m-5'>
      <h1 className='text-5xl pt-8 text-marine-blue font-bold'>
        Select your plan
      </h1>
      <p className='pt-4 pb-8 text-cool-gray'>
        You have the option of monthly or yearly billing.
      </p>

      <div className='grid grid-cols-3 gap-5 pb-5'>
        <button className='border py-4 pl-4 pr-20 inline-flex flex-col justify-between gap-16 rounded-lg focus:border-purplish-blue focus:bg-pastel-blue hover:border-purplish-blue'>
          <img src='assets/images/icon-arcade.svg' className='w-12' />

          <div className='text-left'>
            <h2 className='text-marine-blue font-bold text-xl'>Arcade</h2>
            <p className='text-md text-cool-gray'>$9/mo</p>
            <p className='pt-2 text-marine-blue text-sm'></p>
          </div>
        </button>

        <button className='border py-4 pl-4 pr-20 inline-flex flex-col justify-between gap-16 rounded-lg focus:border-purplish-blue focus:bg-pastel-blue hover:border-purplish-blue'>
          <img src='assets/images/icon-advanced.svg' className='w-12' />

          <div className='text-left flex flex-col'>
            <h2 className='text-marine-blue font-bold text-xl'>Advanced</h2>
            <p className='text-md text-cool-gray'>$12/mo</p>
            <p className='pt-2 text-marine-blue text-sm'></p>
          </div>
        </button>

        <button className='border py-4 pl-4 pr-20 inline-flex flex-col justify-between gap-16 rounded-lg focus: hover:border-purplish-blue'>
          <img src='assets/images/icon-pro.svg' className='w-12' />

          <div className='text-left'>
            <h2 className='text-marine-blue font-bold text-xl'>Pro</h2>
            <p className='text-md text-cool-gray'>$15/mo</p>
            <p className='pt-2 text-marine-blue text-sm'></p>
          </div>
        </button>
      </div>

      <div className='flex justify-center items-center gap-6 bg-light-blue py-2'>
        <span className='text-marine-blue transition-colors'>Monthly</span>
        <button id='switch-button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='3em'
            viewBox='0 0 576 512'
            className='rotate-180'
          >
            {" "}
            <path d='M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z'></path>
          </svg>
        </button>
        <span
          data-plan-duration='yearly'
          className='text-cool-gray transition-colors'
        >
          Yearly
        </span>
      </div>

      <div className='flex justify-between pt-5'>
        <button type='button' className='text-cool-gray'>
          Go back
        </button>
        <button
          id='next'
          type='button'
          className='bg-marine-blue text-white px-6 py-3 rounded-md font-bold'
          data-step-next='step-2'
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
