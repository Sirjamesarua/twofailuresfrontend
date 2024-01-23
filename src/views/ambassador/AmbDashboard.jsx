import React from 'react'

export default function AmbDashboard() {
    return (
        <div>
            <div class="container">
                <div class="my-4">
                    <h4 class="text-secondary fs-2 fw-bold">
                        Dashboard
                    </h4>
                    <p>
                        Welcome Etinosa
                    </p>
                    <div class="my-3">
                    </div>
                </div>

                <section class="mb-5">
                    <div class="row">
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-secondary m-0 fs-6">
                                        Article Repository
                                    </h5>
                                    <p class="card-text mb-1">
                                        <b class="fs-4">3 article(s)</b> published
                                    </p>
                                    <a href="#"
                                        class="btn btn-secondary rounded-1 fw-semibold px-4">
                                        Go to articles
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-secondary m-0 fs-6">
                                        Manage Slices
                                    </h5>
                                    <p class="card-text mb-1">
                                        <b class="fs-4">3 slice(s)</b> published
                                    </p>
                                    <a href="#" class="btn btn-secondary rounded-1 fw-semibold px-4">
                                        Go to slices
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-secondary m-0 fs-6">
                                        OweaHub Teams
                                    </h5>
                                    <p class="card-text mb-1">
                                        <b class="fs-4">5 teams</b> active
                                    </p>
                                    <a href="#" class="btn btn-secondary rounded-1 fw-semibold px-4">
                                        See Teams
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-5">
                    <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <div class="card shadow-sm bg-theme">
                                <div class="card-body">
                                    <div class="d-flex justify-content-around">
                                        <div class="px-4">
                                            <h5 class="card-title fs-6 color-blue m-0">Verified Users</h5>
                                            <p class="card-text m-0 text-dark">
                                                <span class="fs-1 fw-bold">0</span>users
                                            </p>
                                        </div>
                                        <div class="px-4 border-start">
                                            <h5 class="card-title fs-6 color-blue m-0">Unverified Users</h5>
                                            <p class="card-text m-0 text-dark">
                                                <span class="fs-1 fw-bold">0</span>users
                                            </p>
                                        </div>
                                        <div class="px-4 border-start">
                                            <h5 class="card-title fs-6 color-blue m-0">All Users</h5>
                                            <p class="card-text m-0 text-dark">
                                                <span class="fs-1 fw-bold">0</span>users
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card shadow-sm bg-dark">
                                <div class="card-body">
                                    <div class="d-flex justify-content-around">
                                        <div class="px-4">
                                            <h5 class="card-title fs-6 color-blue m-0">Verified Mentors</h5>
                                            <p class="card-text m-0 text-white">
                                                <span class="fs-1 fw-bold">0</span>mentors
                                            </p>
                                        </div>
                                        <div class="px-4 border-start">
                                            <h5 class="card-title fs-6 color-blue m-0">Unverified Mentors</h5>
                                            <p class="card-text m-0 text-white">
                                                <span class="fs-1 fw-bold">0</span>mentors
                                            </p>
                                        </div>
                                        <div class="px-4 border-start">
                                            <h5 class="card-title fs-6 color-blue m-0">All Mentors</h5>
                                            <p class="card-text m-0 text-white">
                                                <span class="fs-1 fw-bold">0</span>metnors
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
