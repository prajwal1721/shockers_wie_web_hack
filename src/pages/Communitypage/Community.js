import React from 'react';
import './Community.scss';
import img from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

export const Community = () => {
    return (
        <div>
            <div className="header1">
                <img src={img} alt="Notebook" style={{"width":"100%"}}/>
                <div className="content">
                    <h1>Tell Us Everything</h1>
                </div>
            </div> 

            <div className="row">
                <div className="leftcolumn">
                    <div class="container">
                        <img src={img2} alt="Notebook" style={{"width":"100%"}}/>
                        <div class="content">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                        </div>
                    </div>
                    <div class="container">
                        <img src={img3} alt="Notebook" style={{"width":"100%"}}/>
                        <div class="content">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                        </div>
                    </div>
                    <div class="container">
                        <img src={img2} alt="Notebook" style={{"width":"100%"}}/>
                        <div class="content">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                        </div>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                    <h3>Trending</h3>
                    <div className="pop-post"><div>Heading</div>Lorem ipsum dolor sit amet, an his etiam torquatos</div>
                    <div className="pop-post"><div>Heading</div>Lorem ipsum dolor sit amet, an his etiam torquatos</div>
                    <div className="pop-post"><div>Heading</div>Lorem ipsum dolor sit amet, an his etiam torquatos</div>
                    <div className="pop-post"><div>Heading</div>Lorem ipsum dolor sit amet, an his etiam torquatos</div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <h2>Made by Shockers</h2>
            </div>
        </div>
    )
}