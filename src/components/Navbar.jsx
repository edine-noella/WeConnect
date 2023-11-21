import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center ml-56'>
        <img src={logo} alt='logo' className='logo' />
      </div>

      <div className='flex mr-52'>
        <div className='px-12 py-6 text-md'>
          <Link to='/home' className='nav-link text-primary'>Home</Link>
        </div>

        <div className='px-12 py-6 text-md'>
          <Link to='/about' className='nav-link'>About</Link>
        </div>

        <div className='px-12 py-6 text-md'>
          <Link to='/challenge' className='nav-link'>Challenge</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
