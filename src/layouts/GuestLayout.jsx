import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import PopupCard from "../components/PopupCard";
import logo from "../assets/twofailures_logo.png";
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
        let value = ev.target.innerText;
        console.log(value);
        setPop(value);
    }

    return (
        <>
            <header>
                <nav className="d-flex space-btw container">
                    <div>
                        <h1>
                            <Link to={"/"}>
                                <img src={logo} alt="tf_logo" />
                            </Link>
                        </h1>
                    </div>
                    <div className="nav-item">
                        <span onClick={(ev) => handlePop(ev)}>
                            About
                        </span>
                        <span onClick={(ev) => handlePop(ev)}>
                            Contact
                        </span>
                        <span to={"#"}>
                            Shop
                        </span>
                    </div>
                </nav>
            </header>

            <main className={navigation.state === "loading" ? "loading mt-2" : "mt-2"}>
                <Outlet />
            </main>

            <footer>
                <div className="text-center mt-3">
                    <h4>Follow Us on</h4>
                    <p>
                        <i className="bi bi-whatsapp"></i> WhatsApp - {" "}
                        <i className="bi bi-telegram"></i> Telegram - {" "}
                        <i className="bi bi-twitter"></i> Twitter
                    </p>
                </div>
            </footer>
            {/* Active if user is not logged in */}
            {location.hash === "#login" && (<LoginPop />)}

            {/* Navigation for user */}
            {/* {location.hash === "#about" ?
                (<PopupCard content={about} />) :
                location.hash === "#contact" ?
                    (<PopupCard content={contact} />) :
                    ""} */}

            {pop === "About" ?
                (<PopupCard content={about} newUpdatePop={updatePop} />) :
                pop === "Contact" ?
                    (<PopupCard content={contact} newUpdatePop={updatePop} />) :
                    ""
            }
        </>
    )
}
