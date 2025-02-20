function Select({value, options, onChange}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input text-xs py-2 bg-secondary-0"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
