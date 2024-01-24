import { useForm } from "react-hook-form";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";
// import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useLocation } from "react-router-dom";


export default function LoginPop() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const { putUser, redirect } = useStateContext();
    const [formError, setFormError] = useState("");

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const onSubmit = async (data) => {
        if (location.search) {
            const urlParams = new URLSearchParams(location.search)
            const refValue = urlParams.get('ref')
            data.referral_code = refValue
        }
        await axiosClient.post('/login', data)
            .then(({ data }) => {
                putUser(data.user.email);
                console.log(data);
                location.href = redirect;
            })
            .catch((err) => {
                console.log(err);
                const res = err.response?.data?.message ?? 'Something went wrong!';
                setFormError(res);
            });
    }

    const onChange = (value) => {
        // console.log("Captcha value:", value);
        setIsCaptchaVerified(true);
    }

    return (

        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModal">Join TwoFailures</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-container">
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

                                        {formError ?
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
