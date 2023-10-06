import { useMultistepForm } from "./hooks/useMultiStepForm";

import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";
import StepButtons from "./components/StepButtons";
import { useMemo, useState } from "react";

export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
};

export const addOnsOptions = [
  {
    title: "Online Services",
    monthly: 1,
    yearly: 10,
    description: "Access to multiplayer games",
  },
  {
    title: "Larger Storage",
    monthly: 2,
    yearly: 20,
    description: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable Profile",
    monthly: 2,
    yearly: 20,
    description: "Custom theme on your profile",
  },
];

export type PlanType = "Arcade" | "Advanced" | "Pro";

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: PlanType;
  planLength: "monthly" | "yearly";
  addOns: [boolean, boolean, boolean];
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: "monthly",
  addOns: [false, false, false],
};

export type inputsErrors = {
  nameError: boolean;
  emailError: boolean;
  phoneError: boolean;
};

const initialErrors: inputsErrors = {
  nameError: false,
  emailError: false,
  phoneError: false,
};

export default function App() {
  const [formData, setFormData] = useState(initialValues);
  const [inputsStatus, setInputsStatus] = useState(initialErrors);

  const updateForm = (fieldToUpdate: Partial<FormItems>) =>
    setFormData((_) => ({ ...formData, ...fieldToUpdate }));

  const totalPrice = useMemo(() => {
    const { plan, planLength, addOns } = formData;

    const planPrice = planOptions[plan][planLength];
    let addOnsPrice = 0;

    addOns.forEach((item, idx) => {
      if (item) {
        addOnsPrice += addOnsOptions[idx][planLength];
      }
    });

    return planPrice + addOnsPrice;
  }, [formData.plan, formData.planLength, formData.addOns]);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <YourInfo
        {...formData}
        nameError={inputsStatus.nameError}
        emailError={inputsStatus.emailError}
        phoneError={inputsStatus.phoneError}
        updateForm={updateForm}
        updateError={setInputsStatus}
        key="your-info"
      />,
      <SelectPlan {...formData} updateForm={updateForm} key="select-plan" />,
      <AddOns {...formData} updateForm={updateForm} key="add-ons" />,
      <Summary
        {...formData}
        totalPrice={totalPrice}
        updateForm={updateForm}
        key="summary"
      />,
      <Message key="message" />,
    ]);

  const handleNext = () => {
    let isError = false;
    if (currentStepIndex === 0) {
      if (formData.name.trim() === "") {
        setInputsStatus((prev) => ({ ...prev, nameError: true }));
        isError = true;
      }
      if (formData.email.trim() === "") {
        setInputsStatus((prev) => ({ ...prev, emailError: true }));
        isError = true;
      }
      if (formData.phone.trim() === "") {
        setInputsStatus((prev) => ({ ...prev, phoneError: true }));
        isError = true;
      }
    }

    if (isError) return;

    next();
  };

  return (
    <main className="bg-light-blue lg:h-[100dvh] lg:flex justify-center items-center">
      <div className="lg:flex flex-row  gap-20  lg:bg-white lg:shadow-lg  lg:h-[40rem] overflow-y-scroll  lg:w-[950px] lg:rounded-md lg:p-5 ">
        <Sidebar activeIndex={currentStepIndex} />
        <div className="z-10 absolute inset-0 top-24 lg:static h-fit lg:h-full  bg-white lg:bg-inherit mx-4 p-6 rounded-md flex flex-col gap-6 shadow-lg lg:shadow-none lg:z-0 lg:gap-8 lg:w-1/2 lg:pt-10 ">
          {step}

          <div className="hidden mt-auto lg:flex justify-between">
            <StepButtonsContainer
              handleNext={handleNext}
              back={back}
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              currentStepIndex={currentStepIndex}
            />
          </div>
        </div>
      </div>

      <div className="absolute lg:hidden bottom-0 bg-white w-full flex  justify-between p-8">
        <StepButtonsContainer
          handleNext={handleNext}
          back={back}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          currentStepIndex={currentStepIndex}
        />
      </div>
    </main>
  );
}

type StepButtonsContainerProps = {
  currentStepIndex: number;
  isLastStep: boolean;
  isFirstStep: boolean;
  handleNext: () => void;
  back: () => void;
};

function StepButtonsContainer({
  currentStepIndex,
  isLastStep,
  isFirstStep,
  handleNext,
  back,
}: StepButtonsContainerProps) {
  return (
    <>
      {currentStepIndex === 3 ? (
        <StepButtons
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
          classNameNext="bg-purplish-blue hover:bg-opacity-80 active:bg-opacity-70 text-white px-6 py-3 rounded-md font-bold"
          textNext="Confirm"
          next={handleNext}
          back={back}
        />
      ) : (
        <StepButtons
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
          classNameNext="bg-marine-blue hover:bg-opacity-80 active:bg-opacity-70 text-white px-6 py-3 rounded-md font-bold"
          textNext="Next step"
          next={handleNext}
          back={back}
        />
      )}
    </>
  );
}
