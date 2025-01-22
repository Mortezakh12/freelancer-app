import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 mb-8 text-xl">
        لیست پروپوزال ها
      </h1>
      <ProposalTable />
    </div>
  );
}
export default Proposals;
