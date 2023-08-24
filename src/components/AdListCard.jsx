import React from 'react';
import { Link } from 'react-router-dom';

export default function AdListCard({ ad }) {
    return (
        <Link to={`${ad.id}/show`}>
            <div className="ad-list-card">
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
    )
}
