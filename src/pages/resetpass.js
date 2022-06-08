import Validation from "./Validation";
import image from './imagea.png';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const ResetPass = () =>{
const [values, setValues] =useState({email:""})
    const [errors, setError]= useState({});
    const handleChange = (event) =>{
     setValues({...values, [event.target.name]:event.target.value})
    }
     const navigate= useNavigate();
    const handleFormSubmit = (event) =>{
    event.preventDefault();
    setError(Validation(values));
   {!values.email ||navigate("/Dashboa")}
    }

    return <div className="A29">
     <img src={image} className='AI' alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'100%'}}>RAFFLE MANIA</h1>
         <h4 style={{lineHeight:'200%', color:'white'}}>Forgot Password</h4>
         <p style={{lineHeight:'150%'}}>Please enter your email address to reset your password! A message with code will be sent to an authorized email to reset the password.</p>
         <div className='inputcon'>
        
            <h5>Email</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='text' name='email' value={values.email} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-envelope"></i>
            </div>
            </div>
            {errors.email && <p style={{color:'red', lineHeight:'50%'}}>{errors.email}</p>}
            <div className='A33'>
            <button onClick={handleFormSubmit} className='btn1'>Verify Code</button><br/><br/>
            </div>
        </div> <br/>

         </form>
         </div>
         </div>
        
}
export default ResetPass