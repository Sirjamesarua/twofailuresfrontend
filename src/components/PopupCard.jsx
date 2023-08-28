import React from 'react';
import { Link } from "react-router-dom";

export default function PopupCard({ content }) {
    return (
        <div id='popup-card' className='animated fadeInDown fadeInBg'>
            <div className="card-container">
                <Link to={"/"}>
                    <button>{"×"}</button>
                </Link>
                <h2>{content.title}</h2>
                <div className="card-content">
                    {content.content}
                </div>
            </div>
        </div>
    )
}
