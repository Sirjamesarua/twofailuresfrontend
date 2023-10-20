import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import PopupCard from "../components/PopupCard";
import logo from "../assets/twofailures_logo.png";
import sideImg from "../assets/side-img.png"
import React, { useState } from "react";
import Loader from "../components/Loader";
import Otp from "../components/Otp";

export default function GuestLayout() {
    const location = useLocation();
    const navigation = useNavigation();
    const [pop, setPop] = useState("");

    const about = {
        title: "About",
        content: `Tag and Simi are two best friends who have one thing in common: they are
        failures.They work as maintenance workers in the female dorm of a prestigious
        university, where they hope to find some romance and adventure, but their plans
        always backfire, and they end up in awkward and embarrassing situations.
        Follow their hilarious misadventures as they try to deal with their daily struggles
        with humor and optimism.`
    }

    const contact = {
        title: "Contact Us",
        content: "For inquiry email info@twofailures.com"
    };

    // Updater function in PopupCard component
    const updatePop = (newPop) => {
        setPop(newPop);
    }

    // Changes the POP state which is used in line 82
    const handlePop = (ev) => {
        let value = ev.target.parentNode.id; //checks the id of the element clicked
        setPop(value);
    }

    return (
        <>
            <header>
                <nav className="d-flex space-btw container">
                    <div>
                        <h1>
                            <Link to={"/"}>
                                <img src={logo} alt="tf_logo" id="logo" />
                                <img src={sideImg} alt="them" id="side-img" />
                            </Link>
                        </h1>
                    </div>

                    <div className="nav-items">
                        <span onClick={(ev) => handlePop(ev)} id="about">
                            <i className="bi bi-chat-quote"></i> {" "}
                            <span className="nav-text">About</span>
                        </span>
                        &nbsp;
                        <span onClick={(ev) => handlePop(ev)} id="contact">
                            <i className="bi bi-telephone-forward"></i> {" "}
                            <span className="nav-text">Contact</span>
                        </span>
                        &nbsp;
                        <span onClick={() => window.location = "https://store.twofailures.com"}>
                            <i className="bi bi-cart3"></i> {" "}
                            <span className="nav-text">Shop</span>
                        </span>
                    </div>
                </nav>
            </header>

            <main className={navigation.state === "loading" ? "loading mt-2" : "mt-2"}>
                <Outlet />
            </main>

            <footer className="container">
                <div>
                    <h4>Follow Us On</h4>
                    <p>
                        <a href="https://www.instagram.com/2failures/" target="_blank">
                            <i className="bi bi-instagram"></i> Instagram
                        </a> | {" "}
                        <a href="https://www.facebook.com/TwoFailures" target="_blank">
                            <i className="bi bi-facebook"></i> Facebook
                        </a> | {" "}
                        <a href="https://twitter.com/2Failures" target="_blank">
                            <i className="bi bi-twitter"></i> X
                        </a>
                    </p>
                </div>
                <div>
                    <p className="m-0">
                        <small>
                            &copy; 2023, Two Failures • <Link to="/privacy-policy">privacy policy</Link> • <Link to="/cookie-policy">cookie policy</Link>
                        </small>
                    </p>
                </div>
            </footer>
            {/* Active if user is not logged in */}
            {location.hash === "#login" && (<LoginPop />)}
            {location.hash === "#verify-email" && (<Otp />)}

            {/* For page pop ups */}
            {pop === "about" ? (<PopupCard content={about} newUpdatePop={updatePop} />) :
                pop === "contact" ? (<PopupCard content={contact} newUpdatePop={updatePop} />) :
                    ""
            }

            {/* for loader */}
            {navigation.state === "loading" ?
                (<Loader text="episode" />) : ""
            }
        </>
    )
}