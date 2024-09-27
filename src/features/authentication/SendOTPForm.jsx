import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

const SendOTPForm = ({ setStep, onChange, phoneNumber }) => {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-8" onSubmit={sendOtpHandler}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
      />
      <div>
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full ">
            ارسال کد تایید
          </button>
        )}
      </div>
    </form>
  );
};
export default SendOTPForm;
