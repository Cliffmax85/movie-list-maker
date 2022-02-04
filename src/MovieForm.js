import React from 'react';

export default function MovieForm(props) {
  return (
    <div className='movie-form-container'>
      <form className='movie-form' onSubmit={props.submitMovie}>
        <label>
            title
          <input required value={props.movieFormTitle} onChange={e => props.setMovieFormTitle(e.target.value)}/>
        </label>
        <label>
            Director
          <input required value={props.movieFormDirector} onChange={e => props.setMovieFormDirector(e.target.value)}/>
        </label>
        <label>
            Release Date
          <input required value={props.movieFormYear} onChange={e => props.setMovieFormYear(e.target.value)}/>
        </label>
        <label>
            Color
          <select required value={props.movieFormColor} onChange={e => props.setMovieFormColor(e.target.value)}>
            <option value="magenta">Magenta</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>  
    </div>
  );
}
            

