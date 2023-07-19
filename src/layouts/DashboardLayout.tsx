import Sidebar from "../components/Sidebar/Sidebar";
import { IChildren } from "../types";

export default function DashboardLayout({ children }: IChildren) {
  return (
    <div>
      <Sidebar />
      <main className="p-4 sm:ml-64">{children}</main>
    </div>
  );
}
