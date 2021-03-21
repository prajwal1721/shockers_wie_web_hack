import React from 'react';
import { Link } from 'react-router-dom';
import { About } from './about';
import { WhatsNew } from './whatsnew';
export const HomePage = () => {
    return (
        <div>
            <iframe _ngcontent-c12="" class="ng-tns-c12-3" bnresponsivevideo="" frameborder="0" src={`https://player.vimeo.com/video/522077754?background=true&amp;autopause=0`} style={{
                "width": "1309px", "height": "736px", "data - ready":
                    true
            }}></iframe>
            <About />
            <WhatsNew />
            <div>
                {`Want to head to a safe Place Try Community`}
                <Link to='community'>Click here</Link>

            </div>

        </div>
    )
}