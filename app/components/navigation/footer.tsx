import Link from "next/link";
import styles from './nav.module.scss';

export default function Footer() {
  return (
    <><footer className={styles.footer}>
        <nav>
          <Link className={styles.link} href="/about">About us</Link>
          <Link className={styles.link} href="/login">Login</Link>
          <Link className={styles.link} href="/sign-up">Sign up</Link>
          <div>
            <h3 className={styles.disclaimer}>Please note: This is NOT a real adoption site. This site is an example to display and expand my nextjs skills. </h3>
          </div>
      </nav>
    </footer></>
  );
}
