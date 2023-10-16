import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.js";
import Backdrop from "./Backdrop";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function LoginPop() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const { putUser, redirect } = useStateContext()
    const navigate = useNavigate();

    const onSubmit = async (email) => {
        await axiosClient.post('/login', email)
            .then(({ data }) => {
                console.log(data);
                if (data.user.email_verified_at) {
                    putUser(data.user.email)
                    navigate(redirect)
                }
            })
            .catch(({ response }) => {
                const res = response.data.user;

                if (res.email_verified_at === null) {
                    putUser(res.email)
                    navigate("/#verify-email")
                    return;
                }

                alert("Something went wrong" + response)
            });
    }

    return (
        <Backdrop>
            <div className="form-container">
                <Link to={"/"}>
                    <button className='mb-1 btn-blue close-btn' type='button'>
                        close
                    </button>
                </Link>
                {/* <h2 className="m-0 fw-bold">Log In</h2> */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control">
                        <label htmlFor="email">
                            <small>
                                Please enter a valid email address to continue <br />
                                An OTP will be sent to verify your email address
                            </small>
                            <br />
                            <small className="color-blue">
                                <b>You only have to do this once</b>
                            </small>
                        </label>

                        <br />
                        <br />

                        <input type="email" id="email" placeholder="youremail@xxx.com"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="input-control">
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (<span className="loading-text">processing</span>) : "login"}
                        </button>
                    </div>

                </form>
            </div>
        </Backdrop>
    )
}
