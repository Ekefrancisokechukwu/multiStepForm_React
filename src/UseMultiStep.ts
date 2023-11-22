import { ReactElement, useState } from "react";

const UseMultiStep = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextSlide = () => {
    setCurrentStep((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentStep((prev) => {
      return prev - 1;
    });
  };

  return {
    step: steps[currentStep],
    currentStep,
    steps,
    nextSlide,
    prevSlide,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
};

export default UseMultiStep;
