import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className='movie-list'>
      {
        props.movies.map((movie, i) => 
          <Movie key={`${movie}-${i}`} movie={movie} handleDeleteMovie={props.handleDeleteMovie} />)
      }
    </div>
  );
}
