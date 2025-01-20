import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenue from "./HeaderMenue";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex justify-end items-center gap-x-8
        ${isLoading ? "blur-sm opacity-65" : ""}
        `}
      >
        <UserAvatar />
        <HeaderMenue />
      </div>
    </div>
  );
}
export default Header;
