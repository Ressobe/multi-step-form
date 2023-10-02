import {
  plan,
  subscription,
  addOns,
  monthlyPricesPlans,
  yearlyPricesPlans,
  monthlyPricesAddOns,
  yearlyPricesAddOns,
  getTotalPrice,
} from "../../stores";

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default function Summary({
  goToSelectPlan,
  goBack,
  goNext,
}: {
  goToSelectPlan: () => void;
  goBack: () => void;
  goNext: () => void;
}) {
  const priceOfPlan =
    subscription.get() === "monthly"
      ? monthlyPricesPlans[plan.get()]
      : yearlyPricesPlans[plan.get()];

  const pricesOfAddOns =
    subscription.get() === "monthly" ? monthlyPricesAddOns : yearlyPricesAddOns;

  const durationNotation = subscription.get() === "monthly" ? "mo" : "yr";

  return (
    <>
      <h1 className="text-2xl text-marine-blue font-bold">Finishing up</h1>
      <p className="text-cool-gray text-md font-thin">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-pastel-blue rounded-lg p-4">
        <div className="flex justify-between w-full items-center ">
          <div>
            <h1
              id="plan"
              className="inline-flex justify-between items-center w-full text-marine-blue text-lg"
            >
              {capitalize(plan.get())} ({capitalize(subscription.get())})
            </h1>
            <button
              className="text-sm text-cool-gray underline underline-offset-1"
              onClick={goToSelectPlan}
            >
              Change
            </button>
          </div>
          <h2 className="text-marine-blue font-bold text-md">
            ${priceOfPlan}/{durationNotation}
          </h2>
        </div>
        <div className="my-4 w-full h-[1px] bg-cool-gray bg-opacity-30"></div>

        <div className="gap-3 flex flex-col w-full">
          {addOns.get().map((item, idx) => {
            if (!item) return;

            return (
              <div className="inline-flex justify-between" key={idx}>
                <span className="text-cool-gray">{pricesOfAddOns[idx][0]}</span>
                <span className="text-marine-blue">
                  +${pricesOfAddOns[idx][1]}/{durationNotation}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div id="total-price" className="flex justify-between p-4">
        <span className="text-cool-gray">
          Total (per{" "}
          {subscription.get().slice(0, subscription.get().length - 2)})
        </span>
        <span className="text-purplish-blue text-lg font-bold">
          +${getTotalPrice()}/{durationNotation}
        </span>
      </div>
    </>
  );
}
