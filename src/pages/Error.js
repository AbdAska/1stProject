import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='A16'>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to='/' className='btn'>Back Home</Link>
    </div>
  );
};
export default Error;
