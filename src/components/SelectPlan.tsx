import { FormItems, PlanType, planOptions } from "../App";

import arcadeLogo from "../assets/images/icon-arcade.svg";
import advancedLogo from "../assets/images/icon-advanced.svg";
import proLogo from "../assets/images/icon-pro.svg";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

const logos = [arcadeLogo, advancedLogo, proLogo];

export default function SelectPlan({
  plan,
  planLength,
  updateForm,
}: StepProps) {
  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const durationNation = planLength === "monthly" ? "mo" : "yr";

  return (
    <>
      <div>
        <h1 className="text-2xl lg:text-4xl text-marine-blue font-bold">
          Select your plan
        </h1>
        <p className="text-cool-gray text-md font-thin pt-2">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="grid grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 lg:py-10">
        {["arcade", "advanced", "pro"].map((item, idx) => {
          return (
            <button
              key={idx}
              className={`flex lg:flex-col lg:justify-between lg:gap-12 gap-4 p-3 border rounded-lg ${
                plan === capitalize(item)
                  ? "border-purplish-blue bg-pastel-blue"
                  : ""
              }`}
              onClick={() => updateForm({ plan: capitalize(item) as PlanType })}
            >
              <img src={logos[idx]} className="w-12" />

              <div className="text-left">
                <h2 className="text-marine-blue lg:text-xl">
                  {capitalize(item)}
                </h2>
                <p className="text-cool-gray text-sm font-thin">
                  ${planOptions[capitalize(item) as PlanType][planLength]}/
                  {durationNation}
                </p>
                {planLength === "yearly" && (
                  <p className="pt-2 text-marine-blue text-sm">2 months free</p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex font-thin text-md justify-center items-center gap-6 bg-light-blue py-2">
        <span
          className={`${
            planLength === "monthly" ? "text-marine-blue" : "text-cool-gray"
          } transition-colors `}
        >
          Monthly
        </span>
        <button
          id="switch-button"
          onClick={() =>
            updateForm({
              planLength: planLength === "monthly" ? "yearly" : "monthly",
            })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 576 512"
            className={`${
              planLength === "monthly" ? "rotate-180" : ""
            } fill-marine-blue `}
          >
            <path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
          </svg>
        </button>
        <span
          className={`${
            planLength === "yearly" ? "text-marine-blue" : "text-cool-gray"
          } transition-colors `}
        >
          Yearly
        </span>
      </div>
    </>
  );
}
