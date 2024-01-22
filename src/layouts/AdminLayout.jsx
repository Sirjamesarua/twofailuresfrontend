import { Link, NavLink, Navigate, Outlet, useNavigation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";

export async function loader() {
    const { data } = await axiosClient.get("/admin/get_view_count");
    const views = data;
    return { views };
}

export default function AdminLayout() {
    const navigation = useNavigation();
    const { adminToken, setAdmin, putAdminToken } = useStateContext();

    const logout = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post('admin/logout')
                .then(() => {
                    localStorage.removeItem('tfa_token');
                    putAdminToken("");
                    setAdmin("");
                    window.location.href = "/admin/login";
                });
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    }

    if (!adminToken) {
        return <Navigate to="/admin/login" />
    }

    return (
        <div className="admin-layout">
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">TwoFailures</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"dashboard"}>Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"episodes"}>Episodes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"adverts"}>Adverts</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Misc
                                </a>
                                <ul className="dropdown-menu">
                                    {/* <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li> */}
                                    <li>
                                        <Link to={"#logout"} onClick={logout} className="dropdown-item fw-bold text-danger fs-6">
                                            <small>Logout</small>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="">
                {/* <aside className="side-nav">
                    Used NavLink instead of Link to get active links for styling
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
                    <Link to={"#logout"} onClick={logout}>
                        <i className="bi bi-x-octagon"></i> <span>Log Out</span>
                    </Link>
                </aside> */}

                <main className={navigation.state === "loading" ? "loading mt-2" : "mt-2"}>
                    <Outlet />
                </main>
            </section>
        </div>
    )
}
