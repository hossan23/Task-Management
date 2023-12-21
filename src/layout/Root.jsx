import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Headroom from 'react-headroom';

const Root = () => {
 return (
  <>
   <div className="container mx-auto">
    {/* <Headroom> */}
    <Navbar></Navbar>
    {/* </Headroom> */}
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  </>
 );
};

export default Root;
