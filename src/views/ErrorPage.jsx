import React from 'react'

export default function ErrorPage() {
    return (
        <div>
            <div className="container mt-2 text-center">
                <p>Error Occured</p>
                <button className="err-btn" onClick={() => window.location.reload()}>
                    Reload
                </button>
            </div>
        </div>
    )
}
