# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: https://multi-step-form-ressobe.vercel.app/

## My process

I started writing this project in astro, but I quickly realized that there is a lot different states so
that's why I finally chose React here.

I also learned that it's better to start with mobile design (mobile-first workflow) because tailwind css is what is created
to this approach (and generally it's faster and easier)

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://github.com/facebook/react) - JS library
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapid UI development

### What I learned

Parital type

```js
const updateForm = (fieldToUpdate: Partial<FormItems>) =>
    setFormData((_) => ({ ...formData, ...fieldToUpdate }));
};
```

Custom hook for controlling form state

```js
export function useMultistepForm(steps: React.ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    isBeforeMessage: currentStepIndex === steps.length - 2,
    goTo,
    next,
    back,
  };
}

```

### Useful resources

- [React and Typescript](https://react-typescript-cheatsheet.netlify.app/) - This helped me with typescript when I don't know what type use in specific case.
