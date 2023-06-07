import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h2>About pages</h2>
      <nav>
        <Link to="/">
          <button className="bg-slate-500 text-white px-4 py-2 rounded">Homsses</button>
        </Link>
      </nav>
    </div>
  );
}
