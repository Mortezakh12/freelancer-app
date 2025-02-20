import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        projects={projects.length}
        users={users.length}
        proposals={proposals.length}
      />
    </div>
  );
}
export default DashboardLayout;
