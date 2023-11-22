import FormWrapper from "./FormWrapper";

type InputProp = {
  firstName: string;
  lastName: string;
  contact: string;
};

type Props = InputProp & {
  handleChange: (fields: Partial<InputProp>) => void;
};

const UserDetails = ({ contact, firstName, lastName, handleChange }: Props) => {
  return (
    <FormWrapper title="User Details">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="firstName" className="font-medium text-gray-900">
          First Name
        </label>

        <input
          type="text"
          id="firstName"
          required
          autoFocus
          value={firstName}
          onChange={(e) => handleChange({ firstName: e.target.value })}
          placeholder="First Name"
          className="p-2 text-lg border rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="lastName" className="font-medium text-gray-900">
          Last Name
        </label>

        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => handleChange({ lastName: e.target.value })}
          className="p-2 text-lg border rounded-lg"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="contact" className="font-medium text-gray-900">
          Contact
        </label>

        <input
          type="tel"
          id="contact"
          placeholder="Contact"
          value={contact}
          className="p-2 text-lg border rounded-lg"
          onChange={(e) => handleChange({ contact: e.target.value })}
          required
        />
      </div>
    </FormWrapper>
  );
};
export default UserDetails;
