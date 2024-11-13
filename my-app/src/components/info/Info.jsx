import React from "react";
import './info.css';

const Info = ({ img, title, date, time, location, price }) => {
    return (
        <div className="info__card">
            <h3 className="info__title">NEXT GAME</h3>
            <img src={img} alt={title} className="info__image" />
            <div className="info__body">
                <div className="info__text">
                    <div className="info__title">{title || "No title provided"}</div>
                    <div className="info__date">Date: {date || "No date provided"}</div>
                    <div className="info__time">Time: {time || "No time provided"}</div>
                    <div className="info__location">Location: {location || "No location provided"}</div>
                    {price && <div className="info__price">Price: {price}</div>} {/* Відображаємо ціну */}
                </div>
            </div>
        </div>
    );
}

export default Info;











