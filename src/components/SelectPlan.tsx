import { useEffect, useMemo, useState } from "react";
import {
  plan,
  subscription,
  monthlyPricesPlans,
  yearlyPricesPlans,
} from "../../stores";

type PlanType = "arcade" | "advanced" | "pro";
type SubscriptionDurationType = "monthly" | "yearly";

export default function SelectPlan() {
  const [currentPlan, setCurrentPlan] = useState<PlanType>("arcade");
  const [subscriptionDuration, setSubscriptionDuration] =
    useState<SubscriptionDurationType>("monthly");

  const [prices, setPrices] = useState(monthlyPricesPlans);

  const durationNotation = useMemo(
    () => (subscriptionDuration === "monthly" ? "mo" : "yr"),
    [subscriptionDuration]
  );

  useEffect(() => {
    setCurrentPlan(plan.get());
    setSubscriptionDuration(subscription.get());
  }, []);

  useEffect(() => {
    plan.set(currentPlan);
  }, [currentPlan]);

  useEffect(() => {
    if (subscriptionDuration === "monthly") {
      setPrices(monthlyPricesPlans);
    } else {
      setPrices(yearlyPricesPlans);
    }

    subscription.set(subscriptionDuration);
  }, [subscriptionDuration]);

  const switchSubscription = () => {
    if (subscriptionDuration === "monthly") {
      setSubscriptionDuration("yearly");
    } else {
      setSubscriptionDuration("monthly");
    }
  };

  return (
    <>
      <h1 className='text-5xl pt-8 text-marine-blue font-bold'>
        Select your plan
      </h1>
      <p className='pt-4 pb-8 text-cool-gray'>
        You have the option of monthly or yearly billing.
      </p>

      <div className='grid grid-cols-3 gap-5 pb-5'>
        <button
          onClick={() => setCurrentPlan("arcade")}
          className={`border ${
            currentPlan === "arcade"
              ? "border-purplish-blue bg-pastel-blue"
              : ""
          } py-4 pl-4 pr-20 inline-flex flex-col justify-between gap-16 rounded-lg  hover:border-purplish-blue`}
        >
          <img src='assets/images/icon-arcade.svg' className='w-12' />

          <div className='text-left'>
            <h2 className='text-marine-blue font-bold text-xl'>Arcade</h2>
            <p className='text-md text-cool-gray'>
              ${prices["arcade"]}/{durationNotation}
            </p>
            {subscriptionDuration === "yearly" && (
              <p className='pt-2 text-marine-blue text-sm'>2 months free</p>
            )}
          </div>
        </button>

        <button
          onClick={() => setCurrentPlan("advanced")}
          className={`border ${
            currentPlan === "advanced"
              ? "border-purplish-blue bg-pastel-blue"
              : ""
          }  py-4 pl-4 pr-20 inline-flex flex-col justify-between gap-16 rounded-lg focus:border-purplish-blue focus:bg-pastel-blue hover:border-purplish-blue `}
        >
          <img src='assets/images/icon-advanced.svg' className='w-12' />

          <div className='text-left flex flex-col'>
            <h2 className='text-marine-blue font-bold text-xl'>Advanced</h2>
            <p className='text-md text-cool-gray'>${prices["advanced"]}/</p>
            {subscriptionDuration === "yearly" && (
              <p className='pt-2 text-marine-blue text-sm'>2 months free</p>
            )}
          </div>
        </button>

        <button
          onClick={() => setCurrentPlan("pro")}
          className={`border ${
            currentPlan === "pro" ? "border-purplish-blue bg-pastel-blue" : ""
          } py-4 pl-4 pr-20 inline-flex flex-col justify-between gap-16 rounded-lg focus:border-purplish-blue focus:bg-pastel-blue hover:border-purplish-blue`}
        >
          <img src='assets/images/icon-pro.svg' className='w-12' />

          <div className='text-left'>
            <h2 className='text-marine-blue font-bold text-xl'>Pro</h2>
            <p className='text-md text-cool-gray'>
              ${prices["pro"]}/
              {subscriptionDuration === "monthly" ? "mo" : "yr"}
            </p>
            {subscriptionDuration === "yearly" && (
              <p className='pt-2 text-marine-blue text-sm'>2 months free</p>
            )}
          </div>
        </button>
      </div>

      <div className='flex justify-center items-center gap-6 bg-light-blue py-2'>
        <span
          className={`${
            subscriptionDuration === "monthly"
              ? "text-marine-blue"
              : "text-cool-gray"
          } transition-colors `}
        >
          Monthly
        </span>
        <button onClick={switchSubscription} id='switch-button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='3em'
            viewBox='0 0 576 512'
            className={`${
              subscriptionDuration === "monthly" ? "rotate-180" : ""
            } `}
          >
            <path d='M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z'></path>
          </svg>
        </button>
        <span
          className={`${
            subscriptionDuration === "yearly"
              ? "text-marine-blue"
              : "text-cool-gray"
          } transition-colors `}
        >
          Yearly
        </span>
      </div>
    </>
  );
}
