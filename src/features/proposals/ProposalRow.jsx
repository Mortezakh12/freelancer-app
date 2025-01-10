import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در حال بررسی", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

function ProposalRow({ proposal, index }) {
  const { status = 0, // Default to the first status
    description = "",
    duration = 0,
    price = 0, } = proposal ;
    const currentStatus = statusStyle[status] || { label: "نامعلوم", className: "badge--unknown" };
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)}روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${currentStatus.className}`}>
          {currentStatus.label}
        </span>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
