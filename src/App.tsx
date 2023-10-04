import { useMultistepForm } from "./hooks/useMultiStepForm";

import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";
import StepButtons from "./components/StepButtons";

export default function App() {
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <YourInfo key="your-info" />,
      <SelectPlan key="select-plan" />,
      <AddOns key="add-ons" />,
      <Summary key="summary" />,
      <Message key="message" />,
    ]);

  return (
    <main className="bg-light-blue lg:h-[100dvh] lg:flex justify-center items-center">
      <div className="lg:flex flex-row  gap-20  lg:bg-white lg:shadow-lg  lg:h-3/4  lg:w-[950px] lg:rounded-md lg:p-5 ">
        <Sidebar activeIndex={currentStepIndex} />

        <div className="z-10 absolute inset-0 top-24 lg:static h-fit lg:h-full  bg-white lg:bg-inherit mx-4 p-6 rounded-md flex flex-col gap-6 shadow-lg lg:shadow-none lg:z-0 lg:gap-8 lg:w-1/2 lg:pt-10 ">
          {step}

          {currentStepIndex !== 4 ? (
            <div className="hidden mt-auto lg:flex justify-between">
              <StepButtons
                isLastStep={isLastStep}
                isFirstStep={isFirstStep}
                next={next}
                back={back}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute lg:hidden bottom-0 bg-white w-full flex  justify-between p-8">
        <StepButtons
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
          next={next}
          back={back}
        />
      </div>
    </main>
  );
}
