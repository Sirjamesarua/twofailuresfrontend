import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";

export default function DetailsCard({ detail }) {
    const navigate = useNavigate();
    const onDelete = async () => {
        if (window.confirm(`Are you sure you want to delete ${detail.title}?`)) {
            await axiosClient.delete(`/admin/episodes/${detail.id}`)
                .then(() => {
                    navigate("/admin/episodes");
                    alert("Deleted!")
                })
                .catch(() => alert("Something went wrong!"));
        }
        return;
    };

    return (
        <div className="details-card">
            <Link to={`${detail.id}/show`}>
                <div className="content">
                    <h4>{detail.title}</h4>
                    <div>
                        <i>
                            {detail.description.length > 45 ?
                                `${detail.description.substring(0, 40)}...` :
                                detail.description
                            }
                        </i>
                    </div>
                </div>
            </Link>
            <button className="delete" onClick={onDelete}>
                Delete
            </button>
        </div>
    )
}
