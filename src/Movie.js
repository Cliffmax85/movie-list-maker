import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return <div className='movie' style={{ background: movie.color }} 
    onClick={() => handleDeleteMovie && handleDeleteMovie(movie.title)}>
    <p>Directed by {movie.director}</p>
    <p>Was Realesed in {movie.year}</p>
    <h1>{movie.title}</h1>


  </div>;
}
