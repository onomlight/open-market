import { Link } from "react-router-dom";
import styles from "./product.module.css";

export const Product = () => {
  return (
    <div className={styles.product}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src="images/image001.png" alt="product" />
        </div>
      </Link>
      <div className={styles.store}>
        <span>아이돈케어</span>
      </div>

      <div className={styles.product_name}>
        <span>마로네 노트북 파우치</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>17100</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
};
