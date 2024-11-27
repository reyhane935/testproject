import { useFormContext } from "react-hook-form";

const FormInput = ({ label, name, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        id={name}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default FormInput;
