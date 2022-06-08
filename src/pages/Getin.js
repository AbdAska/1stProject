import image from '../Group5266.png';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Validation from './Validation';
// import Dashboard from './Dashboard';
const Getin = () =>{
    
    const [values, setValues] =useState({
        username:"",
        password:""
    })
    const [errors, setError]= useState({});
    const handleChange = (event) =>{
     setValues({...values, [event.target.name]:event.target.value})
    }
    
    const navigate= useNavigate();
    const handleFormSubmit = (event) =>{
    event.preventDefault();
    setError(Validation(values));
   {!values.username || !values.password ||  navigate("/Dashboard")}
   const prap = values.username

    }
    return <div className="A29">
     <img src={image} className='AI' alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'100%'}}>RAFFLE MANIA</h1>
         <p style={{lineHeight:'180%'}}>Welcome To Raffle Mania. One Place To Shop Everything</p>
         <div className='inputcon'>
        
            <h5>Username</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='text' name='username' value={values.username} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-user"></i>
            </div>
        </div>
        {errors.username && <p style={{color:'red', lineHeight:'50%'}}>{errors.username}</p>}
        </div> <br/>
         <div className='inputcon2'>
        
            <h5>Password</h5>
            <div className='speinput2'>
            <div>
            <input className='A32' type='password' name='password' value={values.password} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-lock"></i>
            </div>
        </div>
        {errors.password && <p style={{color:'red', lineHeight:'50%'}}>{errors.password}</p>}
        </div>
    
     <Link to='/reset' className='A34'>Forget Password?</Link><br/><br/>
     <div className='A33'>
     <button onClick={handleFormSubmit} className='btn1'>login</button><br/><br/>
     <Link to='/Signup' className='btn2'>Sign Up</Link>
     <p> Don't Have An Account? <Link to='/Signup' style={{color:'blue'}}>Sign Up</Link></p>

     </div>
      </form>
     </div>
    </div>
}

export default Getin