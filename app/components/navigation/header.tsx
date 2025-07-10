import Link from 'next/link'
import styles from './nav.module.scss';
import Image from 'next/image';
import placeholderImg  from '../../../public/placeholder.png';
import logo from '../../../public/logo.png';


export default function Header() {
  return (
    <>
     <nav className={styles.header}>
        <div className={styles.navContainer}>
            <div className={styles.logoNav}>
              <a href='/'>
              <h2 className='hide-on-mobile'>Pawfect Match</h2>
              <Image 
                  src={logo ?? placeholderImg}
                  fill
                  alt='Pawfect Match Logo' 
              />
              </a>
            </div>
            <div className={styles.middleNavLinks}>
              <Link className={styles.link} href="/about">About us</Link>

            </div>
            <div className={styles.accountLinks} >
              <Link className={styles.link}href="/login">Login</Link>
              <Link className={styles.link} href="/sign-up">Sign up</Link>
            </div>
        </div>
    </nav></>
  );
}
