import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ValuesProps {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const login = async (values: ValuesProps) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, values);
      Cookies.set("token", response.data.token);
      Cookies.set("user", JSON.stringify(response.data.user));
      console.log(response);
      toast.success("Success Login", {
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
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Please check your email and password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return login;
};
