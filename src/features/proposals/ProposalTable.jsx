import useProposals from "./useProposals";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalTable() {

   const{isLoading,proposals}= useProposals() 
    if (isLoading) return <Loader />;
  if (!proposals.length) return <Empty resourceName="پروپوزال" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
       <th>توضیحات</th>
       <th>زمان تحویل</th>
       <th>هزینه</th>
       <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow proposal={proposal} index={index} key={proposal._id} />
        ))}
      </Table.Body>
    </Table>)
}
export default ProposalTable