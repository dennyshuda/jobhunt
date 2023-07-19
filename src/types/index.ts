import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface Ijobs {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  job_description: string;
  job_qualification: string;
  job_type: string;
  job_tenure: string;
  job_status: number;
  company_name: string;
  company_image_url: string;
  company_city: string;
  salary_min: number;
  salary_max: number;
}

export interface IUser {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  image_url: string;
  name: string;
  updated_at: string;
}

export interface IJobData {
  title: string;
  job_description: string;
  job_qualification: string;
  job_type: string;
  job_tenure: string;
  job_status: number;
  company_name: string;
  company_image_url: string;
  company_city: string;
  salary_min: number;
  salary_max: number;
}

export interface InitialValues {
  email: string;
  password: string;
}
