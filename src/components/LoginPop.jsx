import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function LoginPop() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div id="login-pop" className="animated fadeInDown fadeInBg">
            <div className="form-container">
                <Link to={"/"}>
                    <button className="close-btn">
                        <i className="bi bi-x-lg"></i>
                    </button>
                </Link>
                <h3 className="mb-1">Login to Twofailures</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control">
                        <label htmlFor="email">Email</label><br />
                        <input type="text" id="email" placeholder="youremail@xxx.com"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="input-control">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" id="password" placeholder="Password"
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
        </div>
    )
}
