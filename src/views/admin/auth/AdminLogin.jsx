import { useForm } from "react-hook-form"
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";
import { Navigate } from "react-router-dom";

export default function AdminLogin() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { adminToken, setAdmin, putAdminToken } = useStateContext();

  const onSubmit = async (data) => {
    try {
      const res = await axiosClient.post("/admin/login", data);
      console.log(res);
      setAdmin();
      putAdminToken();
    } catch (error) {
      console.log(error);
    }
  }

  if (adminToken) {
    return <Navigate to={"/admin/dashboard"} />
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="adminLoginForm">
        <div className="input-control">
          <label htmlFor="email">Email</label><br />
          <input type="text" id="email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="input-control">
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="input-control">
          <button type="submit">
            {isSubmitting ? (<span className="loading-text">logging in . . .</span>) : "login"}
          </button>
        </div>
      </form>
    </div>
  )
}

