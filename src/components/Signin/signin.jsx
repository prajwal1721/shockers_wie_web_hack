import React, { useState, useCallback } from 'react';
import { FormInput } from '../FormInput/FormInput';
import { useHistory } from 'react-router-dom';
import './signin.scss';



export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="card card-main card-signin-main">

            <div className="card-body card-signin-body">
                <form>
                    <div className="form-header"><h2>Log In</h2></div>
                    <FormInput
                        label='Email'
                        type='email'
                        value={email}

                        set={setEmail}
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        required

                        value={password}
                        set={setPassword}
                    />
                    <button className="btn-signin mt-3" onClick={() => { alert('Login Successful') }}>{`Sign-In`}</button>
                </form>


            </div>

        </div >)
}


