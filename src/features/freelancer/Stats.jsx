import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance=acceptedProposals.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="h-20 w-20" />}
      />
      <Stat
        color="green"
        title="درخواست های قبول شده"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="h-20 w-20" />}
      />
      <Stat
        color="blue"
        title=" کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="h-20 w-20" />}
      />
    </div>
  );
}
export default Stats;
