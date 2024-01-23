import { Link, NavLink, Navigate, Outlet, useNavigation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";

export async function loader() {
    // const { data } = await axiosClient.get('/');
    return null;
}

export default function AmbassadorLayout() {
    const navigation = useNavigation();
    const { ambToken, setAmbassador, putAmbToken } = useStateContext();

    const logout = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post('/ambassador/logout')
                .then(() => {
                    putAmbToken("");
                    setAmbassador("");
                    window.location.href = "/ambassador/program";
                });
        } catch (error) {
            throw error;
        }
    }


    if (!ambToken) {
        // return <Navigate to={"/ambassador/program"} />
    }

    return (
        <div>
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
                    <main className={navigation.state === "loading" ? "loading mt-2" : "mt-2"}>
                        <Outlet />
                    </main>
                </section>
            </div>
        </div>
    )
}
