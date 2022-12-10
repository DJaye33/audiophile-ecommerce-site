import styles from "./NavLinks.module.css";

const NavLinks = ({ isStacked }) => {
  return (
    <ul className={styles.links}>
      {/* FIXME: convert to react router dom links */}
      <li>
        <a href="/" className={styles.link}>
          home
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          headphones
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          speakers
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          earphones
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
