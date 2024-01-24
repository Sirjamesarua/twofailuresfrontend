import { Link, Outlet } from "react-router-dom";
import axiosClient from "../../../axios-client";

export async function loader() {
    const { data } = await axiosClient.get("/admin/episodes");
    const episodes = data;
    return { episodes };
}

export default function EpLayout() {
    return (
        <div className="container">
            <div className="section-header mt-5">
                <h3>Manage Episodes</h3>
                <div>
                    <Link to={"create"} className="btn btn-dark rounded-1">
                        Create Episode
                    </Link>
                </div>
            </div>

            <hr />

            <div>
                <Outlet />
            </div>
        </div>
    )
}
