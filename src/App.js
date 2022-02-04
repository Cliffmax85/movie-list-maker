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

    }
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
