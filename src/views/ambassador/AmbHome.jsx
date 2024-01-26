import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop';
import image from "../../assets/ambassador-merch.png"
import { useForm } from 'react-hook-form';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';
import ReCAPTCHA from 'react-google-recaptcha';

export default function AmbHome() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const { putAmb, putAmbToken } = useStateContext();
    const [err, setErr] = useState("");
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);


    const onSubmit = async (data) => {
        setErr("");
        await axiosClient.post('/ambassador/register', data)
            .then(({ data }) => {
                console.log(data);
                putAmbToken(data.access_token);
                putAmb(data.ambassador);
                window.location.href = "/ambassador/dashboard";
            }).catch(({ response }) => {
                setErr(response.data.message)
                console.log(response);
            })
    }

    const onChange = () => {
        // console.log("Captcha value:", value);
        setIsCaptchaVerified(true);
    }

    return (
        <div>
            <ScrollToTop />
            <section className="container">
                <div className="py-4 text-center">
                    <h1 className='mb-5'>
                        Why Become an Ambassador
                    </h1>

                    <div>
                        <div className='mb-4'>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <h3 className='fw-bold text-danger fs-1'>01.</h3>
                                    You get free merch when you refer your friends <br />to read Two Failures
                                </div>
                                <div className="col-md-4 mb-4">
                                    <h3 className='fw-bold text-danger fs-1'>02.</h3>
                                    You get exclusive access <br />to the creator
                                </div>
                                <div className="col-md-4 mb-4">
                                    <h3 className='fw-bold text-danger fs-1'>03.</h3>
                                    You'll have the opportunity to publish <br /> a fan episode
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-danger fw-bold d-block rounded-1 text-white mx-auto px-4 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Become an Ambassador
                        </button>
                        <small>Exculsive to US and Canadian residents</small>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Become an Ambassador</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className='text-start text-danger mb-1'>
                                                {err}
                                            </p>
                                            <div className="mb-3">
                                                <input type="text" className="form-control border-secondary py-3 rounded-1" id="formGroupExampleInput" placeholder="Full Name" required
                                                    {...register("fullname")}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" className="form-control border-secondary py-3 rounded-1" id="formGroupExampleInput2" placeholder="Email Address" required
                                                    {...register("email")}
                                                />
                                            </div>

                                            <center>
                                                <ReCAPTCHA sitekey="6LcBvBUpAAAAALk3kyU9iELAVYIM0gJuGmV7urJ3" onChange={onChange} />
                                            </center>

                                            <button className="btn btn-danger text-white py-3 mt-3 w-100 rounded-1" disabled={isSubmitting || !isCaptchaVerified}>
                                                {isSubmitting ? (<span className="loading-text">PROCESSING</span>) : "SIGN UP"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-body-tertiary shadow-sm mt-5">
                <div className="py-5 container">
                    <h1 className='text-center'>
                        How It Works
                    </h1>

                    <div className='mt-5'>
                        <div className="row justify-content-center gap-5">
                            <div className="col-md-4 mb-4">
                                <img src={image} alt="..." className='image-fluid img-thumbnail w-100 shadow' />
                            </div>
                            <div className="col-md-4 mb-4">
                                <h3 className='fw-bold fs-5 mb-2'>Create Account</h3>
                                <p>
                                    Sign up to become a Two Failures Ambassador
                                </p>
                                <h3 className='fw-bold fs-5 mb-2'>Share Referral Link
                                    .</h3>
                                <p>
                                    Win free merch Everytime you refer atleast a hundred people
                                </p>
                                <h3 className='fw-bold fs-5 mb-2'>Get Your Free Merch
                                </h3>
                                <p>
                                    We'll contact you to send you your free Merch.
                                </p>
                                <button type="button" className="btn btn-danger fw-bold rounded-1 text-white px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Join Now
                                </button><br />
                                <small>Exculsive to US and Canadian residents</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
