import React, { useState } from 'react';
import { Banner } from '../Banner/banner';
import { Signin } from '../Signin/signin';
import { SignUp } from '../Signup/signup';
import { EmailVerify } from '../Emailverify/emailverify';
import {ResetPassword} from '../ResetPassword/resetpassword';
import './cardLogin.scss';

export const CardLogin = () => {
    const [hidden, toggle] = useState(0);
    const dataSignup = {
        head: `Don't have an account?`,
        para: `Click the button below to create one`,
        buttonData: `Signup`,
        handleSubmitCard: () => toggle(1)
    }
    const dataSignin = {
        head: `Already have an account?`,
        para: `Click the button below to Sign-in`,
        buttonData: `Signin`,
        handleSubmitCard: () => toggle(0)
    }
    return (
        <div className="auth-parent">
        <div className="card-container container">
                      {/* <NavbarLeft data={dataLeft}/> */}
            {/* {console.log(hidden)} */}
            {hidden===0 ?
                <div className="banner-container-signin">
                    <Banner data={dataSignup} />
                    <Signin handleClick={toggle} signup={1} forgot={4} resend={3} change={5} />
                </div> :
            hidden===1?
                <div className="banner-container-signup">
                    <SignUp handleClick={toggle} signin={0}  />
                    <Banner data={dataSignin} />
                </div>:
            hidden===3?
            <div className="banner-container-verifyemail">
                {/* <Banner data={dataSignup} /> */}
                <EmailVerify handleClick={toggle} signin={0} signup={1}/>
         
            </div>:
            // hidden===4?
            <div className="banner-container">
                <ResetPassword handleClick={toggle} signin={0} signup={1}/>
                {/* <Banner data={dataSignin} /> */}
            </div>
        // </div>
    }
        </div>
        
        {/*

    hidden 0: signin active
    hidden 1: signup active
    hidden 2: resend active
    hidden 4: forgot active
    hidden 5: change password // for now not implemented



*/ }
    </div>
    )
}


