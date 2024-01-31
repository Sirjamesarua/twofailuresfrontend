import { Link, NavLink, Navigate, Outlet, useNavigation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";
import logo from "../assets/twofailures_logo.png";
import sideImg from "../assets/side-img.png"



export async function loader() {
    // Fetch user details
    const loc_data = localStorage.getItem('tf_amb');
    const ambassador = JSON.parse(loc_data);

    // Fetch leader board details
    const boardData = await axiosClient.get('/ambassador/scoreboard');
    const leaderboard = boardData.data;

    // Get referral count
    const refData = await axiosClient.get(`/ambassador/referrals?email=${ambassador.email}`);
    const referrals = refData.data;

    return { ambassador, leaderboard, referrals };
}

export default function AmbassadorLayout() {
    const navigation = useNavigation();
    const { ambToken, putAmb, putAmbToken } = useStateContext();

    const logout = async (e) => {
        e.preventDefault();
        try {
            putAmbToken("");
            putAmb("");
            location.href = "/ambassador/program";
        } catch (error) {
            throw error;
        }
    }

    if (!ambToken) {
        return <Navigate to={"/ambassador/program"} />
    }

    return (
        <div>
            <div className="admin-layout">
                <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm py-0">
                    <div className="container">
                        <Link to={"/"} className="me-5">
                            <img src={logo} alt="tf_logo" id="logo" />
                            <img src={sideImg} alt="them" id="side-img" style={{ position: "relative", top: "5px" }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li> */}
                            </ul>

                            <Link to={"#logout"} onClick={logout} className="navbar-text fw-bold fs-5 text-decoration-none border px-2 py-0 alert alert-danger rounded-1 m-0">
                                <small className="font-monospace">LOGOUT</small>
                            </Link>
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
