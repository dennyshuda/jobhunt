import axios from "axios";
import { ChangeEvent, FormEvent, createContext, useEffect, useState } from "react";
import { IChildren, IJobData, Ijobs } from "../types";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

interface JobContextType {
  jobs: Ijobs[];
  jobData: IJobData;
  deleteJobById: (id: number) => void;
  submitJob: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  editJobById: (id: number) => void;
  submitEditJob: (event: FormEvent<HTMLFormElement>) => void;
}

export const JobContext = createContext({} as JobContextType);

export default function JobContextProvider({ children }: IChildren) {
  const [jobs, setJobs] = useState<Ijobs[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [currentId, setCurrentId] = useState<number>();
  const [jobData, setJobData] = useState<IJobData>({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  const isAuth = Cookies.get("token");

  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/job-vacancy`);
      setJobs(response.data.data);
      setIsFetching(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (isFetching) {
      fetchJobs();
    }
  }, [isFetching, setIsFetching]);

  const deleteJobById = async (id: number) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/job-vacancy/${id}`,
        {
          headers: { authorization: `Bearer ${isAuth}` },
        }
      );
      console.log(response);
      toast.success("Success Delete Job", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/list-job-vacancy");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error delete data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsFetching(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJobData({
      ...jobData,
      [event.target.id]: event.target.value,
    });
  };

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setJobData({
      ...jobData,
      [event.target.id]: event.target.value,
    });
  };

  const submitJob = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/job-vacancy`,
        jobData,
        {
          headers: { authorization: `Bearer ${isAuth}` },
        }
      );
      console.log(response);
      toast.success("Success Submit", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("dashboard/list-job-vacancy");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error submit data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsFetching(true);
    }
  };

  const editJobById = async (id: number) => {
    navigate(`dashboard/list-job-vacancy/edit/${id}`);
    setCurrentId(id);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/job-vacancy/${id}`
      );
      console.log(response.data);
      setJobData({
        title: response.data.title,
        job_description: response.data.job_description,
        job_qualification: response.data.job_qualification,
        job_type: response.data.job_type,
        job_tenure: response.data.job_tenure,
        job_status: response.data.job_status,
        company_name: response.data.company_name,
        company_image_url: response.data.company_image_url,
        company_city: response.data.company_city,
        salary_min: response.data.salary_min,
        salary_max: response.data.salary_max,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submitEditJob = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/job-vacancy/${currentId}`,
        jobData,
        {
          headers: { authorization: `Bearer ${isAuth}` },
        }
      );
      console.log(response);
      toast.success("Success Edit Data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("dashboard/list-job-vacancy");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error edit data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsFetching(true);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        jobData,
        deleteJobById,
        submitJob,
        handleChange,
        handleChangeTextArea,
        editJobById,
        submitEditJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
