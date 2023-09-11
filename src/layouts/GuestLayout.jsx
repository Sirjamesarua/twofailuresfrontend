import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import PopupCard from "../components/PopupCard";
import logo from "../assets/twofailures_logo.png";
import sideImg from "../assets/side-img.png"
import React, { useState } from "react";

export default function GuestLayout() {
    const location = useLocation();
    const navigation = useNavigation();
    const [pop, setPop] = useState("");

    const about = {
        title: "About",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti pariatur ab et quos minima maxime ipsum? In, quidem eaque."
    }

    const contact = {
        title: "Contact Us",
        content: "08182843535"
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
                            <i className="bi bi-chat-square-fill"></i>
                            <span className="nav-text">About</span>
                        </span>
                        &nbsp;
                        <span onClick={(ev) => handlePop(ev)} id="contact">
                            <i className="bi bi-megaphone-fill"></i>
                            <span className="nav-text">Contact</span>
                        </span>
                        &nbsp;
                        <span to={"#"}>
                            <i className="bi bi-cart-fill"></i>
                            <span className="nav-text">Shop</span>
                        </span>
                    </div>
                </nav>
            </header>

            <main className={navigation.state === "loading" ? "loading mt-2" : "mt-2"}>
                <Outlet />
            </main>

            <footer>
                <div className="text-center mt-3">
                    <h4>Follow Us On</h4>
                    <p>
                        <i className="bi bi-whatsapp"></i> WhatsApp - {" "}
                        <i className="bi bi-telegram"></i> Telegram - {" "}
                        <i className="bi bi-twitter"></i> Twitter
                    </p>
                </div>
            </footer>
            {/* Active if user is not logged in */}
            {location.hash === "#login" && (<LoginPop />)}

            {pop === "about" ? (<PopupCard content={about} newUpdatePop={updatePop} />) :
                pop === "contact" ? (<PopupCard content={contact} newUpdatePop={updatePop} />) :
                    ""
            }
        </>
    )
}