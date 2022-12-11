import styles from "./Categories.module.css";

import Category from "../Category/Category";
import { categories } from "../../utils/categories";

const Categories = () => {
  return (
    <aside className={styles.categories}>
      {categories.map((category) => (
        <Category
          key={category.id}
          categoryName={category.name}
          imgSrc={category.imgSrc}
        />
      ))}
    </aside>
  );
};

export default Categories;
