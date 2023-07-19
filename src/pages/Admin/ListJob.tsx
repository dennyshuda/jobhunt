import Table from "../../components/Table/Table";
import { JobContext } from "../../context/JobContext";
import { useContext } from "react";

export default function ListJob() {
  const { jobs } = useContext(JobContext);
  return (
    <div>
      <Table jobs={jobs} />
    </div>
  );
}
