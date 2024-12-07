import RadioInput from "./RadioInput";

function RadioInputGroup({ configs, errors, register, watch }) {
  // Destructure the props

  const { name, validationSchema = {}, options } = configs;
  // Register the input with the validation schema
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {/* Render the radio inputs */}
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            name={name}
            value={value}
            label={label}
            validationSchema={validationSchema}
            id={value}
            errors={errors}
            register={register}
            watch={watch}
          />
        ))}
      </div>
      {
        // Show error message if there is any
        errors && errors[name] && (
          <span className="text-error block text-sm mt-2 flex-1">
            {errors[name]?.message}
          </span>
        )
      }
    </div>

  );
}
export default RadioInputGroup;
