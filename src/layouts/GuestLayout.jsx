import { Link, Outlet, useLocation } from "react-router-dom";
import LoginPop from "../components/LoginPop"
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
    const location = useLocation();
    const { } = useStateContext();
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
                        <Link to={"#"}>
                            About <i className="bi bi-person-lines-fill"></i>
                        </Link>
                        <Link to={"#"}>
                            Contact <i className="bi bi-megaphone"></i>
                        </Link>
                        <Link to={"#"}>
                            Shop <i className="bi bi-cart fs-1"></i>
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="mt-2">
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
            {location.hash === "#login" && <LoginPop />}
        </>
    )
}
