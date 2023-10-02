import { useMultistepForm } from "../hooks/useMultiStepForm";

import Sidebar from "./Sidebar";
import SelectPlan from "./SelectPlan";
import YourInfo from "./YourInfo";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Message from "./Message";

export default function App() {
  const { currentStepIndex, step, isFirstStep, isLastStep, goTo, back, next } =
    useMultistepForm([
      <YourInfo />,
      <SelectPlan />,
      <AddOns />,
      <Summary
        goNext={() => next()}
        goBack={() => back()}
        goToSelectPlan={() => goTo(1)}
      />,
      <Message />,
    ]);

  const handleNext = () => {
    next();
  };

  return (
    <>
      <Sidebar activeIndex={currentStepIndex} />
      <main className="z-10 absolute  h-fit inset-0 top-24 bg-white mx-4 p-6 rounded-md flex flex-col gap-6 shadow-lg ">
        {step}
      </main>
      <div className="absolute bottom-0 bg-white w-full flex  justify-between p-8">
        {!isFirstStep && !isLastStep ? (
          <button type="button" className="text-cool-gray" onClick={back}>
            Go back
          </button>
        ) : (
          <div></div>
        )}

        {!isLastStep ? (
          <button
            id="next"
            type="button"
            className="bg-marine-blue text-white px-6 py-3 rounded-md font-bold"
            onClick={handleNext}
          >
            Next Step
          </button>
        ) : null}
      </div>
    </>
  );
}
