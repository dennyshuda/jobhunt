import { useGetUser } from "../../hooks/useGetUser";

export default function Dashboard() {
  const { user } = useGetUser();
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">Welcome to Dashboard</h1>
      <h2 className="text-xl">{user?.name}</h2>
    </div>
  );
}
