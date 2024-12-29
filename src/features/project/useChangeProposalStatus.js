import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ChangeProposalStatus from "./ChangeProposalStatus";

export default function useChangeProposalStatus() {
    const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
        mutationFn: ChangeProposalStatus,
        onSuccess: (data) => {
            toast.success(data.message);

        },

        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
    })
    return { isUpdating, changeProposalStatus }
}