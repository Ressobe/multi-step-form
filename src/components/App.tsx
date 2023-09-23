import { useMultistepForm } from "../hooks/useMultiStepForm";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Sidebar from "./Sidebar";

export default function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<Step1 />, <Step2 />, <Step3 />, <Step4 />]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Sidebar activeIndex={currentStepIndex} />
      <form
        onSubmit={handleSubmit}
        className='flex w-1/2 flex-col justify-evenly m-5'
      >
        {step}

        <div className='flex  justify-between pt-5'>
          {!isFirstStep ? (
            <button type='button' className='text-cool-gray' onClick={back}>
              Go back
            </button>
          ) : (
            <div></div>
          )}

          {!isLastStep  ? (
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
