import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required("please input your email"),
  password: yup.string().min(8, "minimum 8 words").required("required"),
});
