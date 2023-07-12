import { Link, Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <>
            <header className="container">
                <nav className="d-flex space-btw">
                    <div>
                        <h1>
                            two failures
                        </h1>
                    </div>
                    <div className="nav-item">
                        <Link to={"#"}>
                            Shop <i className="bi bi-cart fs-1"></i>
                        </Link>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}
