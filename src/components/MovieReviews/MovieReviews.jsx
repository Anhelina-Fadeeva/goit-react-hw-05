import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReview } from "../../servises/api";
import styles from "./MovieReviews.module.css";
import clsx from "clsx";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getMoviesReview(movieId);
        setReviews(data);
      } catch (err) {
        setError("Не удалось загрузить отзывы");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className={styles.noReviews}>Нет отзывов</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Отзывы:</h3>
      <ul className={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <p className={styles.author}>{review.author}</p>
            <p className={styles.text}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;