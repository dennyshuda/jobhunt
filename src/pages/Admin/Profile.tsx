import { useGetUser } from "../../hooks/useGetUser";

export default function Profile() {
  const { user } = useGetUser();

  return (
    <div>
      <div>
        <img
          className="w-40 aspect-square object-cover rounded-full"
          src={user?.image_url}
          alt={user?.name}
        />
        <ul>
          <li>Account ID: {user?.id}</li>
          <li>Name: {user?.name}</li>
          <li>Email: {user?.email}</li>
        </ul>
      </div>
    </div>
  );
}
