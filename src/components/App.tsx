import { useMultistepForm } from "../hooks/useMultiStepForm";

import Sidebar from "./Sidebar";
import SelectPlan from "./SelectPlan";
import YourInfo from "./YourInfo";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Message from "./Message";

export default function App() {
  const {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    isBeforeMessage,
    goTo,
    back,
    next,
  } = useMultistepForm([
    <YourInfo next={() => next()} />,
    <SelectPlan />,
    <AddOns />,
    <Summary
      goNext={() => next()}
      goBack={() => back()}
      goToSelectPlan={() => goTo(1)}
    />,
    <Message />,
  ]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Sidebar activeIndex={currentStepIndex} />
      <form
        onSubmit={handleSubmit}
        className={`flex w-1/2 flex-col ${
          isLastStep ? "justify-center items-center" : "justify-evenly"
        }   m-5`}
      >
        {step}

        <div className='flex justify-between pt-5'>
          {!isLastStep && !isBeforeMessage && !isFirstStep ? (
            <button type='button' className='text-cool-gray' onClick={back}>
              Go back
            </button>
          ) : (
            <div></div>
          )}

          {!isLastStep && !isBeforeMessage && !isFirstStep ? (
            <button
              id='next'
              type='button'
              className='bg-marine-blue  text-white px-6 py-3 rounded-md font-bold'
              onClick={next}
            >
              Next Step
            </button>
          ) : null}
        </div>
      </form>
    </>
  );
}
