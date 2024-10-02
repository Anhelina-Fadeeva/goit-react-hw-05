import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../servises/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending Movies</h2>
      {loading && <Loader />}
      {error && <p className={s.error}>{error}</p>}
      {!loading && movies.length === 0 && (
        <p className={s.noMovies}>No movies available at the moment.</p>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;