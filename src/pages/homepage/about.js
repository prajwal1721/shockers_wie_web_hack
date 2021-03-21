import React from 'react';
import { Link } from 'react-router-dom';
export const About = () => {
    return (
        <div className="head">
            <div>About Us</div>
            <div className="left">
                adkhfsfjlogsfjkvnfdjkbgdfbjhefbhuisfgbvdghbsfvihhifyvfdbv
                wfjhrghjerguertghuetuihbrthutrghiburtb
            </div>
            <div className='right'>
                <div>
                    <img src="https://www.gstatic.com/webp/gallery3/1.png"
                        alt="Owner1" />
                    <span>{`NAme`}</span>
                </div>
                <div>
                    <img src="https://www.gstatic.com/webp/gallery3/1.png"
                        alt="Owner1" />
                    <span>{`NAme`}</span>
                </div>
            </div>
            <Link to='/about'>Read more..</Link>
        </div >
    )
}