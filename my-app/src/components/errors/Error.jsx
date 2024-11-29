import React from 'react';
import './error.css'; 

const Error = ({ children }) => {
    return children ? <div className="error">{children}</div> : null;
};

export default Error;
