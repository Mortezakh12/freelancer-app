import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RadioInputGroup from "../../ui/RadioInputGroup";


const CompleteProfileForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");

 


  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "⏳" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const { handleSubmit, register, watch,formState:{ errors }} = useForm();


  return (
    <div className="flex flex-col gap-y-6 items-center pt-10">
      <h1 className="text-3xl text-secondary-700 font-bold">تکمیل اطلاعات</h1>
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            errors={errors}
            vslidationSchema={{
              required: "نام و نام خانوادگی الزامی است",
            }}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            errors={errors}
            vslidationSchema={{
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل وارد شده معتبر نمی‌باشد",
              },
            }}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: {
                required: "نقش الزامی است",
              },
              options: [
                { label: "کارفرما", value: "OWNER" },
                { label: "فریلنسر", value: "FREELANCER" },
              ],
            }}
          />
          <div>
            {isPending ? (
              <Loader />
            ) : (
              <button type="submit" className="btn btn--primary w-full ">
                بروزرسانی اطلاعات
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default CompleteProfileForm;
