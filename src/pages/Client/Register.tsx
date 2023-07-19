import { useFormik } from "formik";
import { registerSchema } from "../../validations/RegisterValidation";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import { ToastContainer } from "react-toastify";

interface InitialValues {
  name: string;
  image_url: string;
  email: string;
  password: string;
}

export default function Register() {
  const register = useRegister();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      image_url: "",
      email: "",
      password: "",
    } as InitialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await register(values);
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
          <label htmlFor="name" className="block mb-2 text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="your name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name ? (
            <span className="text-sm text-red-500">{errors.name}</span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="image_url"
            className="block mb-2 text-sm font-medium "
          >
            Image Link
          </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="link image url"
            onChange={handleChange}
            value={values.image_url}
          />
          {errors.image_url ? (
            <span className="text-sm text-red-500">{errors.image_url}</span>
          ) : null}
        </div>
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
          Register
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have account yet?{" "}
          <Link
            to={"/login"}
            className="font-medium text-primary-600 hover:underline "
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
