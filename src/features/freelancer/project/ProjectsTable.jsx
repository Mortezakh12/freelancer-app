import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={project._id} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectsTable