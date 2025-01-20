import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import RHFSelect from "../../../ui/RHFSelect";
import Loader from "../../../ui/Loader";
import useChangeUserStatus from "./useChangeUserStatus";
import { useForm } from "react-hook-form";

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت پیشنهاد"
          register={register}
          required
          options={options}
        />
      </form>
      <div className="!mb-8">
        {isUpdating ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </div>
  );
}
export default ChangeUserStatus;
