import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loader />;
  return <div>
    <ProjectHeader project={project}/>
    <ProposalsTable proposals={project.proposals}/>
  </div>;
}
export default Project;
