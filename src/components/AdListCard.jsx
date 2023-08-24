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
        <div className="ad-list-card">
            <Link to={`${ad.id}/show`}>
                <div className="content">
                    <h4>{ad.name}</h4>
                    <div>
                        <i>
                            {ad.link.length > 45 ?
                                `${ad.link.substring(0, 40)}...` :
                                ad.link
                            }
                        </i>
                    </div>
                </div>
            </Link>
            <button className="delete" onClick={onDelete}>
                delete
            </button>
        </div>
    )
}
