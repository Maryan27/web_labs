import React from "react";
import './buttonApply.css';

const ButtonApply = ({ onClick }) => {  
    return (
        <div className="button-apply-container">
            <button className="apply-button" type="button" onClick={onClick}>  
                Apply
            </button>
        </div>
    );
}

export default ButtonApply;
