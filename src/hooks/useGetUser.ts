import Cookies from "js-cookie";
import { IUser } from "../types";

export const useGetUser = () => {
  let user: null | IUser = null;
  const getUserFromCookies = Cookies.get("user");

  if (getUserFromCookies !== undefined) {
    user = JSON.parse(getUserFromCookies);
  }

  return { user };
};
