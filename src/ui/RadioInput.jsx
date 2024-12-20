const RadioInput = ({
  id,
  label,
  name,
  value,
  register,
  validationSchema,
  watch,
}) => {
  return (
    <div className="flex items-center text-secondary-600 gap-x-2">
      <input
        className="cursor-pointer w-4 h-4 accent-red-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default RadioInput;
