import React from 'react';
export const CardWhatsNew = ({ imgUrl, text }) => {
    return (
        <div style={{ backgroundImage: { imgUrl } }}>
            {text}
        </div>

    )
}