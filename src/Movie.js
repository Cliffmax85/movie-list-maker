import React from 'react';

export default function Movie({ 
    title, 
    handleDeleteMovie,
    color,
    director,
    year

 }) {
  return <div className='movie' style={{ background: color }} 
  onClick={() => handleDeleteMovie && handleDeleteMovie(title)}>
      <h1>{title}</h1>
      <p>Directed by {director}</p>
      <p>Was Realesed in {year}</p>
      

  </div>;
}
