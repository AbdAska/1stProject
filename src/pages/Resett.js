import { Link } from "react-router-dom";
import image from './image.png'
const Resett = () =>{
return <div className="A29">
     <img src={image} className='AI' alt={image}></img>
     <div className='A30'>
     <form>
         <h1 style={{lineHeight:'100%'}}>RAFFLE MANIA</h1>
         <h4 style={{lineHeight:'200%', color:'white'}}>Forgot Password</h4>
         <p style={{lineHeight:'150%'}}>Please enter your email address to reset your password! A message with code will be sent to an authorized email to reset the password.</p>
         <div className='inputcon'>
        
            <h5>Email</h5>
            
        </div> <br/>

         </form>
         </div>
         </div>
}
export default Resett;