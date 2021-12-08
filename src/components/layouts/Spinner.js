import React from 'react';
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="Loading......." style={{margin: 'auto', maxWidth: '300px', display: 'block'}} />
        </div>
    )
}

export default Spinner;
