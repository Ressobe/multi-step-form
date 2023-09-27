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

  const checkActiveStyle = (plan: string) => {
    if (currentPlan === plan) {
      return "border-purplish-blue bg-pastel-blue";
    }
    return "";
  };

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      <h1 className="text-2xl text-marine-blue font-bold">Select your plan</h1>
      <p className="text-cool-gray text-md font-thin">
        You have the option of monthly or yearly billing.
      </p>

      <div className="grid grid-rows-3 gap-2">
        {["arcade", "advanced", "pro"].map((item, idx) => {
          return (
            <button
              key={idx}
              className={`flex gap-4 p-3 border rounded-lg ${checkActiveStyle(
                item
              )} `}
              onClick={() => setCurrentPlan(item as PlanType)}
            >
              <img src={`assets/images/icon-${item}.svg`} className="w-12" />

              <div className="text-left">
                <h2 className="text-marine-blue">{capitalize(item)}</h2>
                <p className="text-cool-gray text-sm font-thin">
                  ${prices[item as PlanType]}/{durationNotation}
                </p>
                {subscriptionDuration === "yearly" && (
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
            subscriptionDuration === "monthly"
              ? "text-marine-blue"
              : "text-cool-gray"
          } transition-colors `}
        >
          Monthly
        </span>
        <button onClick={switchSubscription} id="switch-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 576 512"
            className={`${
              subscriptionDuration === "monthly" ? "rotate-180" : ""
            } fill-marine-blue `}
          >
            <path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
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
