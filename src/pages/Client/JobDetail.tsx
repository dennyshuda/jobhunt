import Container from "../../components/Container";
import { useJob } from "../../hooks/useJob";
import { useParams } from "react-router-dom";
import { checkStatus } from "../../libs/status";
import { formatMoney } from "../../libs/formatMoney";

export default function JobDetail() {
  const { jobData } = useJob();
  const { id } = useParams();

  const jobDetail = jobData.find((job) => job.id === Number(id));

  return (
    <div>
      <div className="bg-primary py-5 text-white text-center">
        <h1 className="text-3xl font-bold">
          {jobDetail?.title} - {jobDetail?.job_tenure}
        </h1>
      </div>
      <Container>
        <div className="flex gap-5 my-5 flex-col md:flex-row items-center">
          <div className="text-center my-5 md:w-1/2">
            <img
              className="inline-block w-full"
              src={jobDetail?.company_image_url}
              alt={jobDetail?.company_name}
            />
          </div>
          <div className="md:w-1/2 space-y-2">
            <p>
              <strong>Company</strong>: {jobDetail?.company_name}
            </p>
            <p>
              <strong>Location</strong>: {jobDetail?.company_city}
            </p>
            <p>
              <strong>Status</strong>: {checkStatus(jobDetail?.job_status)}
            </p>
            <p>
              <strong>Type</strong>: {jobDetail?.job_type}
            </p>
            <p>
              <strong>Salary</strong>: {formatMoney(jobDetail?.salary_min)} -{" "}
              {formatMoney(jobDetail?.salary_max)}
            </p>
            <p>
              <strong>Job Qualification</strong>
            </p>
            <p>{jobDetail?.job_qualification}</p>
            <p>
              <strong>Job Description</strong>
            </p>
            <p>{jobDetail?.job_description}</p>
            <button className="bg-primary py-3 px-7 text-white rounded-md">
              Apply Job
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
