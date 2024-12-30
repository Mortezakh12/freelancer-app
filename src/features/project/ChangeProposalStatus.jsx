import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../ui/Loader";
import RHFSelect from "../../ui/RHFSelect";

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus(
      {
        id: proposalId,
        data,
      },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
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
export default ChangeProposalStatus;
