import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/about", element: <h1 className="text-center mt-10 text-2xl">About Page</h1> },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
