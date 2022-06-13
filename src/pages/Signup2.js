import image from './imageUp.png';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Validation from './Validation';
// import Dashboard from './Dashboard';
const SignUp2 = () =>{
    
    const [values, setValues] =useState({
        username:"",
        email:"",
        username1:""
    })
    const [errors, setError]= useState({});
    const handleChange = (event) =>{
     setValues({...values, [event.target.name]:event.target.value})
    }
    
    const navigate= useNavigate();
    const handleFormSubmit = (event) =>{
    event.preventDefault();
    setError(Validation(values));
   {!values.username||!values.username1|| !values.email || !/\S+@\S+\.\S+/.test(values.email) ||navigate("/Signup3")}
//    const prap = values.username

    }
    return <div className="A29">
     <img src={image} className='AI3' alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'50%'}}>RAFFLE MANIA</h1>
         <p style={{lineHeight:'50%'}}>Sign Up</p>
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
            {errors.email && <p style={{color:'red', lineHeight:'10%'}}>{errors.email}</p>}
            </div><br/>
         <div className='inputcon'>
        
            <h5>FATHER FIRST NAME</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='text' name='username1' value={values.username1} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-user"></i>
            </div>
            </div>
        {errors.username1 && <p style={{color:'red', lineHeight:'10%'}}>{errors.username}</p>}
        </div> <br/>
         <div className='inputcon'>
        
            <h5> FATHER LAST NAME</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='text' name='username' value={values.username} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-user"></i>
            </div>
        </div>
        {errors.username && <p style={{color:'red', lineHeight:'10%'}}>{errors.username}</p>}
        </div>
    

     <div className='A33'>
     <p><button onClick={handleFormSubmit} className='btn3'>NEXT</button>
     <Link to='/signup'><button className='btn3'>back</button></Link></p>
     <p style={{lineHeight:'0%'}}> Already have an account? <Link to='/Signin' style={{color:'blue'}}>Sign in</Link></p>
     <p style={{letterSpacing:'1rem'}}><Link to='/Signup' className='Aico'><i class="fa-solid fa-circle"></i></Link> 
     <Link to='/Signup2' className='Aico'><i class="fa-solid fa-circle"></i></Link>
     <Link to='/Signup3' className='Aico'><i class="fa-solid fa-circle"></i></Link>
     <Link to='/jbjbj' className='Aico'><i class="fa-solid fa-circle"></i></Link>
     
     </p>

     </div>
      </form>
     </div>
    </div>
}

export default SignUp2