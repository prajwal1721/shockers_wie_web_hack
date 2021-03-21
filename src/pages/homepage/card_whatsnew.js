import React from 'react';
export const CardWhatsNew = ({ imgUrl, text }) => {
    return (
        <div className='card' style={{
            backgroundImage: `Url(${imgUrl})`
        }}>
            { text}
        </div >

    )
}