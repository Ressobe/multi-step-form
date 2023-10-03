import { useEffect, useState } from "react";
import {
  addOns,
  addOnsContent,
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
      <div>
        <h1 className="text-2xl lg:text-4xl text-marine-blue font-bold">
          Pick add-ons
        </h1>
        <p className="text-cool-gray text-md font-thin pt-2">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="grid font-thin grid-rows-3 gap-6">
        {addOnsContent.map(({ title, description }, idx) => {
          return (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              className={`flex justify-between text-left items-center py-2 px-3  border hover:border-purplish-blue ${
                currentAddOns[idx] ? "border-purplish-blue" : ""
              } rounded-lg`}
            >
              <div className="flex items-center gap-4">
                <input
                  checked={currentAddOns[idx]}
                  onClick={inputPrevent}
                  type="checkbox"
                  className="h-4 w-4"
                />
                <div>
                  <h2 className="text-md text-marine-blue">{title}</h2>
                  <p className="text-cool-gray text-xs">{description}</p>
                </div>
              </div>
              <div className="text-purplish-blue text-sm">
                +${prices[idx][1]}/{durationNotation}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
