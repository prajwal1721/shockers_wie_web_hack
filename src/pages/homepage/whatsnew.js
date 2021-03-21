import React from 'react';
import { CardWhatsNew } from './card_whatsnew';
import { WhatNew } from './data';
export const WhatsNew = () => {
    return (
        <div className='head'>
            <div className='heading'>{`What's New`}</div>
            <div>
                {
                    WhatNew.map(({ imgUrl, text }) =>
                        <CardWhatsNew imgUrl={imgUrl} text={text} />
                    )
                }
            </div>
        </div>

    )
}