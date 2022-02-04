import './App.css';
import Movie from './Movie';
import { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  
  const [allMovies, setAllMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');
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

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilteredMovies(search) {
    const filteredMovies = allMovies.filter(movie => movie.title.includes(search));
    {search ? setFilteredMovies([...filteredMovies]) : setFilteredMovies([...allMovies]);
    }
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
      <div>
        <input onChange={(e) => handleFilteredMovies(e.target.value)} />
      </div>
      <MovieForm 
        submitMovie={submitMovie}
        movieFormTitle={movieFormTitle}
        setMovieFormTitle={setMovieFormTitle}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormYear={movieFormYear}
        setMovieFormYear={setMovieFormYear}
        movieFormColor={movieFormColor}
        setMovieFormColor={setMovieFormColor}
  
      />
      <MovieList movies={filteredMovies.length ? filteredMovies : allMovies}
        handleDeleteMovie={handleDeleteMovie}/>
    </div>
      
  );
}

export default App;
