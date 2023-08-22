import { Link, Outlet } from "react-router-dom";

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
