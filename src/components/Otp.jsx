import React from 'react'
import Backdrop from './Backdrop';
import { useForm } from 'react-hook-form';
import { useStateContext } from '../context/ContextProvider';
import { useNavigate, Link } from 'react-router-dom';
import axiosClient from '../axios-client';

export default function Otp() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const { redirect, user } = useStateContext();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        data.email = user;
        await axiosClient.post('/verify-email', data)
            .then(() => {
                navigate(redirect);
            })
            .catch((error) => {
                alert("Something went wrong, \nTry Again!" + error.response);
            })
    }

    return (
        <Backdrop>
            <div className='form-container'>
                <div className="form-container">
                    <Link to={"/"}>
                        <button className='mb-1 btn-blue close-btn' type='button'>
                            close
                        </button>
                    </Link>
                    <h2>Verify Your Email</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-control">
                            <label htmlFor="otp">
                                <small>
                                    Please enter the OTP sent to your email address <br />
                                </small>

                                <small className="color-blue">
                                    Can't find email? Check your <b>spam/junk</b> folder
                                </small>
                            </label>
                            <br />
                            <br />
                            <input type="number" id="otp" {...register("otp", { required: true })} />
                        </div>

                        <div className="input-control">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (<span className="loading-text">verifying</span>) : "verify"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Backdrop>
    )
}
