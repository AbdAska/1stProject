import {Link, Outlet} from 'react-router-dom'
import NavBar from '../NavBar';
const Home = () => {
  return (
    <>
      <NavBar/>
    
    <section className='section'>
      {/* before adding links, link tags or component can only be used for internal navigation, for external links like google.com/// we would still need a href link components even in react */}

    <Outlet/>
    </section>
    </>
  );
};
export default Home;