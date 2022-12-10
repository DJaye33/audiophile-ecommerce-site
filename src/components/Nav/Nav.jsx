import styles from "./Nav.module.css";

import Divider from "../Divider/Divider";
import NavLinks from "../NavLinks/NavLinks";

import menuIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <button className={styles.menu}>
          <img src={menuIcon} alt="menu" />
        </button>
        {/* FIXME: Convert to react router dom link */}
        <a href="/">
          <img src={logo} alt="audiophile" />
        </a>
        <NavLinks />
        <button className={styles.cart}>
          <img src={cartIcon} alt="checkout card" />
        </button>
      </div>
      <Divider />
    </nav>
  );
};

export default Nav;
