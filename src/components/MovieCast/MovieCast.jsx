import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesCredits } from "../../servises/api";
import styles from "./MovieCast.module.css"; 

const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    setError(null); 
    getMoviesCredits(movieId)
      .then(setCast)
      .catch(() => {
        setError("Unable to load actors. Please try again later!");
      });
  }, [movieId]);

  if (error) {
    return <p className={styles.error}>{error}</p>; 
  }
  
  if (cast.length === 0) {
    return <p className={styles.noCast}>Actors are not available for this movie.</p>; 
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Actors:</h3>
      <ul className={styles.castList}>
        {cast.map((actor) => (
          <li key={actor.cast_id} className={styles.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              className={styles.profileImage}
            />
            <p className={styles.actorName}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;