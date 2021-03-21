import React from 'react';
import './about.scss';
import p2 from '../../assets/p2.jpg';
import p1 from '../../assets/p1.jpg';
import { Link } from 'react-router-dom';
export const About = () => {
    return (
        <div className='aboutus'>
            <h2 className="about">About Us</h2>
            <div className="head">
                <div className="left">
                    Born in a room in a condominium in 2014, coly greedily delivers "more and more interesting" to a world flooded with wonderful entertainment, and aspires to be an embodiment of "more and more interesting" work. We have been blessed with our customers, related parties, and business partners, and have grown significantly in the field of IP for women.
                </div>
                <div className='right'>
                    <div className='inner-right'>
                        <img className='img1' src={p2}
                            alt="Owner1" />
                        <span className='author'>{`Anna Nakajima`}</span>
                    </div>
                    <div className="inner-right">
                        <img src={p1}
                            alt="Owner2" />
                        <span>{`Mizuki Nakajima`}</span>
                    </div>
                </div>
            </div>
            <Link className="button" to='/about'>Read more..</Link>
        </div >
    )
}