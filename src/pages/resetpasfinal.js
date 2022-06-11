import image from './imagea.png'
import Popup from './Popup'
import { useState } from 'react'
import Validation from './Validation'
import { useNavigate } from 'react-router-dom'
// import Popup from './Popup'
const Resetpasfinal =() =>{
    const [values, setValues] =useState({password:'', password1:''})
    const [errors, seterrors] =useState({})
    const [isOpen, setIsOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);

    const handleChange= (event) =>{
        setValues({...values, [event.target.name]:event.target.value})
    }
    const Navigate = useNavigate()
    const handleSubmit =(event) =>{
    event.preventDefault();
    seterrors(Validation(values))
    {!values.password|| !values.password1 || values.password.length< 5 || values.password1.length< 5 || values.password != values.password1 || setIsOpen(true)}

    }
return <><div className="A29">
     <img src={image} className='AI' alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'100%'}}>RAFFLE MANIA</h1>
         <p style={{lineHeight:'180%'}}>Enter The New Password To Access Your Account.</p>
         <div className='inputcon'>
        
            <h5>NEW PASSWORD</h5>
            <div className='speinput'>
            <div>
            <input className='A31' type='password' name='password' value={values.password} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-lock"></i>
            </div>
        </div>
        {errors.password && <p style={{color:'red', lineHeight:'100%'}}>{errors.password}</p>}
        {errors.password2 && <p style={{color:'red', lineHeight:'50%'}}>{errors.password2}</p>}
        </div> <br/>
         <div className='inputcon2'>
        
            <h5>RE-ENTER PASSWORD</h5>
            <div className='speinput2'>
            <div>
            <input className='A32' type='password' name='password1' value={values.password1} onChange={handleChange}></input>
            
            </div>
            <div>
            <i class="fa-solid fa-lock"></i>
            </div>
        </div>
        {errors.password1 && <p style={{color:'red', lineHeight:'100%'}}>{errors.password1}</p>}
        {errors.password2 && <p style={{color:'red', lineHeight:'50%'}}>{errors.password2}</p>}
        </div>
        <div  style={{paddingLeft:'2.3rem', paddingTop:'1rem'}}>
        {/* {submit(true) && <p style={{color:'red', lineHeight:'50%'}}>Password Reset Successful</p>} */}
        <button className='btn1' onClick={handleSubmit}>Set Password</button><br/>
        
        </div>
     

     
      </form>
     </div>
     {isOpen && <Popup/>}
    </div>
    </>
}
export default Resetpasfinal