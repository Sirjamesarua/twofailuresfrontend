import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js"

export default function LoginPop() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const { setUser, putUserToken } = useStateContext();

    const onSubmit = async (data) => {
        try {
            const res = await axiosClient.post('/login', data);
            console.log(res);
            setUser(data.user);
            putUserToken(data.token);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id="login-pop" className="animated fadeInDown fadeInBg">
            <div className="form-container">
                <Link to={"/"}>
                    <button className="close-btn">
                        <i className="bi bi-x-lg"></i>
                    </button>
                </Link>
                <h2 className="mb-1">Login to Two Failures</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control">
                        <label htmlFor="email">Email</label><br />
                        <input type="text" id="email" placeholder="youremail@xxx.com"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="input-control">
                        <button type="submit">
                            {isSubmitting ? (<span className="loading-text">logging in . . .</span>) : "login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
