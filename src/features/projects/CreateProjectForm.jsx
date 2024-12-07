import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          maxLength: 50,
        }}
        errors={errors}
      />
      <button className="btn btn-primary w-full" type="submit">
        ثبت پروژه
      </button>
    </form>
  );
}
export default CreateProjectForm;
