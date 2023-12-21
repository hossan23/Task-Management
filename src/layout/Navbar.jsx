import { useContext } from 'react';
import Headroom from 'react-headroom';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
 const navigate = useNavigate();
 const { user, logOut } = useContext(AuthContext);
 const handleLogout = () => {
  logOut()
   .then(() => {
    navigate('/');
    toast.success('Logged Out!');
   })
   .catch(() => {
    toast.error("This didn't work.");
   });
 };
 const navLink = (
  <>
   <li>
    <Link to="/">Home</Link>
   </li>
   <li>
    <Link to="/about">About</Link>
   </li>
   <li>
    <Link to="/contact">Contact</Link>
   </li>
   {user && (
    <li>
     <Link to="/dashboard">Dashboard</Link>
    </li>
   )}
  </>
 );
 return (
  <div className="navbar bg-black text-white">
   <div className="navbar-start">
    <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
     </div>
     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
      {navLink}
     </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl hidden md:block">
     Task Manager
    </Link>
   </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold text-xl">{navLink}</ul>
   </div>
   <div className="navbar-end">
    {user && (
     <>
      <div className="avatar mr-2">
       <div className="w-8 rounded">
        <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
       </div>
      </div>
      <p className="mr-2">{user?.displayName}</p>
     </>
    )}
    {!user ? (
     <Link to="/login" className="btn">
      Login
     </Link>
    ) : (
     <button onClick={handleLogout} className="btn">
      Logout
     </button>
    )}
   </div>
  </div>
 );
};

export default Navbar;
