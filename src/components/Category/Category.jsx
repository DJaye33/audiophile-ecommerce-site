import styles from "./Category.module.css";

import chevronRight from "/assets/shared/desktop/icon-arrow-right.svg";

const Category = ({ categoryName, imgSrc }) => {
  return (
    <div className={styles.category}>
      <figure className={styles.categoryImageWrap}>
        <img src={imgSrc} alt={categoryName} className={styles.categoryImage} />
      </figure>
      <div className={styles.categoryText}>
        <div className={styles.categoryName}>{categoryName}</div>
        {/* FIXME: convert to react router link */}
        <a href="/" className={styles.shopCategory}>
          <span className={styles.shopCategoryText}>Shop</span>{" "}
          <img src={chevronRight} alt="shop" />
        </a>
      </div>
    </div>
  );
};

export default Category;
