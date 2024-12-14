import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";

export default function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;

  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  console.log(isEditSession);

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategories();

  const { createProject, isCreating } = useCreateProject();

  const { editProject, isEditing } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose(), reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose(), reset();
        },
      });
    }
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
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        vslidationSchema={{
          required: "توضیحات پروژه الزامی است",
          minLength: {
            value: 15,
            message: "توضیحات پروژه حداقل باید 15 کاراکتر داشته باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        vslidationSchema={{
          required: "بودجه پروژه الزامی است",
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
      <div className="!mt-8">
        {isCreating ? (
          <Loader />
        ) : (
          <button className="btn btn-primary w-full" type="submit">
            ثبت پروژه
          </button>
        )}
      </div>
    </form>
  );
}
