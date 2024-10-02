import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../servises/api"; 
import SearchForm from "../../components/SearchForm/SearchForm";
import s from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleQuery = (newQuery) => {
    setSearchParams(newQuery ? { query: newQuery } : {});
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query.trim()) {
        setMovies([]);
        return;
      }

      setError(null);
      setLoading(true);

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        setError("Failed to fetch movies!");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className={s.wrapper}>
      <SearchForm handleQuery={handleQuery} />
      {loading && <Loader />}
      {error && <p className={s.error}>{error}</p>}
      {movies.length === 0 && !loading && <p className={s.noResults}>No movies found. Try a different search!</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;