import React from 'react';

export default function PopupCard({ content, newUpdatePop }) {

    const handleButtonClick = () => {
        const value = "";
        newUpdatePop(value);
    }

    return (
        <div id='popup-card' className='animated fadeInDown fadeInBg'>
            <div className="card-container animated fadeInDown">
                <h2>{content.title}</h2>
                <div className="card-content">
                    {content.content}
                </div>
                <button onClick={handleButtonClick} className='mt-1'>Close</button>
            </div>
        </div>
    )
}