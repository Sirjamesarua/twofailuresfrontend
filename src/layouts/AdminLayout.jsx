import { Link, NavLink, Navigate, Outlet, useNavigation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";

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
                    <Link to={"#logout"} onClick={logout}>
                        <i className="bi bi-x-octagon"></i> <span>Log Out</span>
                    </Link>
                </aside>

                <main className={navigation.state === "loading" ? "loading mt-2" : "mt-2"}>
                    <Outlet />
                </main>
            </section>
        </div>
    )
}
