import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.js";
import Backdrop from "./Backdrop";
import { useStateContext } from "../context/ContextProvider.jsx";
// import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


export default function LoginPop() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const { putUser, redirect } = useStateContext();
    const [formError, setFormError] = useState("");
    const navigate = useNavigate();

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const onSubmit = async (email) => {
        await axiosClient.post('/login', email)
            .then(({ data }) => {
                console.log(data);
                putUser(data.user.email)
                navigate(redirect)
            })
            .catch(({ response }) => {
                const res = response.data.message;
                setFormError(res);
            });
    }

    const onChange = (value) => {
        // console.log("Captcha value:", value);
        setIsCaptchaVerified(true);
    }

    return (
        <Backdrop>
            <div className="form-container p-2">
                <Link to={"/"}>
                    <button className='mb-1 btn-blue close-btn text-white rounded-1' type='button'>
                        close
                    </button>
                </Link>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control mb-3">
                        <label htmlFor="email">
                            <small>
                                Please enter a valid email address to continue. <br />
                                You will get notified of new episodes via Email. <br />
                            </small>
                            <small className="color-blue">
                                <b>▶ You only have to do this once.</b>
                            </small>
                        </label>
                        <hr />

                        {
                            formError ?
                                (<p className="m-0 text-danger">
                                    <small>
                                        {formError}
                                    </small>
                                </p>) : (<p></p>)
                        }

                        <div className="form-floating mb-3">
                            <input type="email" id="email floatingInput" placeholder="youremail@xxx.com" className="form-control rounded-1"
                                {...register("email", { required: true })}
                            />
                            <label htmlFor="floatingInput" className="fw-bold fs-6 text-secondary">Email address</label>
                        </div>

                        {/* <center><HCaptcha sitekey="3437899a-7980-4cda-bb90-c992971dcae1" onVerify={onVerify} /></center> */}
                        <center>
                            <ReCAPTCHA
                                sitekey="6LcBvBUpAAAAALk3kyU9iELAVYIM0gJuGmV7urJ3"
                                onChange={onChange}
                            />
                        </center>
                    </div>

                    <button type="submit" className="btn btn-blue text-white w-100 rounded-1 py-3" disabled={isSubmitting || !isCaptchaVerified}>
                        {isSubmitting ? (<span className="loading-text">PROCESSING</span>) : "LOGIN"}
                    </button>
                </form>
            </div>
        </Backdrop>
    )
}
