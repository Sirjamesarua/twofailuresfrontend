import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../axios-client';
import ScrollToTop from '../../components/ScrollToTop';

export default function AmbLogin() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();;
    const { ambToken, putAmbToken, putAmb } = useStateContext();
    const [err, setErr] = useState("");

    const onSubmit = async (data) => {
        setErr("")
        await axiosClient.post('/ambassador/login', data)
            .then(({ data }) => {

                putAmbToken(data.access_token);
                putAmb(data.ambassador);
                window.location.href = "/ambassador/dashboard";
            }).catch((error) => {
                const msg = error.response?.data?.message ?? "Something went wrong!"
                setErr(msg)
            })
    }

    if (ambToken) {
        return <Navigate to={"/ambassador/dashboard"} />
    }

    return (
        <div>
            <ScrollToTop />
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-lg-3 mt-4 mb-5 container">
                    <div className="fw-bold my-3 fs-4">
                        <span className="color-blue font-cursive">Ambassador Login</span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="row g-1 animated-2 fadeIn">
                        <p className="text-danger fs-6 m-0">
                            {err}
                        </p>
                        <div className="form-floating mb-1">
                            <input type="email" name="email" className="form-control rounded-1 border-dark border-1"
                                id="email" placeholder="doe@example.com" {...register("email")} />
                            <label htmlFor="email" className="fw-bold">Email Address</label>
                        </div>

                        <div className="col-12 mt-2">
                            <button type="submit" className="btn btn-danger rounded-1 shadow-sm text-uppercase py-3 fs-6 w-100">
                                {isSubmitting ? (<span className="loading-text">processing</span>) : "login"}
                            </button>
                        </div>

                        <div>
                            <small>
                                Don't have an account? {" "}
                                <Link to={"/ambassador/program"} className="fw-semibold">
                                    Sign Up
                                </Link>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
