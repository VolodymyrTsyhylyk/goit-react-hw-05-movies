import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { getMovieDetails } from "../../services/moves-api";
import { toast } from 'react-toastify';


function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
      setMovie(data);
      })
      .catch(er => { toast.error(er);})
  }, [movieId]);

  if (movie === null) {
    return <div>NOT FOUND</div>;
  } else {
    return <MovieInfo movie={movie} />;
  }
}
export default MovieDetailsPage;