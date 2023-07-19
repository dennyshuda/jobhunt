import { useEffect, useState } from "react";
import { Ijobs } from "../types";
import axios from "axios";

export const useJob = () => {
  const [jobData, setJobData] = useState<Ijobs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/job-vacancy`);
      console.log(response.data.data);
      setJobData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobData, setJobData, loading, fetchJobs };
};
