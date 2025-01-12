import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };
  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          vslidationSchema={{
            required: "توضیحات الزامی است",
            minLength: {
              value: 10,
              message: " حداقل باید 10 کاراکتر داشته باشد",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          vslidationSchema={{
            required: "قیمت الزامی است",
          }}
          errors={errors}
        />

        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          vslidationSchema={{
            required: "مدت زمان الزامی است",
          }}
          errors={errors}
        />
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
    </div>
  );
}
export default CreateProposal;
