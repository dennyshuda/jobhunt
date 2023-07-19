import axios from "axios";
import Cookies from "js-cookie";

interface valuesProps {
  current_password: string;
  new_password: string;
  new_confirm_password: string;
}

export const useChangePassword = () => {
  const isAuth = Cookies.get("token");

  const change = async (values: valuesProps) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/change-password`,
        values,
        {
          headers: { authorization: `Bearer ${isAuth}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return change;
};
