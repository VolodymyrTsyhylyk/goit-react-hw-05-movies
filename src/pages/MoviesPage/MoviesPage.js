import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


import { getMovies } from "../../services/moves-api";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentQuery = new URLSearchParams(location.search).get("query");
  
  useEffect(() => {
    if (currentQuery === null) {
      return;
    }
    getMovies(currentQuery).then((data) => {
      if (data.results.length === 0) {
        return alert("Not found!");
      }
      setMovies(data.results);
    })
      .catch(er => {
          toast.error(er);
        });
  }, [currentQuery, movieName]);
  

  function submitForm(query) {
    if (query === "") {
      return alert("Please, enter a text!");
    }

    setMovieName(query);

    navigate({ ...location, search: `query=${query}` });
  }

  return (
    <>
      <SearchForm onSubmit={submitForm} />
    {movies.length > 0 && <MovieList movies={movies} location={location} />}
    
    </>
  );
};
export default MoviesPage;

