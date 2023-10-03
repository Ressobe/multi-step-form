import { useMultistepForm } from "./hooks/useMultiStepForm";

import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";

export default function App() {
  const { currentStepIndex, step, isFirstStep, isLastStep, goTo, back, next } =
    useMultistepForm([
      <YourInfo key="your-info" />,
      <SelectPlan key="select-plan" />,
      <AddOns key="add-ons" />,
      <Summary key="summary" goToSelectPlan={() => goTo(1)} />,
      <Message key="message" />,
    ]);

  return (
    <div className="bg-light-blue lg:h-[100dvh] lg:flex justify-center items-center">
      <div className="lg:flex flex-row  gap-20  lg:bg-white lg:shadow-lg  lg:h-3/4 w-[55%] lg:rounded-md lg:p-5 ">
        <Sidebar activeIndex={currentStepIndex} />

        <main className="z-10 absolute inset-0 top-24 lg:static h-fit lg:h-full  bg-white lg:bg-none mx-4 p-6 rounded-md flex flex-col gap-6 shadow-lg lg:shadow-none lg:z-0 lg:gap-8 lg:w-1/2 lg:pt-10 ">
          {step}
          <div className="mt-auto flex justify-between">
            <BackButton handleClick={back} />
            <NextButton handleClick={next} />
          </div>
        </main>
      </div>
      <div className="absolute lg:hidden bottom-0 bg-white w-full flex  justify-between p-8">
        {!isFirstStep && !isLastStep ? (
          <BackButton handleClick={back} />
        ) : (
          <div></div>
        )}

        {!isLastStep ? <NextButton handleClick={next} /> : null}
      </div>
    </div>
  );
}

function BackButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button type="button" className="text-cool-gray" onClick={handleClick}>
      Go back
    </button>
  );
}

function NextButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      type="button"
      className="bg-marine-blue text-white px-6 py-3 rounded-md font-bold"
      onClick={handleClick}
    >
      Next Step
    </button>
  );
}
