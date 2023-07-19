import { Link } from "react-router-dom";
import { Ijobs } from "../../types";
import { getPublishedTime } from "../../libs/getPublishedTime";
import { formatMoney } from "../../libs/formatMoney";

interface JobsProps {
  jobs: Ijobs[];
  query: string;
}

export default function CardList({ jobs, query }: JobsProps) {
  return (
    <section className="space-y-3 py-10">
      {jobs &&
        jobs
          .filter((job) => job.title.toLocaleLowerCase().includes(query))
          .map((job) => {
            return (
              <div
                key={job.id}
                className="border border-primary rounded-md  flex p-3 justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      className="w-20 h-20 rounded-full"
                      src={job.company_image_url}
                      alt={job.company_name}
                    />
                  </div>
                  <div>
                    <h2 className="text-sm">
                      {job.company_name} | {getPublishedTime(job.created_at)}
                    </h2>
                    <h1 className="font-semibold text-xl">{job.title}</h1>
                    <h2 className="text-sm">
                      {job.company_city} | {job.job_tenure} |{" "}
                      {formatMoney(job.salary_min)} -{" "}
                      {formatMoney(job.salary_max)}
                    </h2>
                  </div>
                </div>
                <div>
                  <Link
                    className="bg-primary text-white rounded-md p-3"
                    to={`/job-vacancy/${job.id}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
    </section>
  );
}
