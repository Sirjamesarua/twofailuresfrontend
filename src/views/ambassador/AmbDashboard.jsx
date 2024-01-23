import React from 'react'

export default function AmbDashboard() {
    return (
        <div>
            <div className="container">
                <div className="my-4">
                    <h4 className="text-secondary fs-2 fw-bold">
                        Dashboard
                    </h4>
                    <p>
                        Welcome Etinosa
                    </p>
                    <div className="my-3">
                    </div>
                </div>

                <section className="mb-5">
                    <div className="row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-secondary m-0 fs-6">
                                        Article Repository
                                    </h5>
                                    <p className="card-text mb-1">
                                        <b className="fs-4">3 article(s)</b> published
                                    </p>
                                    <a href="#"
                                        className="btn btn-secondary rounded-1 fw-semibold px-4">
                                        Go to articles
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-secondary m-0 fs-6">
                                        Manage Slices
                                    </h5>
                                    <p className="card-text mb-1">
                                        <b className="fs-4">3 slice(s)</b> published
                                    </p>
                                    <a href="#" className="btn btn-secondary rounded-1 fw-semibold px-4">
                                        Go to slices
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-secondary m-0 fs-6">
                                        OweaHub Teams
                                    </h5>
                                    <p className="card-text mb-1">
                                        <b className="fs-4">5 teams</b> active
                                    </p>
                                    <a href="#" className="btn btn-secondary rounded-1 fw-semibold px-4">
                                        See Teams
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card shadow-sm bg-theme">
                                <div className="card-body">
                                    <div className="d-flex justify-content-around">
                                        <div className="px-4">
                                            <h5 className="card-title fs-6 color-blue m-0">Verified Users</h5>
                                            <p className="card-text m-0 text-dark">
                                                <span className="fs-1 fw-bold">0</span>users
                                            </p>
                                        </div>
                                        <div className="px-4 border-start">
                                            <h5 className="card-title fs-6 color-blue m-0">Unverified Users</h5>
                                            <p className="card-text m-0 text-dark">
                                                <span className="fs-1 fw-bold">0</span>users
                                            </p>
                                        </div>
                                        <div className="px-4 border-start">
                                            <h5 className="card-title fs-6 color-blue m-0">All Users</h5>
                                            <p className="card-text m-0 text-dark">
                                                <span className="fs-1 fw-bold">0</span>users
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card shadow-sm bg-dark">
                                <div className="card-body">
                                    <div className="d-flex justify-content-around">
                                        <div className="px-4">
                                            <h5 className="card-title fs-6 color-blue m-0">Verified Mentors</h5>
                                            <p className="card-text m-0 text-white">
                                                <span className="fs-1 fw-bold">0</span>mentors
                                            </p>
                                        </div>
                                        <div className="px-4 border-start">
                                            <h5 className="card-title fs-6 color-blue m-0">Unverified Mentors</h5>
                                            <p className="card-text m-0 text-white">
                                                <span className="fs-1 fw-bold">0</span>mentors
                                            </p>
                                        </div>
                                        <div className="px-4 border-start">
                                            <h5 className="card-title fs-6 color-blue m-0">All Mentors</h5>
                                            <p className="card-text m-0 text-white">
                                                <span className="fs-1 fw-bold">0</span>metnors
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
