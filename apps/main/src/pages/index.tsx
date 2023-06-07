import React from 'react';
import image from '@/assets/image.png';
import { Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h2 className="font-bold text-2xl text-blue-800">Home page</h2>

      <nav>
        <ul className="space-y-4 my-4">
          <li>
            <Link to="/about">
              <button className="bg-blue-400 text-white px-4 py-2 rounded">About</button>
            </Link>
          </li>
          <li>
            <Link to="/examination">
              <button className="bg-blue-400 text-white px-4 py-2 rounded">Examination</button>
            </Link>
          </li>
        </ul>
      </nav>

      <img src={image} alt="image" />
    </div>
  );
}
