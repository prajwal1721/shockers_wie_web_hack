import React,{useState} from 'react';
import {FormInput} from '../../FormInput/FormInput';
import {SelectInput} from '../../FormInput/SelectInput';
import {alertSuccess , alertWarning} from '../Alert/alert';
import axios from '../../../axiosurl';

import './signup.scss';


export const SignUp=({handleClick,signin})=>{
    const [Username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassowrd]=useState('');
    const [cpassword,setConfirmPassowrd]=useState('');
    const [number,setNumber]=useState('');
    const [institution,setInstitution]=useState('');
    const [occupation,setOccupation]=useState('Choose your occupation');
    
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(password!==cpassword){
            alertWarning("Passwords don't match");
        }
        else{
            axios.post('/authentication/signup  ',
            {
                name: Username,
                email: email,
                password: password,
                institution: institution,
                profession: occupation,
            })
            .then((res)=>{
                if(res.status===200){
                    alertSuccess(res.data.message);
                    console.log(res);
                    setTimeout(
                        ()=>handleClick(signin),
                        2000);
                    // history.push('/#');// won't work as rendering the same route now no need to check 
                    
                }
                else {
                    alertWarning(res.data.message + ",please sign-up . ");
                }
            })
            .catch((err)=>{ 
                alertWarning(err.response.data.message);
            });
    }
}

    return( 
    <div className="card card-main card-signup-main">
        <div className="card-body">
            <form action="">
            <div className="form-header-text mt-2"><h2>Sign Up</h2></div>
            <div className="row w-100">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-12">
                <FormInput 
                    label='Email'
                    type='email'
                    required
                    value={email}
                    set={setEmail}
                />
                </div>
            </div>
            
            
            
            <div className="row w-100">
                <div className="col-md-6">
                <FormInput 
                    label='Username'
                    type='text'
                    required
                    value={Username}
                    set={setUsername}
                />
                </div>
                <div className="col-md-6">
                <FormInput 
                    label='Contact Number'
                    type='tel'
                    pattern='[0-9]{10}'
                    maxLength='10'
                    required
                    value={number}
                    set={setNumber}
                />
                </div>
            </div>
            <div className="row w-100">
                <div className="col-md-6">
                <FormInput 
                    label='Password'
                    type='password'
                    required
                    value={password}
                    set={setPassowrd}
                />
                </div>
                <div className="col-md-6">
                <FormInput 
                    label='Confirm Password'
                    type='password'
                    required
                    value={cpassword}
                    set={setConfirmPassowrd}
                />
                </div>
            </div>
            
            <div className="row w-100">
                <div className="col-md-6">
                <SelectInput
                    label={`Occupation`}
                    set={setOccupation}
                    autoFocus
                    optionItems={[{id:1,value:'Lawyer'},
                                {id:2,value:'Student'},
                                {id:3,value:'Client'}
                                ]}
                />
                </div>
                <div className="col-md-6">
                <FormInput 
                    label='Institution / Chamber'
                    type='text'
                    required
                    className='form-control w-100 institute'
                    value={institution}
                    set={setInstitution}
                />  
                </div>
            </div>
        <button className="btn-signup mt-2" onClick={handleSubmit}>{`Signup`}</button>
        </form>
        <div className="extras-container-signup">
        <div className="extras">
            <span className="text-extras">{`Already have an account? `}</span> 
            <span className='click'onClick={()=>handleClick(signin)}>Log-In Here</span>
        </div>
        </div>
        </div>
    </div>)

}


// validate password  : https://paste.ubuntu.com/p/hT8wbpSV8J/