import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";

export default function CreateProjectForm({ onClose }) {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();

  const { createProject, isCreating } = useCreateProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: () => {
        onClose(), reset();
      },
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        vslidationSchema={{
          required: "عنوان پروژه الزامی است",
          minLength: {
            value: 10,
            message: "عنوان پروژه حداقل باید 10 کاراکتر داشته باشد",
          },
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        required
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button className="btn btn-primary w-full" type="submit">
        ثبت پروژه
      </button>
    </form>
  );
}
