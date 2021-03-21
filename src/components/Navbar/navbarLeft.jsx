import React from 'react';
import { Link } from 'react-router-dom';
import './navbarLeft.scss';
import { data } from './data';
import imgUrl from '../../assets/logo.png';

export const NavbarLeft = () => {

    return (

        <nav >
            <Link to='/'><img src={imgUrl} className='logo' /></Link>
            <div className="left">
                {data.map(i =>
                    <span className="link" onClick={() => console.log(i.label)} key={i.label}>
                        {<a className='link' href={i.to} key={i.label}>{i.label}</a>}
                    </span>)
                }
            </div>

        </nav >

    )
}