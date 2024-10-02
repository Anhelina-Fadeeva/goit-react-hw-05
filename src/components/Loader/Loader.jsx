import { RotatingLines } from "react-loader-spinner"; 
import styles from "./Loader.module.css"; 

const Loader = () => (
  <div className={styles.loaderContainer}>
    <RotatingLines
      visible={true}
      height="80"
      width="80" 
      strokeColor="rgba(108, 99, 255, 0.8)" 
      strokeWidth="5" 
      animationDuration="0.75" 
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}} 
      wrapperClass=""
    />
    <span className={styles.loadingText}>Loading...</span> {}
  </div>
);

export default Loader;