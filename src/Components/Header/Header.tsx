import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';

export default function Header() {
    return (
    <header className={styles.title}>
        Dogs
        <NavBar />
    </header>
    );
}