import React from 'react';

const ErrorMessage = ({errorMessage}) => {
    if (errorMessage) {
        return <div className="error-message">{errorMessage}</div>
    } else return <></>

}

export default ErrorMessage;
