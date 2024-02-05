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

    /**
     * Format episode description.
     * Sends back a default text if no description
     * 
     * @param {string} data 
     * @returns string 
     */
    const description = (data) => {
        let description;
        if (data && data.length > 2) {
            description = data.length > 40 ? data.substring(0, 40) : data;
            return description;
        }
        return "No description";
    };

    return (
        <div className="shadow-sm border mb-2 p-2 rounded-1 bg-body-tertiary">
            <div className="text-decoration-none">
                <div className="content">
                    <h4 className="m-0">{detail.title}</h4>
                    <div>
                        <i>
                            {description(detail.description)}
                            {/* {detail.description?.length > 45 ?
                                `${detail.description.substring(0, 40)}...` :
                                detail.description
                            } */}
                        </i>
                    </div>
                </div>
            </div>
            <hr />
            <button className="delete btn btn-danger btn-sm rounded-1 px-3 me-2" onClick={onDelete}>
                Delete
            </button>
            <Link className="delete btn btn-dark btn-sm rounded-1 px-3" to={`${detail.id}/show`}>
                Edit
            </Link>
        </div>
    )
}
