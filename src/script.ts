import { activeIndex } from "../stores";

const stepStatus = document.querySelectorAll<HTMLElement>("[data-step-status]");
const stepContents = document.querySelectorAll<HTMLElement>(
  "[data-step-content]"
);

const renderStepStatus = (active: number) => {
  stepStatus.forEach((step) => step.classList.remove("bg-light-blue"));
  if (active > stepStatus.length - 1 || active < 0) active = 0;
  stepStatus[active].classList.add("bg-light-blue");
};

const showStepContent = (active: number) => {
  stepContents.forEach((content) => content.classList.add("hidden"));
  const currentContent = stepContents[active];
  currentContent.classList.remove("hidden");
  currentContent.classList.add("flex");
};

export const render = (active: number) => {
  renderStepStatus(active);
  showStepContent(active);
};

export const nextStep = () => {
  let newIdx = activeIndex.get() + 1;
  activeIndex.set(newIdx);
  render(activeIndex.get());
};

export const previousStep = () => {
  let newIdx = activeIndex.get() - 1;
  activeIndex.set(newIdx);
  render(activeIndex.get());
};
