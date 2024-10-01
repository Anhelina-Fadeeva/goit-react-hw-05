import MovieCardItem from '../MovieCardItem/MovieCardItem';
import s from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieData }) => {
  const location = useLocation();

  if (movieData.length === 0) {
    return (
      <h2 className={s.noResultsMessage}>Nothing was found for your request...</h2>
    );
  }

  return (
    <div className={s.movieContainer}>
      <ul className={s.movieGrid}>
        {movieData.map(item => (
          <li key={item.id} className={s.movieItem}>
            <Link to={`/movies/${item.id}`} state={location}>
              <MovieCardItem itemData={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;