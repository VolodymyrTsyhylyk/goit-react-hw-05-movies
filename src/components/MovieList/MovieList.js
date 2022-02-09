import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/moves-api";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";



export default function MovieList() {
      const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch(er => { toast.error(er);})
  }, []);
    return (
    <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>
                {title} {name}
              </Link>
            </li>
          ))}
        </ul>
        )
}