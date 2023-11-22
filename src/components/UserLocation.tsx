import FormWrapper from "./FormWrapper";

type InputProp = {
  city: string;
  street: string;
  country: string;
};

type Props = InputProp & {
  handleChange: (fields: Partial<InputProp>) => void;
};

const UserLocation = ({ handleChange, city, country, street }: Props) => {
  return (
    <FormWrapper title="Location">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="city" className="font-medium text-gray-900">
          City
        </label>

        <input
          type="text"
          required
          id="city"
          autoFocus
          value={city}
          onChange={(e) => handleChange({ city: e.target.value })}
          placeholder="city "
          className="p-2 text-lg border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="street" className="font-medium text-gray-900">
          Street
        </label>

        <input
          type="text"
          id="street"
          required
          value={street}
          onChange={(e) => handleChange({ street: e.target.value })}
          placeholder="street "
          className="p-2 text-lg border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="country" className="font-medium text-gray-900">
          Country
        </label>

        <input
          type=""
          id="country"
          required
          value={country}
          onChange={(e) => handleChange({ country: e.target.value })}
          placeholder="country "
          className="p-2 text-lg border rounded-lg"
        />
      </div>
    </FormWrapper>
  );
};
export default UserLocation;
