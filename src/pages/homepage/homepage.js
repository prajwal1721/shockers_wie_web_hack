import React from 'react';
import { Link } from 'react-router-dom';
import { About } from './about';
import { WhatsNew } from './whatsnew';
import vid from '../../assets/vid.mp4'
export const HomePage = () => {
    return (
        <div>
            <iframe _ngcontent-c12="" class="ng-tns-c12-3" bnresponsivevideo="" frameborder="0" src={`${vid}?autoplay=1&controls=0&loop=0`} style={{
                "width": "100%", "height": "736px", "data - ready": true
            }} allowFullScreen="true" controls="false"></iframe>
            <About />
            <WhatsNew />
            <div>
                {`Want to head to a safe Place Try Community`}
                <Link to='community'>Click here</Link>

            </div>

        </div >
    )
}