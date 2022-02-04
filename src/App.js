import './App.css';
import Movie from './Movie';
import { useState } from 'react';

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
      <Movie movie={{
        color: movieFormColor,
        director: movieFormDirector,
        year: movieFormYear,
        title: movieFormTitle,
      }}/>

    </div>
  );
}

export default App;
