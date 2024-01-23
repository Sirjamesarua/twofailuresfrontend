import React from 'react'
import ScrollToTop from '../../components/ScrollToTop';
import image from "../../assets/ambassador-merch.webp"

export default function AmbHome() {
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
                                    <h3 className='fw-bold color-blue fs-1'>01.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus eligendi vitae aliquid nostrum dolores sed ad asperiores minus dignissimos!
                                </div>
                                <div className="col-md-4 mb-4">
                                    <h3 className='fw-bold color-blue fs-1'>02.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus eligendi vitae aliquid nostrum dolores sed ad asperiores minus dignissimos!
                                </div>
                                <div className="col-md-4 mb-4">
                                    <h3 className='fw-bold color-blue fs-1'>03.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus eligendi vitae aliquid nostrum dolores sed ad asperiores minus dignissimos!
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn-blue d-block rounded-2 text-white mx-auto px-4 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Become an Ambassador
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="modal-title fs-5 fw-bold" id="exampleModalLabel">SIGN UP</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="" method="post">
                                            <div class="mb-3">
                                                <input type="text" class="form-control py-2 rounded-1" id="formGroupExampleInput" placeholder="Full Name" />
                                            </div>
                                            <div class="mb-3">
                                                <input type="email" class="form-control py-2 rounded-1" id="formGroupExampleInput2" placeholder="Email Address" />
                                            </div>
                                            <button className="btn btn-dark w-100 rounded-1">
                                                SIGN UP
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-body-tertiary shadow-sm my-5">
                <div className="py-5 container">
                    <h1 className='text-center'>
                        How It Works
                    </h1>

                    <div className='mt-5'>
                        <div className="row justify-content-center gap-5">
                            <div className="col-md-4 mb-4">
                                <img src={image} alt="..." className='image-fluid img-thumbnail w-100 shadow-sm' />
                            </div>
                            <div className="col-md-4 mb-4">
                                <h3 className='fw-bold fs-5 mb-2'>Lorem ipsum dolor sit.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus
                                </p>
                                <h3 className='fw-bold fs-5 mb-2'>Lorem ipsum dolor sit.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus
                                </p>
                                <h3 className='fw-bold fs-5 mb-2'>Lorem ipsum dolor sit.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus
                                </p>
                                <h3 className='fw-bold fs-5 mb-2'>Lorem ipsum dolor sit.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus
                                </p>
                                <h3 className='fw-bold fs-5 mb-2'>Lorem ipsum dolor sit.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus
                                </p>
                                <button type="button" className="btn-blue rounded-2 text-white px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="py-4">
                    <h1>Whats in the package</h1>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam veritatis ipsam. Vero, similique. Voluptas id fugit quibusdam quaerat qui blanditiis! Esse, explicabo? Earum modi
                            doloribus id obcaecati eligendi autem error, animi ducimus repellat vero a, maxime expedita dignissimos architecto dolor porro nulla sint hic nihil, alias similique ut! Voluptatem?
                        </p>

                        <div className="row mt-5 mb-4">
                            <div className="col-md-4 mb-4">
                                <h3 className='fw-bold color-blue fs-1'>01.</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus eligendi vitae aliquid nostrum dolores sed ad asperiores minus dignissimos!
                            </div>
                            <div className="col-md-4 mb-4">
                                <h3 className='fw-bold color-blue fs-1'>02.</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus eligendi vitae aliquid nostrum dolores sed ad asperiores minus dignissimos!
                            </div>
                            <div className="col-md-4 mb-4">
                                <h3 className='fw-bold color-blue fs-1'>03.</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus eligendi vitae aliquid nostrum dolores sed ad asperiores minus dignissimos!
                            </div>
                        </div>

                        <button type="button" className="btn-blue rounded-2 text-white px-4 py-2 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Become an Ambassador
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}
