import React from 'react';
import { Link } from 'react-router-dom';
import './navbarLeft.scss';
import { data } from './data';
import { isXMLDoc } from 'jquery';

export const NavbarLeft = () => {

    return (

        <nav>
            {data.map(i =>
                <span onClick={() => console.log(i.label)} key={i.label}>
                    {/* {<Link to={i.to} key={i.label}>{i.label}</Link>} */}
                    {i.label}
                </span>)
            }
        </nav >

    )
}