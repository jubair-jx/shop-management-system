import { useRegisterUserMutation } from "@/redux/features/register/registerApi";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [registerUser] = useRegisterUserMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User Logging.....");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
        username: data.username,
      };
      await registerUser({ userInfo }).unwrap();

      toast.success("User register successfully, you can login now...", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/login`);
    } catch (error: any) {
      toast.error(error?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-violet-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Hey, Register your account
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter your Username..."
                    {...register("username")}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    User Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter your email..."
                    {...register("email")}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <p className=" text-sm">
                  {" "}
                  if You have a account, then
                  <Link className=" text-blue-600 font-semibold" to={"/login"}>
                    {" "}
                    login now
                  </Link>{" "}
                </p>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-violet-600 text-white rounded-md px-2 py-1"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
