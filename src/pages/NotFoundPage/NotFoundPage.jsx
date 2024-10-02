import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops! 404 - Page Not Found</h1>
      <p className={styles.message}>We're sorry, but the page you are looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>Return to Home</Link>
      <button
        onClick={() => window.history.back()}
        className={styles.backButton}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;