import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";
  function handleChange(event) {
    setSearchParams({ filterField: event.target.value });
  }
  return <Select onChange={handleChange} value={value} options={options} />;
}
export default FilterDropDown;
