import { Outlet } from 'react-router-dom';
import Sidebar from './SIdebar';

const Dashboard = () => {
 return (
  <div className="flex container mx-auto">
   <Sidebar />
   <Outlet />
  </div>
 );
};

export default Dashboard;
