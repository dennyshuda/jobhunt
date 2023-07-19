import * as yup from "yup";

export const changePasswordSchema = yup.object({
  current_password: yup.string().min(8, "minimum 8 words").required("required"),
  new_password: yup.string().min(8, "minimum 8 words").required("required"),
  new_confirm_password: yup
    .string()
    .min(8, "minimum 8 words")
    .required("required"),
});
