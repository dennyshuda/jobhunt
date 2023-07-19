import { Route, Routes } from "react-router-dom";
import Home from "../pages/Client/Home";
import Job from "../pages/Client/Job";
import JobDetail from "../pages/Client/JobDetail";
import Login from "../pages/Client/Login";
import Dashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ListJob from "../pages/Admin/ListJob";
import Register from "../pages/Client/Register";
import PrivateRoute from "./PrivateRoute";
import Create from "../pages/Admin/Create";
import Edit from "../pages/Admin/Edit";
import Profile from "../pages/Admin/Profile";
import ChangePassword from "../pages/Admin/ChangePassword";

export default function SetupRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<Home />} />
        <Route path="/job-vacancy" element={<Job />} />
        <Route path="/job-vacancy/:id" element={<JobDetail />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="list-job-vacancy" element={<ListJob />} />
        <Route path="list-job-vacancy/create" element={<Create />} />
        <Route path="list-job-vacancy/edit/:id" element={<Edit />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
