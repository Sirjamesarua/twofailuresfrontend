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
            <div className="section-header mb-1">
                <h3>Manage Episodes</h3>
                <div>
                    <Link to={"create"}>
                        <button className="p-1">Create Episode</button>
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
