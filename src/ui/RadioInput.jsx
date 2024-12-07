const RadioInput = ({
  id,
  label,
  name,
  value,
  register,
  checked,
  vslidationSchema,
  errors,
}) => {
  return (
    <div className="flex items-center text-secondary-600 gap-x-2">
      <input
        className="cursor-pointer w-4 h-4 accent-red-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        {...register(name, vslidationSchema)}
      />
      <label htmlFor={id}>
        {label}
        {errors && (
          <span className="text-error block text-sm mt-2 ">
            {errors[name]?.message}
          </span>
        )}
      </label>
    </div>
  );
};
export default RadioInput;
