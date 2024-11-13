import React from "react";
import './info.css';
import ButtonObject from "../buttonObject/ButtonObject"; 

const Info = ({ img, title, date, time, location, price, itemId, showButton = true }) => { 
    console.log("Image URL:", img); // Лог для перевірки URL
    console.log("Rendering Info for:", title); // Лог для перевірки заголовка

    return (
        <div className="info__card">
            <img src={img} alt={title} className="info__image" />
            <div className="info__body">
                <div className="info__text">
                    <div className="info__title">{title || "No title provided"}</div>
                    <div className="info__date">Date: {date || "No date provided"}</div>
                    <div className="info__time">Time: {time || "No time provided"}</div>
                    <div className="info__location">Location: {location || "No location provided"}</div>
                    {price && <div className="info__price">Price: {price}</div>} 
                </div>
                {showButton && ( 
                    <div className="info__button">
                        <ButtonObject itemId={itemId} /> 
                    </div>
                )}
            </div>
        </div>
    );
}

export default Info;
