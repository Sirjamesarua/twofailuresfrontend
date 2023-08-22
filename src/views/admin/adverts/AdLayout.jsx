import { Link, Outlet } from "react-router-dom";

export default function AdLayout() {
    return (
        <div className="container">
            <div className="section-header mb-1">
                <h3>Manage Adverts</h3>
                <div>
                    <Link to={"create"}>
                        <button className="p-1">Create Ad</button>
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
