import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../servises/api";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => clsx(s.link, { [s.active]: isActive });

const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch {
        setError("Movie not found!");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) return <p className={s.error}>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{movie.title}</h2>
      <div className={s.imageWrapper}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
          alt={movie.title}
          className={s.image}
        />
        <div className={s.textWrapper}>
          <p className={s.text}>
            Description: <span className={s.span}>{movie.overview || "N/A"}</span>
          </p>
          <p className={s.text}>
            Rating: <span className={s.span}>{movie.vote_average || "N/A"}</span>
          </p>
          <p className={s.text}>
            Year: <span className={s.span}>{movie.release_date?.split("-")[0] || "N/A"}</span>
          </p>
          <p className={s.text}>
            Duration: <span className={s.span}>{movie.runtime || "N/A"} min</span>
          </p>
        </div>
      </div>
      <nav className={s.nav}>
        <NavLink to={`/movies/${movieId}/cast`} className={buildLinkClass}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className={buildLinkClass}>Reviews</NavLink>
        <NavLink to={backLink.current} className={buildLinkClass}>Go back</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;