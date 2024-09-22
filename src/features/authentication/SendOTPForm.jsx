import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-8" onSubmit={sendOtpHandler}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit" className="btn btn--primary w-full " type="submit">
        ارسال کد تایید
      </button>
    </form>
  );
};
export default SendOTPForm;
