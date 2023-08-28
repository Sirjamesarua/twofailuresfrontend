import { useForm } from "react-hook-form"
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";
import { Navigate } from "react-router-dom";
import "./adminLoginStyles.scss";

export default function AdminLogin() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { adminToken, putAdminToken } = useStateContext();

  const onSubmit = async (credentials) => {
    // console.log(data);
    try {
      const { data } = await axiosClient.post("/admin/login", credentials);
      putAdminToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }

  if (adminToken) {
    return <Navigate to={"/admin/dashboard"} />
  }

  return (
    <div className="container">
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (<span className="loading-text">logging in</span>) : "login"}
          </button>
        </div>

      </form>
    </div>
  )
}

