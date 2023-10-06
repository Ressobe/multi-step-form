type StepButtonsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  classNameNext: string;
  textNext: string;
  back: () => void;
  next: () => void;
};

export default function StepButtons({
  isFirstStep,
  isLastStep,
  classNameNext,
  textNext,
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

      {!isLastStep ? (
        <NextButton
          className={classNameNext}
          text={textNext}
          handleClick={next}
        />
      ) : null}
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

type NextButtonProps = {
  handleClick: () => void;
  className: string;
  text: string;
};

function NextButton({ handleClick, className, text }: NextButtonProps) {
  return (
    <button type="button" className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
