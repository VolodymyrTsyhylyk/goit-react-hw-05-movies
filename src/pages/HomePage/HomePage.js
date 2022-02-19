import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/moves-api";
import { toast } from 'react-toastify';

export default function HomePage() {
        const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch(er => { toast.error(er);})
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies}/>
    </>
  );
}






