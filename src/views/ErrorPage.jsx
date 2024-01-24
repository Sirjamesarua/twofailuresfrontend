import React from 'react'
import { useRouteError } from 'react-router';

export default function ErrorPage() {
    const error = useRouteError();
    // useRouteError
    console.log(error);

    return (
        <div>
            <div className="container w-34 my-5 text-center">
                <p>Error Occured</p>
                <p className='text-secondary'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <button className="err-btn" onClick={() => window.location.reload()}>
                    Reload
                </button>
            </div>
        </div>
    )
}
