import React from 'react';

const ErrorMessage = ({errorMessage}) => {
    if (errorMessage) {
        return <div className="error-message"><span>{errorMessage}</span></div>
    } else return <></>

}

export default ErrorMessage;
