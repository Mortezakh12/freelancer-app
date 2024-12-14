
function TextField({
  label,
  errors,
  name,
  register,
  vslidationSchema,
  type = "text",
  required,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-secondary-700">
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, vslidationSchema)}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default TextField;
