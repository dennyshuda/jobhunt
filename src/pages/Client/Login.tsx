import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { loginSchema } from "../../validations/LoginSchema";
import { InitialValues } from "../../types";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const login = useLogin();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as InitialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="bg-primary py-5 text-white text-center">
        <h1 className="text-3xl font-bold">Login</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border-primary border rounded-md p-5 mx-auto my-5 md:space-y-6 w-96"
      >
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="name@gmail.com"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email ? (
            <span className="text-sm text-red-500">{errors.email}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium ">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            onChange={handleChange}
            value={values.password}
          />
          {errors.password ? (
            <span className="text-sm text-red-500">{errors.password}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Login
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            to={"/register"}
            className="font-medium text-primary-600 hover:underline "
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
