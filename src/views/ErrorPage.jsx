import React from 'react'
import { useRouteError } from 'react-router';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <div className="container w-34 my-5 text-center">
                <p className='mt-5'>Something went wrong!</p>
                <p className='text-secondary fs-6 fw-light'>
                    <small>{error.statusText || error.message}</small>
                </p>
                <button className="err-btn" onClick={() => location.reload()}>
                    Reload
                </button>
            </div>
        </div>
    )
}
