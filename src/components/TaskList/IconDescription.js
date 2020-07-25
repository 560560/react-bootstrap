import React from 'react';

const IconDescription = ({dsc, }) => {

    return (
        <div className={`icon-description ${dsc}`}>{dsc.toUpperCase()}</div>
    );
}

export default IconDescription;
