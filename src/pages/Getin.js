import image from '../Group5266.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Getin = () =>{
    const [values, setValues] =useState({
        username:"",
        password:""
    })
    const handleChange = (event) =>{
     setValues({...values, [event.target.name]:event.target.value})
    }
    const handleFormSubmit = (event) =>{
    event.preventDefault();
    }
    return <div className="A29">
     <img src={image} style={{maxWidth:'43rem', flexShrink:'2'}} alt={image}></img>
     <div className='A30'>
     <form>
         <h1>RAFFLE MANIA</h1>
         <p>Welcome To Raffle Mania. One Place To Shop Everything</p>
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