import React, { useEffect, useRef, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
// import bootstrap from 'bootstrap';

export default function AmbDashboard() {
    const { ambassador, leaderboard, referrals } = useLoaderData();
    const refLink = useRef(null);
    const [click, setClick] = useState(false);
    const [has, setHas] = useState(true);

    console.log(ambassador);

    const copyLink = () => {
        let copyText = document.getElementById("myInput");
        let btnTxt = document.getElementById("cp");
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        setClick(true);
        btnTxt.innerText = "Copied";
    }

    const rewardFlash = () => {
        console.log("yes");
    }

    const has100 = () => {
        if (referrals.length == 0) {
            rewardFlash();
        }
        return null
    }

    useEffect(() => {
        has100();
    }, [])

    return (
        <div>
            <div className="container">
                <div className="my-4">
                    <h4 className="text-danger fs-2 fw-bold">
                        Dashboard
                    </h4>
                    <p>
                        Welcome {ambassador.fullname}
                    </p>
                    <div className="my-3">
                    </div>
                </div>

                <section className="mb-5">
                    <div className="row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card shadow-sm h-100 bg-body-tertiary">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-danger m-0 fs-6">
                                        Referral Link
                                    </h5>
                                    <p className="card-text mb-1" ref={refLink}>
                                        <small className='m-0'>www.twofailures.com/?ref=</small><br />
                                        <b className="fs-4">{ambassador.referral_code}</b>
                                    </p>

                                    <input type="text" className='d-none' value={`www.twofailures.com/?ref=${ambassador.referral_code}`} id="myInput"></input>

                                    <button onClick={copyLink} disabled={click}
                                        className="btn btn-danger btn-sm  rounded-1 fw-semibold px-4">
                                        <span id="cp"> Copy to clipboard</span> <i className="bi bi-clipboard-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card shadow-sm h-100 bg-body-tertiary">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-danger m-0 fs-6">
                                        Total Referrals
                                    </h5>
                                    <p className="card-text mb-1">
                                        <b className="fs-4">{referrals.length}</b> referrals
                                    </p>
                                </div>
                            </div>

                        </div>

                        {!has &&
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <div className="card shadow-sm h-100 bg-body-tertiary">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-danger m-0 fs-6">
                                            Referrals Rewards
                                        </h5>
                                        <p className="card-text mb-1">
                                            <b className="fs-4">{referrals.length}/100</b> referrals
                                        </p>
                                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: "5%" }}></div>
                                        </div>
                                        <small>
                                            When you refer 100, you get a reward.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        }

                        {has &&
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <div className="card shadow-sm h-100 bg-danger">
                                    <div className="card-body">
                                        <h5 className="card-title fw-light text-white m-0 fs-6">
                                            Congratulations! 🎉
                                        </h5>
                                        <p className="card-text text-white fw-bold m-0 fs-1">
                                            100
                                        </p>
                                        <p className='text-warning fw-semibold'>
                                            You've successfully referred 100 <br />
                                        </p>
                                        <button className="btn btn btn-light btn-sm rounded-1" onClick={() => setHas(x => !x)}>
                                            Reset Challenge
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </section>

                <section className='mb-5'>
                    <div className='border rounded-2 shadow-sm p-3'>
                        <h5 className='fw-bold text-danger'>Leaderboard</h5>
                        <ul className="list-group">
                            {leaderboard.length > 0 ? (
                                leaderboard.map((item, index) => (
                                    <li className="list-group-item" key={index}>
                                        {`${index + 1} | ${item.fullname} `}
                                        <small className="bg-danger text-white px-2 rounded-3">
                                            {item.referree_count} referral(s)
                                        </small>
                                    </li>
                                ))
                            ) : (
                                <li className="list-group-item" key="noData">
                                    Nothing to show
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
