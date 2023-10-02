import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.js";
import Backdrop from "./Backdrop";

export default function LoginPop() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (email) => {
        try {
            const data = await axiosClient.post('/login', email);
            if (data.status === 200) {
                navigate("#verify-email"); // Navigates to link saved in Context state
            } else {
                alert("Something went wrong, \nTry Again!")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Backdrop>
            <div className="form-container">
                <Link to={"/"}>
                    <button className='mb-1 btn-blue close-btn' type='button'>
                        close
                    </button>
                </Link>
                <h2 className="mb-1">Login to Two Failures</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" placeholder="youremail@xxx.com"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="input-control">
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (<span className="loading-text">logging in</span>) : "login"}
                        </button>
                    </div>
                </form>
            </div>
        </Backdrop>
    )
}
