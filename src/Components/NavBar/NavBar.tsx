import { Link } from "react-router";
import styles from "./NavBar.module.css";


function NavBar() {


    return (
        <nav className={styles.navBar}>
            <ul className={styles.list}>
                <li className={styles.link}>
                    <Link to="/products" className={styles.link}>Products</Link>
                </li>
                <li>
                    <Link to="/products/:id" className={styles.link}></Link>
                </li>
                <li>
                    <Link to="/create-product" className={styles.link}>Create product</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;