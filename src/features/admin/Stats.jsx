import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  gap-8">
      <Stat
        color="green"
        title="کاربران"
        value={users}
        icon={<HiUser className="h-20 w-20" />}
      />
      <Stat
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="h-20 w-20" />}
      />

      <Stat
        color="blue"
        title=" پروژه ها"
        value={projects}
        icon={<HiCollection className="h-20 w-20" />}
      />
    </div>
  );
}
export default Stats;
