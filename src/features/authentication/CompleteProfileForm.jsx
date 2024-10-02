import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);
      if(!user.status!==2){
        navigate("/")
        toast("پروفایل شما در انتظار تایید است",{icon:"⏳"})
        return;
      }
      if(user.role==="OWNER") return navigate("/owner")
      if(user.role==="FREELANCER") return navigate("/freelancer")
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              id="OWNER"
              name="role"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              id="FREELANCER"
              name="role"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
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
  );
};
export default CompleteProfileForm;
