import React from 'react';
import { Link } from 'react-router-dom';
import { About } from './about';
import { WhatsNew } from './whatsnew';
import './homepage.scss';
import vid from '../../assets/vid.mp4'
export const HomePage = () => {
    return (
        <div className='home'>
            <video src={`${vid}`} style={{
                "width": "100%", "height": "736px", "data - ready": true
            }} allowFullScreen="true" frameborder="0" autoPlay loop playsInline muted></video>
            <About id="about" />
            <WhatsNew />
            <div className='color-grey'>
                <div className='headinger'>{`Community`}</div>
                <div className='inner-head'>
                    {`Want to head to a safe Place Try Community`}
                </div>
                <Link to='community'>Click here</Link>
            </div>

        </div >
    )
}