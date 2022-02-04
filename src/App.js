import './App.css';
import Movie from './Movie';
import { useState } from 'react';
import MovieForm from './MovieForm';

function App() {
  
  const [allMovies, setAllMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  // title, 
  // handleDeleteMovie,
  // color,
  // director,
  // year


  function submitMovie(e) {
    e.preventDefault();
    const movie = {
      title: movieFormTitle,
      color: movieFormColor,
      director: movieFormDirector,
      year: movieFormYear
    };
    setAllMovies([...allMovies, movie]);

    setMovieFormTitle('');
    setMovieFormColor('');
    setMovieFormDirector('');
    setMovieFormYear('');
  }
  return (
    <div className="App">
      <div>
        <h2>Enter Movie Data</h2>
        <Movie movie={{
          color: movieFormColor,
          director: movieFormDirector,
          year: movieFormYear,
          title: movieFormTitle,
        }}/>
      </div>
      <MovieForm 
        submitMovie={submitMovie}
        movieFormTitle={movieFormTitle}
        setMovieFormTitle={setMovieFormTitle}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormYear={movieFormYear}
        setMovieFormYear={setMovieFormYear}
        movieFormColor={setMovieFormColor}
        setMovieFormColor={setMovieFormColor}
  
      />
    </div>

  );
}

export default App;
