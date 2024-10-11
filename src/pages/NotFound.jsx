import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm  flex justify-center pt-10"></div>
      <div>
        <h1 className="text-xl font-bold  text-secondary-700 mb-8">
          صفحه ای که به دنبال آن بودید یافت نشد
        </h1>
        <button className="flex items-center" onClick={moveBack}>
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span className="ml-2 text-sm text-primary-900">برگشت</span>
        </button>
      </div>
    </div>
  );
};
export default NotFound;
