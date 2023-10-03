import React from 'react'

export default function ErrorPage() {
    // const error = useRouteError();
    // console.log(error);

    return (
        <div>
            <div className="container mt-2 text-center">
                <p>Error Occured</p>
                <p>
                    {/* <i>{error.statusText || error.message}</i> */}
                </p>
                <button className="err-btn" onClick={() => window.location.reload()}>
                    Reload
                </button>
            </div>
        </div>
    )
}
