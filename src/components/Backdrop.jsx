import React from 'react'

export default function Backdrop(props) {
    return (
        <div id='backdrop'>
            <div className="backdrop-content animated fadeInDown fadeInBg">
                {props.children}
            </div>
        </div>
    )
}
