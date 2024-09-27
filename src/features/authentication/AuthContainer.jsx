import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09358851332");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="w-full sm:max-w-sm">{renderStep()}</div>
    </div>
  );
};
export default AuthContainer;
