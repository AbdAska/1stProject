import image from '../Group5266.png';
import {Link} from 'react-router-dom';

const Getin = () =>{
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
            <input className='A31' type='text'></input>
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
            <input className='A32' type='password'></input>
            </div>
            <div>
            <i class="fa-solid fa-lock"></i>
            </div>
        </div>
        </div>
     </form>
     <Link to='/reset' className='A34'>Forget Password?</Link><br/><br/>
     <div className='A33'>
     <Link to='/hghhj' className='btn1'>login</Link><br/><br/>
     <Link to='/Signup' className='btn2'>Sign Up</Link>
     <p> Don't Have An Account? <Link to='/Signup' style={{color:'blue'}}>Sign Up</Link></p>

     </div>
     </div>
    </div>
}
export default Getin