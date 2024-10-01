import s from './MovieCard.module.css';

const MovieCardItem = ({ itemData }) => {
  const defaultPoster =
    'https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg';
  const posterPath = itemData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${itemData.poster_path}`
    : defaultPoster;

  return (
    <div className={s.cardItem}>
      <img
        className={s.cardPoster}
        src={posterPath}
        alt={itemData.original_title || 'Movie Poster'}
        onError={e => {
          e.target.src = defaultPoster;
        }}
      />
      <div className={s.cardInfo}>
        <h2 className={s.cardTitle}>{itemData.title}</h2>
        <p className={s.cardRelease}>Release: {itemData.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCardItem;