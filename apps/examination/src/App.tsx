import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppProps } from './types';

export default function App({ history }: AppProps) {
  return (
    <React.StrictMode>
      <RouterProvider router={history} />
    </React.StrictMode>
  );
}
