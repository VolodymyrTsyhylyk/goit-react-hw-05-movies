import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));

const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./components/MovieDetailsPage/Cast"));

const Reviews = lazy(() => import("./components/MovieDetailsPage/Reviews"));
// const NotFound = () => {
//   return <h1>NotFound</h1>;
// };
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;