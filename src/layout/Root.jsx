import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Headroom from 'react-headroom';

const Root = () => {
 return (
  <>
   <div>
    <Headroom>
     <Navbar></Navbar>
    </Headroom>
   </div>
   <div className="min-h-screen">
    <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </>
 );
};

export default Root;
