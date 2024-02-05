import { Link, Outlet, useLocation } from "react-router-dom";
import axiosClient from "../../../axios-client";

export async function loader() {
    const { data } = await axiosClient.get("/admin/episodes");
    const episodes = data;
    return { episodes };
}

export default function EpLayout() {
    const location = useLocation();

    return (
        <div className="container">
            <div className="section-header mt-5">
                <h3>Manage Episodes</h3>
                <div>
                    {location.pathname === "/admin/episodes/create" ?
                        (<Link to={"/admin/dashboard"} className="btn btn-dark rounded-1">
                            Go to Dasboard
                        </Link>) :
                        (<Link to={"create"} className="btn btn-dark rounded-1">
                            Create Episode
                        </Link>)
                    }
                </div>
            </div>

            <hr />

            <div>
                <Outlet />
            </div>
        </div>
    )
}
