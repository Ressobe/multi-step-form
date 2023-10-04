type StepButtonsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
};

export default function StepButtons({
  isFirstStep,
  isLastStep,
  back,
  next,
}: StepButtonsProps) {
  return (
    <>
      {!isFirstStep && !isLastStep ? (
        <BackButton handleClick={back} />
      ) : (
        <div></div>
      )}

      {!isLastStep ? <NextButton handleClick={next} /> : null}
    </>
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
