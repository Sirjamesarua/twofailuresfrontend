import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import logo from "../assets/twofailures_logo.png";
import sideImg from "../assets/side-img.png"
import React, { useState } from "react";
import Loader from "../components/Loader";
import { useForm } from "react-hook-form";
import axiosClient from "../axios-client";
import ReCAPTCHA from "react-google-recaptcha";


export default function GuestLayout() {
    const location = useLocation();
    const navigation = useNavigation();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    // console.log(location);

    const onChange = (value) => {
        console.log("Captcha value:", value);
        setIsCaptchaVerified(true);
    }

    const onSubmit = async (data) => {
        await axiosClient.post('/subscribe', data)
            .then((data) => {
                console.log(data);
                alert('Email Submitted');
            })
            .catch((data) => {
                console.log(data);
                alert('Please use a valid email')
            })
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary shadow-sm">
                <div className="container">
                    <div>
                        <h1>
                            <Link to={"/"}>
                                <img src={logo} alt="tf_logo" id="logo" />
                                <img src={sideImg} alt="them" id="side-img" />
                            </Link>
                        </h1>
                    </div>

                    <div>
                        {/* About Us Button */}
                        <button type="button" className="btn btn-blue btn-sm text-white py-0 rounded-3" data-bs-toggle="modal" data-bs-target="#aboutUs">
                            <i className="bi bi-chat-quote m-0"></i>
                            <span className="d-lg-inline-block d-none"> &nbsp;About</span>

                        </button>
                        <div className="modal fade" id="aboutUs" tabIndex="-1" aria-labelledby="aboutUsLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="aboutUsLabel">About Us - Two Failures</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="m-0">
                                            Tag and Simi are two best friends who have one thing in common: they are failures.
                                            <br />
                                            <br />
                                            They work as maintenance workers in the female dorm of a prestigious university, where they hope to find some romance and adventure, but their plans always backfire, and they end up in awkward and embarrassing situations.
                                            <br />
                                            <br />
                                            Follow their hilarious misadventures as they try to deal with their daily struggles with humor and optimism.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us Button */}
                        <button type="button" className="btn btn-blue text-white py-0 btn-sm mx-1 rounded-3" data-bs-toggle="modal" data-bs-target="#contactUs">
                            <i className="bi bi-telephone-forward m-0"></i>
                            <span className="d-lg-inline-block d-none">&nbsp; Contact</span>
                        </button>
                        <div className="modal fade" id="contactUs" tabIndex="-1" aria-labelledby="contactUsLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="contactUsLabel">Contact Us</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="m-0">
                                            For inquiry email <span className="text-primary fw-bold">info@twofailures.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Store button */}
                        <a href="https://store.twofailures.com" className="btn btn-blue text-white py-0 btn-sm rounded-3" target="_blank">
                            <i className="bi bi-cart3 m-0"></i>
                            <span className="d-lg-inline-block d-none"> &nbsp;Shop</span>

                        </a>
                    </div>
                </div>
            </nav>

            <main className={navigation.state === "loading" ? "loading mt-2" : "mt-5"}>
                <Outlet />
            </main>

            <footer className="bg-body-tertiary border-top py-5">
                <div className="container w-34 text-center">
                    <h3 className="text-gold fw-bold font-cursive fs-5">Subscribe To Receive New Episodes!</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-1">
                        <div className="input-group rounded-0 mb-2">
                            <input type="email" className="form-control py-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                                {...register("email", { required: true })} style={{ border: '2px solid #D1D6D8', borderRadius: '5px' }} placeholder="valid@email.com"
                            />
                        </div>

                        <center>
                            <ReCAPTCHA
                                sitekey="6LcBvBUpAAAAALk3kyU9iELAVYIM0gJuGmV7urJ3"
                                onChange={onChange}
                            />
                        </center>

                        <button className="btn btn-blue text-white w-100 rounded-1 py-3 fs-6 mt-2 font-cursive" type="submit"
                            disabled={isSubmitting || !isCaptchaVerified}
                        >
                            {isSubmitting ? (<span className="loading-text">processing</span>) : "SUBSCRIBE"}
                        </button>
                    </form>
                </div>

                <div className="container mt-5 border-top border-3 py-5">
                    <h4 className="font-cursive fs-5">Follow Us On</h4>
                    <p>
                        <a href="https://www.instagram.com/2failures/" target="_blank" className="text-decoration-none">
                            <i className="bi bi-instagram"></i> {" "}
                            <span className="text-dark fw-semibold">Instagram</span>
                        </a> | {" "}
                        <a href="https://www.facebook.com/TwoFailures" target="_blank" className="text-decoration-none">
                            <i className="bi bi-facebook"></i> {" "}
                            <span className="text-dark fw-semibold">Facebook</span>
                        </a> | {" "}
                        <a href="https://twitter.com/2Failures" target="_blank" className="text-decoration-none">
                            {/* <i className="bi bi-twitter-x"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x text-dark" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                            <span className="text-dark fw-semibold">(formerly twitter)</span>
                        </a>
                    </p>
                    <p className="m-0">
                        <small>
                            &copy; 2023, Two Failures • <Link to="/privacy-policy" className="text-decoration-none text-dark">Privacy Policy</Link> • <Link to="/cookie-policy" className="text-decoration-none text-dark">Cookie Policy</Link>
                        </small>
                    </p>
                </div>
            </footer>

            <LoginPop />

            {/* for loader */}
            {navigation.state === "loading" ?
                (<Loader text=". . ." />) : ""
            }
        </>
    )
}