import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogOut from "../features/authentication/LogOut";

function HeaderMenue() {
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <LogOut />
      </li>
    </ul>
  );
}
export default HeaderMenue;
