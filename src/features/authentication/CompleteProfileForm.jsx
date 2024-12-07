import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { useForm } from "react-hook-form";

const CompleteProfileForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");

  const {handleSubmit,register,getValues}=useForm()

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (!user.status !== 2) {
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

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div className="w-full sm:max-w-sm ">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="نام و نام خانوادگی"
              name="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              register={register}
              vslidationSchema={
                {
                  required: "نام و نام خانوادگی الزامی است",
                  minLength: {
                    value: 3,
                    message: "نام و نام خانوادگی حداقل باید 3 کاراکتر داشته باشد",
                  },
                }
              }
            />
            <TextField
              label="ایمیل"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              register={register}
              vslidationSchema={
                {
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل وارد شده معتبر نمی‌باشد",
                  },
                }
              }

            />
            <div className="flex items-center justify-center gap-x-8">
              <RadioInput
                label="کارفرما"
                id="OWNER"
                name="role"
                value="OWNER"
                // onChange={(e) => setRole(e.target.value)}
                register={register}
                checked={getValues("role") === "OWNER"}
                vslidationSchema={{
                  required: "نقش الزامی است",
                }}
              />
              <RadioInput
                label="فریلنسر"
                id="FREELANCER"
                name="role"
                value="FREELANCER"
                register={register}
                // onChange={(e) => setRole(e.target.value)}
                checked={getValues("role") === "FREELANCER"}
                vslidationSchema={{
                  required: "نقش الزامی است",
                }}
              />
            </div>
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
    </div>
  );
};
export default CompleteProfileForm;
