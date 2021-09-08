import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Error 404</h2>
      <h3>Page Not Found</h3>
      <p>Back
        <Link to="/" className="ms-2">Home </Link>
      </p>
    </div>
  );
};

export {NotFound};