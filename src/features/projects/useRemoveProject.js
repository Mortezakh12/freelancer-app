import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {

    const queryClient = useQueryClient();
    const { mutate: removeProject, isPending: isDeleting } = useMutation({
        mutationFn: removeProjectApi,
        onSuccess: (data) => {
            console.log(data);
            toast.success(data.message);
            queryClient.invalidateQueries(["owner-projects"]);
        },
        onError: (error) => toast.error(error?.response?.data?.message || "خطایی رخ داده است")

    })
    return { removeProject, isDeleting };
}