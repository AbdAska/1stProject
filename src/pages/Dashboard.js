import Getin from "./Getin"
import { Link } from "react-router-dom"
const Dashboard = () =>{

    return <div className="A35">
    <h2>This is your Dashboard</h2>
    <i class="fa-solid fa-network-wired fa-10x"></i><br/>
    <h2>Welcome back </h2>
    <div className="A36">
    <Link to='/' className='btn'>Back Home</Link>
       <Link to='/signin' className='btn'>Go to Sign in page</Link>
       </div>

    </div>
}
export default Dashboard