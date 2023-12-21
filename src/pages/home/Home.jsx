import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';
const Home = () => {
 return (
  <div className="bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
   <div className="container mx-auto space-y-10 flex justify-center items-center flex-col min-h-[calc(100vh-76px)]">
    <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold">
     Organize your work<br></br> and life, finally.
    </h1>
    <p className="capitalize text-center font-medium text-xl">
     Become focused, organized, and calm with Todoist. The world’s #1 task manager .<br></br> Website that leads to the success of the overall product
    </p>
    <Link to="/dashboard" className="text-center btn btn-ghost bg-black text-white">
     Let&apos;s Explore
    </Link>
   </div>
  </div>
 );
};

export default Home;
