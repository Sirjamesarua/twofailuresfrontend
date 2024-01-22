import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import PopupCard from "../components/PopupCard";
import logo from "../assets/twofailures_logo.png";
import sideImg from "../assets/side-img.png"
import React, { useState } from "react";
import Loader from "../components/Loader";
import Otp from "../components/Otp";
import { useForm } from "react-hook-form";
import axiosClient from "../axios-client";
import ReCAPTCHA from "react-google-recaptcha";


export default function GuestLayout() {
    const location = useLocation();
    const navigation = useNavigation();
    const [pop, setPop] = useState("");
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    // Updater function in PopupCard component
    const updatePop = (newPop) => {
        setPop(newPop);
    }

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
            <nav class="navbar bg-body-tertiary shadow-sm">
                <div class="container">
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
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#aboutUs">
                            <i className="bi bi-chat-quote"></i> {" "} About
                        </button>
                        <div class="modal fade" id="aboutUs" tabindex="-1" aria-labelledby="aboutUsLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="aboutUsLabel">About Us - Two Failures</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
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
                        <button type="button" class="btn btn-primary btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#contactUs">
                            <i className="bi bi-telephone-forward"></i> {" "}Contact
                        </button>
                        <div class="modal fade" id="contactUs" tabindex="-1" aria-labelledby="contactUsLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="contactUsLabel">Contact Us</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p className="m-0">
                                            For inquiry email <span className="text-primary fw-bold">info@twofailures.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Store button */}
                        <a href="https://store.twofailures.com" className="btn btn-dark btn-sm" target="_blank">
                            <i className="bi bi-cart3"></i> {" "}Shop
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
                        <div class="input-group input-group-lg rounded-0 mb-2">
                            <span class="input-group-text rounded-0" id="inputGroup-sizing-lg">Email</span>
                            <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                                {...register("email", { required: true })} style={{ border: '2px solid #D1D6D8', borderRadius: '5px' }} placeholder="valid@email.com"
                            />
                        </div>

                        <center>
                            <ReCAPTCHA
                                sitekey="6LcBvBUpAAAAALk3kyU9iELAVYIM0gJuGmV7urJ3"
                                onChange={onChange}
                            />
                        </center>

                        <button className="btn btn-dark w-100 rounded-1 py-2 fs-4 mt-2 font-cursive" type="submit"
                            disabled={isSubmitting || !isCaptchaVerified}
                        >
                            {isSubmitting ? (<span className="loading-text">processing</span>) : "Subscribe"}

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
                            <i className="bi bi-twitter"></i>
                            <span className="text-dark fw-semibold">X (formerly twitter)</span>
                        </a>
                    </p>
                    <p className="m-0">
                        <small>
                            &copy; 2023, Two Failures • <Link to="/privacy-policy">Privacy Policy</Link> • <Link to="/cookie-policy">Cookie Policy</Link>
                        </small>
                    </p>
                </div>
            </footer>

            {/* Active if user is not logged in */}
            {location.hash === "#login" && (<LoginPop />)}
            {location.hash === "#verify-email" && (<Otp />)}

            {/* For page pop ups */}
            {/* {pop === "about" ? (<PopupCard content={about} newUpdatePop={updatePop} />) :
                pop === "contact" ? (<PopupCard content={contact} newUpdatePop={updatePop} />) :
                    ""
            } */}

            {/* for loader */}
            {navigation.state === "loading" ?
                (<Loader text="episode" />) : ""
            }
        </>
    )
}