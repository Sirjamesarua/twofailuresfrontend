import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../axios-client';

export default function AmbLogin() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();;
    const { ambToken, putAmbToken } = useStateContext();

    const onSubmit = async (data) => {
        // console.log(data);
        // return
        await axiosClient.post('', data)
            .then(({ data }) => {
                console.log(data);
            }).catch((error) => {
                throw error;
            })
    }

    if (ambToken) {
        return <Navigate to={"/ambassador/dashboard"} />
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-lg-3 mt-4 mb-5 container">
                    <div className="fw-bold my-3">
                        <span className="text-dark">Ambassador Login</span> | <span className="fw-light">Welcome Back! 😃</span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="row g-1 animated-2 fadeIn">

                        <div className="form-floating mb-1">
                            <input type="email" name="email" className="form-control rounded-1 border-dark border-1"
                                id="email" placeholder="doe@example.com" {...register("email")} />
                            <label htmlFor="email" className="fw-bold">Email Address</label>
                        </div>


                        <div className="col-12 mt-2">
                            <button type="submit" className="err-btn rounded-1 shadow-sm text-uppercase py-3 fs-6 w-100">
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
