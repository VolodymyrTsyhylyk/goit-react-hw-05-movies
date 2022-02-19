// import { useState, useEffect } from "react";
// import { getTrendingMovies } from "../../services/moves-api";
// import { toast } from 'react-toastify';
import { Link } from "react-router-dom";



export default function MovieList({ movies, location }) {

  return (
      
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  )};



