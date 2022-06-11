import image from './Group340.png';
import { useNavigate } from 'react-router-dom';
const Popup = () =>{
    const Navigate = useNavigate();
    const handleClick = () =>{
        Navigate('/signin')
    }
    return <>
    <div className="bg-modal">
    
     <div className="modal-content">
      <h3>Hurrah!</h3>
      <img src={image}></img>
      <h4 style={{lineHeight:'100%'}}>Your Account's Password is Reseted.</h4>
      <button className='btn' onClick={handleClick}> Continue</button>
    </div>
   </div>
</>
}
export default Popup