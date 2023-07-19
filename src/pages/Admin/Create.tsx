import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { ToastContainer } from "react-toastify";

export default function Create() {
  const { submitJob, handleChange, handleChangeTextArea } =
    useContext(JobContext);
  return (
    <div>
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
      <form onSubmit={submitJob}>
        <div className="col-span-full">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="company_name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Company name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company_name"
              id="company_name"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="job_type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Job Type
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="job_type"
              id="job_type"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="job_tenure"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Job Tenure
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="job_tenure"
              id="job_tenure"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="job_status"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Job Status
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="job_status"
              id="job_status"
              min={0}
              max={1}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="company_image_url"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Image
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company_image_url"
              id="company_image_url"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="company_city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Company City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company_city"
              id="company_city"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="salary_min"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Salary min
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="salary_min"
              id="salary_min"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="salary_max"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Salary max
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="salary_max"
              id="salary_max"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="job_description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Job Description
          </label>
          <div className="mt-2">
            <textarea
              id="job_description"
              name="job_description"
              rows={3}
              onChange={handleChangeTextArea}
              className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="job_qualification"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Job Qualification
          </label>
          <div className="mt-2">
            <textarea
              id="job_qualification"
              name="job_qualification"
              rows={3}
              onChange={handleChangeTextArea}
              className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          className="bg-gray-800 my-5 block py-3 w-full rounded-md text-white"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}
