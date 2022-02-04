import React from 'react';

export default function Movie({ 
  handleDeleteMovie,
  title, 
  color,
  director,
  year

}) {
  return <div className='movie' style={{ background: color }} 
    onClick={() => handleDeleteMovie && handleDeleteMovie(title)}>
    <p>Directed by {director}</p>
    <p>Was Realesed in {year}</p>
    <h1>{title}</h1>


  </div>;
}
