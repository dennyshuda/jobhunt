import { ToastContainer } from "react-toastify";
import { JobContext } from "../../context/JobContext";
import { Ijobs } from "../../types";
import { useContext } from "react";

interface JobsProps {
  jobs: Ijobs[];
}

export default function Table({ jobs }: JobsProps) {
  const { editJobById, deleteJobById } = useContext(JobContext);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                COMPANY
              </th>
              <th scope="col" className="px-6 py-3">
                TITLE
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>
              <th scope="col" className="px-6 py-3">
                TENURE
              </th>
              <th scope="col" className="px-6 py-3">
                CITY
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                SALARY MIN
              </th>
              <th scope="col" className="px-6 py-3">
                SALARY MAX
              </th>
              <th scope="col" className="px-6 py-3">
                JOB DESC
              </th>
              <th scope="col" className="px-6 py-3">
                JOB QUAL
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs &&
              jobs.map((job, index) => {
                return (
                  <tr
                    key={job.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {job.company_name.slice(0, 10) + "..."}
                    </th>
                    <td className="px-6 py-4">{job.title}</td>
                    <td className="px-6 py-4">{job.job_type}</td>
                    <td className="px-6 py-4">{job.job_tenure}</td>
                    <td className="px-6 py-4">{job.company_city}</td>
                    <td className="px-6 py-4">{job.job_status}</td>
                    <td className="px-6 py-4">{job.salary_min}</td>
                    <td className="px-6 py-4">{job.salary_max}</td>
                    <td className="px-6 py-4">
                      {job.job_description?.slice(0, 20) + "..."}
                    </td>
                    <td className="px-6 py-4">
                      {job.job_qualification?.slice(0, 20) + "..."}
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        onClick={() => editJobById(job.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteJobById(job.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
