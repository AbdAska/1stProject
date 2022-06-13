import image from './imageUp.png';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Validation from './Validation';
import ImageUploading from 'react-images-uploading';
// import Dashboard from './Dashboard';
const SignUp3 = () =>{
      const [images, setImages] = React.useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
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
     navigate("/SignUpp")
//    const prap = values.username

    }
    return <div className="A29">
     <img src={image} className='AI3' alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'50%'}}>RAFFLE MANIA</h1>
         <p style={{lineHeight:'50%'}}>Sign Up</p>
          <ImageUploading
        value={images}
        maxNumber='1'
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          onImageUpload,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="Aup">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <i class="fa-solid fa-arrow-up-from-bracket fa-5x"></i>
            </button>
            
        </div>)}
      </ImageUploading>
         <div className='inputcon'>
        
            <h5>DATE OF BIRTH</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='date' name='email' value={values.email} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            </div>
            </div><br/>
         <div className='inputcon'>
        
            <h5>PHONE NO</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='tel'  placeholder="0000-0000-0000" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" name='username1' value={values.username1} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-mobile-screen"></i>
            </div>
            </div>
        </div> <br/>
         <div className='inputcon'>
        
            <h5> POSTAL ADDRESS</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='text' name='username' value={values.username} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-location-dot"></i>
            </div>
        </div>
        </div>
    

     <div className='A33'>
     <p><button onClick={handleFormSubmit} className='btn3'>NEXT</button>
     <Link to='/signup2'><button className='btn3'>back</button></Link></p>
     <p style={{lineHeight:'0%'}}> Already have an account? <Link to='/Signin' style={{color:'blue'}}>Sign in</Link></p>
     <p style={{letterSpacing:'1rem'}}><Link to='/Signup' className='Aico'><i class="fa-solid fa-circle"></i></Link> 
     <Link to='/Signup2' className='Aico'><i class="fa-solid fa-circle"></i></Link>
     <Link to='/Signup3' className='Aico'><i class="fa-solid fa-circle"></i></Link>
     <Link to='/SignUpp' className='Aico'><i class="fa-solid fa-circle"></i></Link>
     
     </p>

     </div>
      </form>
     </div>
    </div>
}

export default SignUp3