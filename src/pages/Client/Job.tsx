import Container from "../../components/Container";
import CardList from "../../components/Card/CardList";
import { useJob } from "../../hooks/useJob";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Job() {
  const { jobData, setJobData, fetchJobs } = useJob();
  const [query, setQuery] = useState<string>("");

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const [filter, setFilter] = useState({
    company: "",
    city: "",
    type: "",
  });

  const resetFilter = () => {
    setFilter({
      company: "",
      city: "",
      type: "",
    });

    fetchJobs();
  };

  const handleFilter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredData = jobData.filter((job) => {
      return (
        job.company_name.toLocaleLowerCase().includes(filter.company) &&
        job.company_city.toLocaleLowerCase().includes(filter.city) &&
        job.job_type.toLocaleLowerCase().includes(filter.type)
      );
    });
    console.log(filteredData);
    if (filteredData.length === 0) {
      setJobData([]);
    } else {
      setJobData(filteredData);
    }
  };

  return (
    <section>
      <Container>
        <div className="space-y-5">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search Job"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery(event.target.value)
                }
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          <div className="w-96 mx-auto border-2 rounded-md border-primary p-10 space-y-5">
            <div className="text-center font-bold text-2xl">FILTER JOB</div>
            <form onSubmit={handleFilter} className="space-y-5">
              <input
                type="filterCompany"
                className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Filter company"
                onChange={handleChangeFilter}
                value={filter.company}
                name="company"
              />
              <input
                type="filterCity"
                className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Filter city"
                onChange={handleChangeFilter}
                value={filter.city}
                name="city"
              />
              <input
                type="filterType"
                className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Filter Type"
                onChange={handleChangeFilter}
                value={filter.type}
                name="type"
              />
              <div className="text-center space-x-5">
                <button className="bg-primary uppercase inline-block mx-auto rounded-md text-white py-3 px-10">
                  filter
                </button>
                <button
                  onClick={resetFilter}
                  className="bg-red-700 uppercase inline-block mx-auto rounded-md text-white py-3 px-10"
                >
                  reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <CardList jobs={jobData} query={query} />
      </Container>
    </section>
  );
}
