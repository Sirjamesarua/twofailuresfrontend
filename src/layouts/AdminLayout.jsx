import { Link, NavLink, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function AdminLayout() {
    const { setAdmin, putAdminToken } = useStateContext();

    const logout = () => {
        localStorage.removeItem('tfa_token');
        putAdminToken("");
        setAdmin("");
        window.location.href = "/";
    }

    return (
        <div className="admin-layout">
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
                            Admin Panel
                        </Link>
                    </div>
                </nav>
            </header>

            <section className="">
                <aside className="side-nav">
                    {/* Used NavLink instead of Link to get active links for styling */}
                    <NavLink to={"dashboard"}
                        className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                        }>
                        <i className="bi bi-app-indicator"></i> <span>Dashboard</span>
                    </NavLink>

                    <NavLink to={"episodes"}
                        className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                        }>
                        <i className="bi bi-camera-reels"></i> <span>Episodes</span>
                    </NavLink>

                    <NavLink to={"adverts"}>
                        <i className="bi bi-cash"></i> <span>Adverts</span>
                    </NavLink>
                    <NavLink to={"logout"} onClick={logout}>
                        <i className="bi bi-x-octagon"></i> <span>Log Out</span>
                    </NavLink>
                </aside>

                <main className="mt-2">
                    <Outlet />
                </main>
            </section>

            {/* <footer>
                <div className="text-center mt-3">
                    <h4>Log Out</h4>
                </div>
            </footer> */}
        </div>
    )
}
