import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("please input your name"),
  image_url: yup.string().required("please input your image link"),
  email: yup.string().email().required("please input your email"),
  password: yup.string().min(8, "minimum 8 words").required("required"),
});
