import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Cookies from "js-cookie";

export default function PrivateRoute() {
  const isAuth = Cookies.get("token");

  return isAuth ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to={"/"} replace />
  );
}
