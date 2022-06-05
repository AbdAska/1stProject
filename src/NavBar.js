// import {Link} from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//     <Link to='/'> Home</Link>
//     <Link to='/about'> About</Link>
//     <Link to='/products'> Products</Link>
//     </nav>
//   )
// }
/////now for styling purposes lets learn use of NavLink
import {NavLink} from 'react-router-dom'
import img from './photo1.png'

const NavBar = () => {
  return (
    <nav>
    <div className='header'>
    <div className='A1'> <img src={img} alt=''></img></div>
    <NavLink to='/' className='A2'> Home</NavLink>
    <NavLink to='/orders'  className='A3'> My Orders</NavLink>
    <NavLink to='/message' className='A4'> Message</NavLink>
    <NavLink to='/signin' className='A5'> Sign in</NavLink>
    <NavLink to='/notifications' className='A6'>
    <i class="fa-solid fa-bell"></i></NavLink>
    {/* <div className='A7'><i class="fa-solid fa-cart-shopping"></i></div> */}
    <NavLink to='/cart' className='A7'>
    <i class="fa-solid fa-cart-shopping"></i></NavLink>
    <NavLink to='/hhh' className='A8'>
    <i class="fa-solid fa-user fa-1x"></i></NavLink>
    </div>
    <div className='A9'>
      <h4 className='A10'>Stay Connected</h4>
      <NavLink to='/hvjgj' className='A11'>
    <i class="fa-brands fa-facebook fa-2x"></i></NavLink>
    <NavLink to='/vjgg' className='A12'>
    <i class="fa-brands fa-twitter fa-2x"></i></NavLink>
    <NavLink to='/ghvgv' className='A13'>
    <i class="fa-brands fa-instagram fa-2x"></i></NavLink>
    <NavLink to='/bhjvjh' className='A14'>
    <i class="fa-brands fa-whatsapp fa-2x"></i></NavLink>
    <NavLink to='/messenger' className='A15'>
    <i class="fa-brands fa-facebook-messenger fa-2x"></i></NavLink>
    <h4 className='A17'> Copyright: 2010-2021 Raffle Mania. All Rights Reserved.</h4>
    <h4 className='A18'>SHOPPING WITH US</h4>
    <NavLink to='/jbbj' className='A19'><h6>Making Options</h6></NavLink>
    <NavLink to='/bbjbhh' className='A20'><h6>Delivery options</h6></NavLink>
    <NavLink to='/jbbhhbbj' className='A21'><h6>Buyer Protection</h6></NavLink>
    <h4 className='A22'>Customer Service</h4>
    <NavLink to='/jbbvhvhvhj' className='A23'><h6>Customer Service</h6></NavLink>
    <NavLink to='/hvhvhvh' className='A24'><h6>Transaction service</h6></NavLink>
    <NavLink to='/jbbvgggvghhbbj' className='A25'><h6>Take Feedback</h6></NavLink>
    <h4 className='A26'>Collaborate With Us</h4>
    <NavLink to='/jhvhvhvbbj' className='A27'><h6>Partnership</h6></NavLink>
    <NavLink to='/bbjbvhvvvhh' className='A28'><h6>Affiliate Service</h6></NavLink>
    </div>
    </nav>
  )
}

export default NavBar