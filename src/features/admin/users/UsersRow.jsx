import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";

const usersStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در حال بررسی", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

function UsersRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${usersStyle[status].className}`}>
          {usersStyle[status].label}
        </span>
      </td>

      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus
            userId={user._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}
export default UsersRow;
