import FormWrapper from "./FormWrapper";

type InputProp = {
  info: string;
};

type Props = InputProp & {
  handleChange: (fields: Partial<InputProp>) => void;
};

const UserInfo = ({ handleChange, info }: Props) => {
  return (
    <FormWrapper title="Description">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="info" className="font-medium capitalize text-gray-900">
          little about your self
        </label>
        <textarea
          name=""
          required
          id="info"
          value={info}
          onChange={(e) => handleChange({ info: e.target.value })}
          cols={30}
          rows={10}
          autoFocus
          className="border p-5 resize-none text-lg"
        ></textarea>
      </div>
    </FormWrapper>
  );
};
export default UserInfo;
