import React from "react";
import { useNavigate } from "react-router-dom";
import './buttonObject.css';

function ButtonObject({ itemId }) {
    const navigate = useNavigate();

    const handleDiscoverClick = () => {
        
        if (itemId !== undefined) {
            
            navigate(`/Catalog/${itemId}`);
        } else {
            console.error("Item ID is undefined");
        }
    };

    return (
        <div className="button__object">
            <button className="object-button" onClick={handleDiscoverClick}>
                View more
            </button>
        </div>
    );
}

export default ButtonObject;
