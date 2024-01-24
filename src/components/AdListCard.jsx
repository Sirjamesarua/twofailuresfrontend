import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

export default function AdListCard({ ad }) {
    const navigate = useNavigate();
    const onDelete = async () => {
        if (window.confirm(`Are you sure you want to delete ${ad.name}?`)) {
            await axiosClient.delete(`/admin/adverts/${ad.id}`)
                .then(() => {
                    navigate("/admin/adverts");
                    alert("Deleted!")
                })
                .catch(() => alert("Something went wrong!"));
        }
        return;
    };
    return (
        <div className="shadow-sm border mb-2 p-2 rounded-1 bg-body-tertiary">
            <div to={`${ad.id}/show`}>
                <div className="content">
                    <h4 className='m-0'>{ad.name}</h4>
                    <div>
                        <i>
                            {ad.link.length > 45 ?
                                `${ad.link.substring(0, 40)}...` :
                                ad.link
                            }
                        </i>
                    </div>
                </div>
            </div>

            <hr />
            <button className="delete btn btn-danger btn-sm rounded-1 px-3 me-2" onClick={onDelete}>
                Delete
            </button>
            <Link className="delete btn btn-dark btn-sm rounded-1 px-3" to={`${ad.id}/show`}>
                Edit
            </Link>
        </div>
    )
}
