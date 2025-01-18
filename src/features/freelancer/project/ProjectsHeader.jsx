import useCategories from "../../../hooks/useCategories"
import Filter from "../../../ui/Filter"
import FilterDropDown from "../../../ui/FilterDropDown"

const sortOptions = [{
  value: "latest",
  label: "(جدیدترین) مرتب سازی"
}, {  
  value: "earliest",
  label: "(قدیمی ترین) مرتب سازی"
}]

const statusOptions = [{
  label: "همه",
  value: "ALL",
}, {  
  label: "باز",
  value: "OPEN",
}, {  
  label: "بسته",
  value: "CLOSED",
  }]

function ProjectsHeader() {
  const{transformedCategories}=useCategories()
  return (
    <div className="flex items-center justify-between mb-8 text-secondary-700">
      <h1 className="text-2xl font-bold">پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions}/>
        <FilterDropDown filterField="sort" options={sortOptions}/>
        <FilterDropDown filterField="category" options={[
          { value: "all", label: "همه" },...transformedCategories
        ]}/>
      </div>
    </div>
  )
}
export default ProjectsHeader