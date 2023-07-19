import { Link } from "react-router-dom";
import Container from "../Container";

export default function Nav() {
  return (
    <nav className="sticky z-40 top-0 bg-white">
      <Container>
        <div className="flex justify-between items-center py-5 text-primary">
          <div className="font-bold text-3xl">
            <Link to={"/"}>JobHunt</Link>
          </div>
          <div className="space-x-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/job-vacancy"}>Vacancy</Link>
            <Link
              className="bg-primary text-white px-7 py-2.5 rounded-md"
              to={"/login"}
            >
              Login
            </Link>
          </div>
          <div className="hidden">
            <svg
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </Container>
    </nav>
  );
}
