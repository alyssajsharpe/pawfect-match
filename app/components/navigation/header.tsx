import Link from 'next/link'
import styles from './nav.module.scss';
export default function Header() {
  return (
    <>
     <nav>
          <Link className={styles.link} href="/about-us">About us</Link>
          <Link className={styles.link} href="/login">Login</Link>
          <Link className={styles.link} href="/sign-up">Sign up</Link>
    </nav></>
  );
}
