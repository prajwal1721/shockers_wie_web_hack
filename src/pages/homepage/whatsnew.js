import React from 'react';
import './whatsnew.scss';
import { CardWhatsNew } from './card_whatsnew';
import { WhatNew } from './data';
export const WhatsNew = () => {
    return (
        <div className='head'>
            <div className='heading'>{`What's New`}</div>
            <div className='inner1'>
                {
                    WhatNew.map(({ imgUrl, text }) =>
                        <CardWhatsNew imgUrl={imgUrl} text={text} />
                    )
                }
            </div>
        </div>

    )
}