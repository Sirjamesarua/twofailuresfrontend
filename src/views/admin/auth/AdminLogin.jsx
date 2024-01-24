import { useForm } from "react-hook-form"
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";
import { Navigate } from "react-router-dom";
import "./adminLoginStyles.scss";

export default function AdminLogin() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const { adminToken, putAdminToken } = useStateContext();

  const onSubmit = async (credentials) => {
    // console.log(data);
    await axiosClient.post("/admin/login", credentials)
      .then(({ data }) => {
        const res = data.message;
        putAdminToken(data.token);
        if (res === "Wrong credentials") {
          alert(res);
        }
        console.log(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  if (adminToken) {
    return <Navigate to={"/admin/dashboard"} />
  }

  return (
    <div className="container mb-5">
      <form onSubmit={handleSubmit(onSubmit)} id="adminLoginForm">
        <h2 className="text-center mb-1">Admin Login</h2>
        <div className="input-control">
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email"
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
            {isSubmitting ? (<span className="loading-text">processing</span>) : "login"}
          </button>
        </div>

      </form>
    </div>
  )
}

