import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

const SendOTPForm = ({ onSubmit,isSendOtp ,register }) => {
  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        register={register}
      />
      <div>
        {isSendOtp ? (
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
