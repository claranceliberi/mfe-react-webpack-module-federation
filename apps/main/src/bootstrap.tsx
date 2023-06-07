import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import './global.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const container = document.getElementById('root') as HTMLElement;

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('---------------------- DOMContentLoaded ----------------------');
});

const root = createRoot(container);
export { root };
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
