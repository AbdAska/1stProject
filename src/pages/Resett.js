import { Link } from "react-router-dom";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image from './image.png'

const Resett = () =>{
    const navigate= useNavigate();
    const [values, setValues] = useState()
const handleChange = (event) =>{
   setValues({...values})
}
const handlesubmit = (event) =>{
    event.preventDefault();
    navigate('/resetpasfinal')
}
return <div className="A29">
     <img src={image} className='AI' style={{maxHeight:'30rem'}} alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'100%'}}>RAFFLE MANIA</h1>
         
         <p style={{lineHeight:'150%'}}>Enter a 4-digit code which is sent to your Phone number. Kindly enter that code here to reset your accont password.<br/> Thanks</p>
         <div className='inputotp'>

        <VerificationInput validChars="0-9" length={4} value={values} autoFocus onChange={handleChange} 
            removeDefaultStyles
  classNames={{
    container: "continer",
    character: "character",
    characterInactive: "character--inactive",
    characterSelected: "character--selected",
  }}
        />
        {/* <input type='number' onChange={handleChange} name='OTP'></input> */}
        
            
        </div> <br/>
    <button className='btn1' onClick={handlesubmit}>Verify Code</button>

         </form>
         </div>
         </div>
}
export default Resett;