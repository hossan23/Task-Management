import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';
import { FaThList } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
 const { user } = useContext(AuthContext);
 return (
  <div className="flex min-h-screen text-white">
   <div id="sidebar" className="bg-black md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
    <div className="space-y-6 md:space-y-10 mt-10">
     <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">Dashboard</h1>
     <div id="profile" className="space-y-3">
      <img src={user?.photoURL} alt="Avatar user" className="w-10 md:w-16 rounded-full mx-auto" />
      <div>
       <h2 className="font-medium text-xs md:text-base text-center">{user?.displayName}</h2>
      </div>
     </div>
     <div id="menu" className="flex flex-col space-y-2">
      <Link to="/" className="text-sm font-medium  py-2 px-2 bg-white text-black hover:scale-105 rounded-md transition duration-150 ease-in-out">
       <FaHome />
       <span>Go Back To Home</span>
      </Link>
      <div className="divider"></div>
      <Link to="create" className="text-sm font-medium  py-2 px-2 bg-white text-black hover:scale-105 rounded-md transition duration-150 ease-in-out">
       <IoIosCreate />
       <span>Create</span>
      </Link>
      <div className="divider"></div>
      <Link to="read" className="text-sm font-medium  py-2 px-2 bg-white text-black hover:scale-105 rounded-md transition duration-150 ease-in-out">
       <FaThList />
       <span>Read</span>
      </Link>
      <div className="divider"></div>
      <Link to="update" className="text-sm font-medium  py-2 px-2 bg-white text-black hover:scale-105 rounded-md transition duration-150 ease-in-out">
       <GrUpdate />
       <span>Update</span>
      </Link>
      <div className="divider"></div>
      <Link to="delete" className="text-sm font-medium  py-2 px-2 bg-white text-black hover:scale-105 rounded-md transition duration-150 ease-in-out">
       {' '}
       <MdDeleteForever />
       <span>Delete</span>
      </Link>
      <div className="divider"></div>
     </div>
    </div>
   </div>
   <div></div>
  </div>
 );
};

export default Sidebar;
