import React from 'react'
import './WhiteCard.css'
const WhiteCard = props => {
    return (
        <div className="white-card-parent">
            <div className="white-card">
                {props.children}
            </div>
        </div>
    )
}

export default WhiteCard
