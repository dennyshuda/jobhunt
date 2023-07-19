import { useFormik } from "formik";
import { useChangePassword } from "../../hooks/useChangePassword";
import { changePasswordSchema } from "../../validations/ChangePasswordSchema";

export default function ChangePassword() {
  const change = useChangePassword();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      new_confirm_password: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      await change(values);
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border-gray-800 border rounded-md p-5 mx-auto my-5 md:space-y-6 w-96"
      >
        <div>
          <label
            htmlFor="current_password"
            className="block mb-2 text-sm font-medium "
          >
            Current Password
          </label>
          <input
            type="password"
            name="current_password"
            id="current_password"
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="••••••••"
            onChange={handleChange}
            value={values.current_password}
          />
          {errors.current_password ? (
            <span className="text-sm text-red-500">
              {errors.current_password}
            </span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="new_password"
            className="block mb-2 text-sm font-medium "
          >
            New Password
          </label>
          <input
            type="password"
            name="new_password"
            id="new_password"
            placeholder="••••••••"
            onChange={handleChange}
            value={values.new_password}
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          />
          {errors.new_password ? (
            <span className="text-sm text-red-500">{errors.new_password}</span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="new_confirm_password"
            className="block mb-2 text-sm font-medium "
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="new_confirm_password"
            id="new_confirm_password"
            placeholder="••••••••"
            onChange={handleChange}
            value={values.new_confirm_password}
            className=" border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          />
          {errors.new_confirm_password ? (
            <span className="text-sm text-red-500">
              {errors.new_confirm_password}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
