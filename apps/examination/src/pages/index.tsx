import React from 'react';
import image from '@/assets/image.png';
import { Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h2 className="font-bold text-2xl text-blue-800">Examination App</h2>
      <Link to="/about">
        <button className="bg-blue-400 text-white px-4 py-2 rounded">About</button>
      </Link>

      <img src={image} alt="image" />
    </div>
  );
}
