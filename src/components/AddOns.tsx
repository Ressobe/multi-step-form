import { FormItems, addOnsOptions } from "../App";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

export default function AddOns({ addOns, updateForm, planLength }: StepProps) {
  const durationNation = planLength === "monthly" ? "mo" : "yr";

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
        {addOnsOptions.map(({ title, description, monthly, yearly }, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                const newAddOns: [boolean, boolean, boolean] = [...addOns];
                newAddOns[idx] = !newAddOns[idx];
                updateForm({ addOns: newAddOns });
              }}
              className={`flex justify-between text-left items-center py-2 px-3 lg:py-4 lg:px-6  border hover:border-purplish-blue ${
                addOns[idx] ? "border-purplish-blue" : ""
              } rounded-lg`}
            >
              <div className="flex items-center gap-4">
                <input
                  checked={addOns[idx]}
                  type="checkbox"
                  className="h-4 w-4"
                />
                <div>
                  <h2 className="text-md lg:text-lg text-marine-blue">
                    {title}
                  </h2>
                  <p className="text-cool-gray text-xs lg:text-md">
                    {description}
                  </p>
                </div>
              </div>
              <div className="text-purplish-blue text-sm lg:text-md">
                +${planLength === "monthly" ? monthly : yearly}/{durationNation}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
