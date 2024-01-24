import { Link, Outlet } from "react-router-dom";
import axiosClient from "../../../axios-client";

export async function loader() {
    const { data } = await axiosClient.get("/admin/adverts");
    const ads = data;
    return { ads };
}

export default function AdLayout() {
    return (
        <div className="container">
            <div className="section-header mt-5">
                <h3 className="fw-bold">Manage Adverts</h3>
                <div>
                    <Link to={"create"} className="btn btn-dark rounded-1">
                        Create Advert
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
