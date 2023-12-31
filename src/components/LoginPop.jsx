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

    // const onSubmit = async (email) => {
    //     await axiosClient.post('/login', email)
    //         .then(({ data }) => {
    //             console.log(data);
    //             if (data.user.email_verified_at) {
    //                 putUser(data.user.email)
    //                 navigate(redirect)
    //             }
    //         })
    //         .catch(({ response }) => {
    //             const res = response.data.user;

    //             if (res.email_verified_at === null) {
    //                 putUser(res.email)
    //                 navigate("/#verify-email")
    //                 return;
    //             }

    //             alert("Something went wrong" + response)
    //         });
    // }

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

    // const onVerify = (token) => {
    //     // Handle the hCaptcha token (e.g., send it to your server for verification)
    //     console.log('hCaptcha Token:', token);

    //     setIsCaptchaVerified(true);
    // };

    const onChange = (value) => {
        console.log("Captcha value:", value);
        setIsCaptchaVerified(true);
    }

    return (
        <Backdrop>
            <div className="form-container">
                <Link to={"/"}>
                    <button className='mb-1 btn-blue close-btn' type='button'>
                        close
                    </button>
                </Link>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-control">
                        <label htmlFor="email">
                            <small>
                                Please enter a valid email address to continue. <br />
                                You will get notified of new episodes via Email. <br />
                            </small>
                            <small className="color-blue">
                                <b>You only have to do this once</b>
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

                        <input type="email" id="email" placeholder="youremail@xxx.com"
                            {...register("email", { required: true })}
                        /> &nbsp;

                        <br />
                        {/* <center><HCaptcha sitekey="3437899a-7980-4cda-bb90-c992971dcae1" onVerify={onVerify} /></center> */}
                        <center>
                            <ReCAPTCHA
                                sitekey="6LcBvBUpAAAAALk3kyU9iELAVYIM0gJuGmV7urJ3"
                                onChange={onChange}
                            />
                        </center>

                    </div>

                    <div className="input-control">
                        <button type="submit" disabled={isSubmitting || !isCaptchaVerified}>
                            {isSubmitting ? (<span className="loading-text">processing</span>) : "login"}
                        </button>
                    </div>

                </form>
            </div>
        </Backdrop>
    )
}
