import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import AuthProvider from './provider/AuthProvider';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './pages/error/ErrorPage';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from './pages/dashboard/Dashboard';
import Read from './pages/dashboard/read/Read';
import Update from './pages/dashboard/update/Update';
import Delete from './pages/dashboard/delete/Delete';
import Create from './pages/dashboard/create/Create';
const router = createBrowserRouter([
 {
  path: '/',
  element: <Root></Root>,
  errorElement: <ErrorPage />,
  children: [
   {
    path: '/',
    element: <Home></Home>,
   },
   {
    path: '/about',
    element: <About></About>,
   },
   {
    path: '/contact',
    element: <Contact></Contact>,
   },

   {
    path: '/login',
    element: <Login></Login>,
   },
   {
    path: '/register',
    element: <Register></Register>,
   },
  ],
 },
 {
  path: 'dashboard',
  element: (
   <PrivateRoutes>
    <Dashboard />
   </PrivateRoutes>
  ),
  children: [
   {
    path: 'create',
    element: <Create />,
   },
   {
    path: 'read',
    element: <Read />,
   },
   {
    path: 'update',
    element: <Update />,
   },
   {
    path: 'delete',
    element: <Delete />,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <AuthProvider>
   <Toaster position="top-center" reverseOrder={false} />
   <RouterProvider router={router} />
  </AuthProvider>
 </React.StrictMode>
);
