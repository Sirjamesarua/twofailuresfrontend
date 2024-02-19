import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ShareContent() {
    const location = useLocation();

    const whatsappLink = "https://api.whatsapp.com/send?text=";
    const fbLink = "https://www.facebook.com/sharer/sharer.php?u=";
    const telegramLink = 'https://t.me/share/url?url=';

    const episodeLink = `${import.meta.env.VITE_APP_URL}${location.pathname}`;
    const inviteText = `Hello there,\nI think you'd find this episode from Two Failures interesting: ${episodeLink} \nHappy Reading!`

    return (
        <div className='share-episode mt-1'>
            <h3 className='fs-5 fw-bold m-0 '>Share this episode</h3>
            <div>
                <i className="bi bi-whatsapp"
                    onClick={() => window.open(whatsappLink + encodeURIComponent(inviteText))}
                ></i>

                <i className="bi bi-facebook"
                    onClick={() => window.open(fbLink + encodeURIComponent(`${episodeLink}`))}
                ></i>

                <i className="bi bi-telegram"
                    onClick={() => window.open(telegramLink + encodeURIComponent(`${inviteText}`))}
                ></i>

                <i className="bi bi-twitter"
                    onClick={() => window.open(telegramLink + encodeURIComponent(`${inviteText}`))}
                ></i>
            </div>
        </div>
    )
}
