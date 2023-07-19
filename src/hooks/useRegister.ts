import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ValuesProps {
  name: string;
  image_url: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const navigate = useNavigate();

  const register = async (values: ValuesProps) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        values
      );
      console.log(response);
      toast.success("Success Register", {
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
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return register;
};
