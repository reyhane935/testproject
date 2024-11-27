import { useFormContext } from "react-hook-form";

const CheckboxInput = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        {...register(name, { required: "You must agree to the terms" })}
        id={name}
        className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default CheckboxInput;
