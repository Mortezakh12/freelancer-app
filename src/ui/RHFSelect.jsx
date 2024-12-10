function RHFSelect({ label, name, options, register, required }) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      {options && options.length > 0 ? (
        <select
          className="textField__input"
          id={name}
          {...register(name, {
            required: required ? "This field is required" : false,
          })}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <p>No options available</p> // or handle it in another way
      )}
    </div>
  );
}
export default RHFSelect;
