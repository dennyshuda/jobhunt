import { Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";

export default function PublicRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
