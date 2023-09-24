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
      <h1 className='text-5xl pt-8 text-marine-blue font-bold'>Finishing up</h1>
      <p className='text-cool-gray pb-5'>
        Double-check everything looks OK before confirming.
      </p>
      <div
        id='summary'
        className='flex flex-col justify-between items-start bg-pastel-blue p-10 rounded-md'
      >
        <div className='flex justify-between w-full items-center'>
          <div>
            <h1
              id='plan'
              className='inline-flex justify-between items-center w-full text-marine-blue text-xl'
            >
              {capitalize(plan.get())} ({capitalize(subscription.get())})
            </h1>
            <button
              className='text-sm text-cool-gray underline underline-offset-1'
              onClick={goToSelectPlan}
            >
              Change
            </button>
          </div>
          <h2 className='text-marine-blue font-bold text-xl'>
            ${priceOfPlan}/{durationNotation}
          </h2>
        </div>
        <div className='mt-5 w-full h-[1px] bg-cool-gray bg-opacity-30'></div>

        <div className='mt-5 gap-3 flex flex-col w-full'>
          {addOns.get().map((item, idx) => {
            if (!item) return;

            return (
              <div className='inline-flex justify-between' key={idx}>
                <span className='text-cool-gray'>{pricesOfAddOns[idx][0]}</span>
                <span className='text-marine-blue'>
                  +${pricesOfAddOns[idx][1]}/{durationNotation}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        id='total-price'
        className='p-10 inline-flex justify-between items-center w-full'
      >
        <span className='text-cool-gray'>
          Total (per{" "}
          {subscription.get().slice(0, subscription.get().length - 2)})
        </span>
        <span className='text-purplish-blue text-2xl font-bold'>
          +${getTotalPrice()}/{durationNotation}
        </span>
      </div>
      <div className='flex justify-between pt-5'>
        <button type='button' className='text-cool-gray' onClick={goBack}>
          Go back
        </button>
        <button
          id='next'
          type='button'
          className='bg-purplish-blue  text-white px-6 py-3 rounded-md font-bold'
          onClick={goNext}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
