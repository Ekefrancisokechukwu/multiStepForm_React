import { FormEvent, useState } from "react";
import UseMultiStep from "./UseMultiStep";
import UserDetails from "./components/UserDetails";
import UserInfo from "./components/UserInfo";
import UserLocation from "./components/UserLocation";
import IsCompleted from "./components/IsCompleted";

type InputValuesProp = {
  firstName: string;
  lastName: string;
  contact: string;
  city: string;
  street: string;
  country: string;
  info: string;
};

const INITIAL_DATA: InputValuesProp = {
  firstName: "",
  lastName: "",
  contact: "",
  city: "",
  street: "",
  country: "",
  info: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const handleChange = (fields: Partial<InputValuesProp>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    step,
    currentStep,
    steps,
    nextSlide,
    prevSlide,
    isFirstStep,
    isLastStep,
  } = UseMultiStep([
    <UserDetails {...data} handleChange={handleChange} />,
    <UserLocation {...data} handleChange={handleChange} />,
    <UserInfo {...data} handleChange={handleChange} />,
  ]);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return nextSlide();
    setIsComplete(true);
  };

  return (
    <div className="bg-slate-100 h-screen grid place-items-center">
      {isComplete ? (
        <IsCompleted />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl relative max-w-[35rem] px-14 py-8 rounded-lg w-full mx-auto"
        >
          <h5 className="text-xl absolute right-3 top-2 font-semibold">
            {currentStep + 1} / {steps.length}
          </h5>
          <div className="mt-5">{step}</div>

          <div className="flex justify-between items-center mt-7">
            {!isFirstStep && (
              <button
                onClick={prevSlide}
                type="button"
                className="py-3 px-8  rounded-lg text-white bg-stone-900"
              >
                Prev
              </button>
            )}

            <button
              type="submit"
              className="py-3 px-8 ms-auto rounded-lg text-white bg-stone-900"
            >
              {isLastStep ? "Done" : "Next"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
