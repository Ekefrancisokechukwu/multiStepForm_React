import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const FormWrapper = ({ children, title }: Props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-center capitalize font-bold mb-12  text-xl text-stone-800">
        {title}
      </h1>
      {children}
    </div>
  );
};
export default FormWrapper;
