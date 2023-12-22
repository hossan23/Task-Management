import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
 return (
  <div className="flex flex-col sm:flex-row justify-start items-center container mx-auto space-x-1 md:space-x-10">
   <Sidebar />
   <div className="my-2">
    <Outlet />
   </div>
  </div>
 );
};

export default Dashboard;
