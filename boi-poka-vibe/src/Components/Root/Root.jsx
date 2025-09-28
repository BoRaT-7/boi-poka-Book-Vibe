import React from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello World from Root Component!</h1>
      <button className="btn btn-primary mt-5">DaisyUI Button</button>
      <div className="mt-5">
        <Link to="/" className="btn btn-secondary mr-2">Home</Link>
        <Link to="/about" className="btn btn-accent">About</Link>
      </div>
    </div>
  );
};

export default Root;
