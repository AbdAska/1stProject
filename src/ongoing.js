import {Link} from 'react-router-dom'
// import {fa-solid, fa-compass-deafting } from '@fortawesome/fontawesome-free-solid';
const Ongoing = () => {
    return <div style={{padding: '3rem', display:'flex', flexWrap:"wrap",flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
        <div>
        <i style={{color: "white"}} className="fa-solid fa-compass-drafting fa-10x"></i> <br/><br/> </div>
        <h1 style={{color: 'azure'}}>Section Under Construction</h1>
        <Link to='/' className='btn'>Back Home</Link><br/>
       <Link to='/signin' className='btn'>Go to Sign in page</Link>
    </div>
}
export default Ongoing