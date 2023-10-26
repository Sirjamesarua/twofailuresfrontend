import React from 'react'
import merchImg from '../assets/free_merch_banner.png'

export default function PopupAd() {
    return (
        <div className='popup-ad animated fadeInDown fadeInBg'>
            {/* Image put here by background image style */}
            <img src={merchImg} alt="two failures merch" />
        </div>
    )
}
