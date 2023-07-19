import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";
import Cookies from "js-cookie";
export default function ProtectedRoute() {
  const isAuth = Cookies.get("token");

  return !isAuth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={"/dashboard"} />
  );
}
