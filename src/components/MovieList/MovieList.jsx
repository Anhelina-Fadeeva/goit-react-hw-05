import { NavLink, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const MovieList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={buildLinkClass}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;