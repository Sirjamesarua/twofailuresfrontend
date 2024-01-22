import React from 'react'
import merchImg from '../assets/free_merch_banner.png'

export default function PopupAd() {
    return (
        <div className='popup-ad border shadow'>
            {/* Image put here by background image style */}
            <img src={merchImg} alt="two failures merch" className='img-fluid' />
        </div>
    )
}
