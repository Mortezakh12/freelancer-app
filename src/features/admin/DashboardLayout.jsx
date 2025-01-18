import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();

  if (isLoading1 || isLoading2) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      {/* <Stats proposals={proposals} /> */}
    </div>
  );
}
export default DashboardLayout;
