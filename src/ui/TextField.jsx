function TextField({label,value,onChange,name,}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block">{label}</label>
      <input
      name={name}
        value={value}
        id={name}
        onChange={onChange}
        className="textField__input"
        type="tel"
        autoComplete="off"
      />
    </div>
  );
}
export default TextField;
