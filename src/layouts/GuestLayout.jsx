import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import PopupCard from "../components/PopupCard";

export default function GuestLayout() {
    const location = useLocation();
    const navigation = useNavigation();

    const about = {
        title: "About",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti pariatur ab et quos minima maxime ipsum? In, quidem eaque."
    }

    const contact = {
        title: "Contact Us",
        content: "08182843535"
    }

    return (
        <>
            <header>
                <nav className="d-flex space-btw container">
                    <div>
                        <h1>
                            <Link to={"/"}>
                                two failures
                            </Link>
                        </h1>
                    </div>
                    <div className="nav-item">
                        <Link to={"/#about"}>
                            About
                            {/* <i className="bi bi-person-lines-fill"></i> */}
                        </Link>
                        <Link to={"/#contact"}>
                            Contact
                            {/* <i className="bi bi-megaphone"></i> */}
                        </Link>
                        <Link to={"#"}>
                            Shop
                            {/* <i className="bi bi-cart fs-1"></i> */}
                        </Link>
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
            {location.hash === "#about" ?
                (<PopupCard content={about} />) :
                location.hash === "#contact" ?
                    (<PopupCard content={contact} />) :
                    ""}
        </>
    )
}
