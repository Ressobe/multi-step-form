import { useEffect, useState } from "react";
import {
  addOns,
  subscription,
  monthlyPricesAddOns,
  yearlyPricesAddOns,
} from "../../stores";

export default function AddOns() {
  const [currentAddOns, setCurrentAddOns] = useState([false, false, false]);

  const prices =
    subscription.get() === "monthly" ? monthlyPricesAddOns : yearlyPricesAddOns;

  const durationNotation = subscription.get() === "monthly" ? "mo" : "yr";

  const handleClick = (index: number) => {
    const newAddOns = [...currentAddOns];
    const isChecked = !newAddOns[index];
    newAddOns[index] = isChecked;
    setCurrentAddOns(newAddOns);
  };

  const inputPrevent = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    setCurrentAddOns(addOns.get());
  }, []);

  useEffect(() => {
    addOns.set(currentAddOns);
  }, [currentAddOns]);

  return (
    <>
      <h1 className='text-5xl pt-8 text-marine-blue font-bold'>Pick add-ons</h1>
      <p className='pt-4 pb-8 text-cool-gray'>
        Add-ons help enhance your gaming experience.
      </p>

      <div className='grid grid-rows-3 gap-8'>
        <button
          onClick={() => handleClick(0)}
          className={`flex w-full justify-between text-left items-center p-5 border hover:border-purplish-blue ${
            currentAddOns[0] ? "border-purplish-blue" : ""
          } rounded-lg`}
        >
          <input
            checked={currentAddOns[0]}
            onClick={inputPrevent}
            type='checkbox'
            className='h-6 w-6'
          />
          <div className='w-full pl-6 pr-20'>
            <h2 className='text-xl text-marine-blue'>Online service</h2>
            <p className='text-cool-gray'>Access to multiplayer games</p>
          </div>
          <div className='text-purplish-blue'>
            +${prices[0][1]}/{durationNotation}
          </div>
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`flex w-full justify-between text-left items-center p-5 border hover:border-purplish-blue ${
            currentAddOns[1] ? "border-purplish-blue" : ""
          } rounded-lg`}
        >
          <input
            onClick={inputPrevent}
            checked={currentAddOns[1]}
            type='checkbox'
            className='h-6 w-6'
          />
          <div className='w-full pl-6 pr-20'>
            <h2 className='text-xl text-marine-blue'>Larger storage</h2>
            <p className='text-cool-gray'>Extra 1TB of cloud save</p>
          </div>
          <div className='text-purplish-blue'>
            +${prices[1][1]}/{durationNotation}
          </div>
        </button>

        <button
          onClick={() => handleClick(2)}
          className={`flex w-full justify-between items-center text-left p-5 border hover:border-purplish-blue ${
            currentAddOns[2] ? "border-purplish-blue" : ""
          } rounded-lg`}
        >
          <input
            onClick={inputPrevent}
            checked={currentAddOns[2]}
            type='checkbox'
            className='h-6 w-6'
          />
          <div className='w-full pl-6 pr-20'>
            <h2 className='text-xl text-marine-blue'>Customizable Profile</h2>
            <p className='text-cool-gray'>Custom theme on your profile</p>
          </div>
          <div className='text-purplish-blue'>
            +${prices[2][1]}/{durationNotation}
          </div>
        </button>
      </div>
    </>
  );
}
