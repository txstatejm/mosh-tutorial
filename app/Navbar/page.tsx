import Link from 'next/link';
import styles from '../components/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">James Mosher Design</Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/About">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Portfolio">Portfolio</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
