import { FormItems, planOptions, addOnsOptions } from "../App";

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
  totalPrice: number;
};

export default function Summary({
  planLength,
  plan,
  totalPrice,
  addOns,
  updateForm,
}: StepProps) {
  const durationNotation = planLength === "monthly" ? "mo" : "yr";

  return (
    <>
      <div>
        <h1 className="text-2xl lg:text-4xl text-marine-blue font-bold">
          Finishing up
        </h1>
        <p className="text-cool-gray text-md font-thin pt-2">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-pastel-blue rounded-lg p-4">
        <div className="flex justify-between w-full items-center ">
          <div>
            <h1
              id="plan"
              className="inline-flex justify-between items-center w-full text-marine-blue text-lg"
            >
              {capitalize(plan)} ({capitalize(planLength)})
            </h1>
            <button
              className="text-sm text-cool-gray underline underline-offset-1"
              onClick={() =>
                updateForm({
                  planLength: planLength === "monthly" ? "yearly" : "monthly",
                })
              }
            >
              Change
            </button>
          </div>
          <h2 className="text-marine-blue font-bold text-md">
            ${planOptions[plan][planLength]}/{durationNotation}
          </h2>
        </div>
        <div className="my-4 w-full h-[1px] bg-cool-gray bg-opacity-30"></div>

        <div className="gap-3 flex flex-col w-full">
          {addOns.map((item, idx) => {
            if (!item) return;

            return (
              <div className="inline-flex justify-between" key={idx}>
                <span className="text-cool-gray">
                  {addOnsOptions[idx].title}
                </span>
                <span className="text-marine-blue">
                  +${addOnsOptions[idx][planLength]}/{durationNotation}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div id="total-price" className="flex justify-between p-4">
        <span className="text-cool-gray">
          Total (per {planLength === "monthly" ? "month" : "year"})
        </span>
        <span className="text-purplish-blue text-lg font-bold">
          +${totalPrice}/{durationNotation}
        </span>
      </div>
    </>
  );
}
