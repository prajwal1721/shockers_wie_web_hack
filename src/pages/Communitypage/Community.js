import React from 'react';
import './Community.scss';
import img from '../../assets/img.jpg';
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
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className="fakeimg" style={{ "height": "200px" }}>Image</div>
                        <p>Some text..</p>
                    </div>
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg" style={{ "height": "200px" }}>Image</div>
                        <p>Some text..</p>
                    </div>
                </div>
            
                <div className="rightcolumn">
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg">Image</div><br />
                        <div className="fakeimg">Image</div><br />
                        <div className="fakeimg">Image</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <h3>Follow Me</h3>
                <p>Some text..</p>
            </div>



            <div class="footer">
                <h2>Footer</h2>
            </div>
        </div>
    )
}