import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
const router = createBrowserRouter([
 {
  path: '/',
  element: <Root></Root>,
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
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
);
