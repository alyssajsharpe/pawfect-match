import Image from "next/image";
import styles from '../../styles/pages.module.scss';

export default function About() {
  return (
    <>
    <div className={styles.container}>
        <div>
          <h1 className="text-center">🐾 About Us</h1>

          <h3 className="text-center mb-20">
            At Pawfect Match, we're more than just a pet adoption service — we're a community of animal lovers dedicated to helping every pet find the loving home they deserve.
          </h3>

          <div className={styles.row}>
            <h2>💛 Our Mission</h2>
            We believe every animal deserves a second chance at happiness. Our mission is to connect kindhearted people with rescue pets that are looking for their forever families. Whether you're searching for a playful pup, a snuggly cat, or a quiet companion, we're here to help you find your pawfect match.
          </div>

          <div className={styles.row}>
            <h2>🐶 What We Do</h2>
            Pawfect Match partners with local shelters and foster homes to showcase adoptable pets in need. We make the adoption process simple, transparent, and thoughtful — putting the needs of both people and pets first.
          </div>

          <div className={styles.row}>
            <h2>👨‍👩‍👧‍👦 Who We Are</h2>
            We're a small but passionate team of volunteers, animal advocates, and pet owners who know the joy that comes from rescuing a furry friend. Each of us has been touched by adoption — and we’re here to help guide you on that journey.
          </div>

          <div className={styles.row}>
            <h2>🌈 Why It Matters</h2>
            Every adoption saves a life and opens up space for another animal in need. By choosing to adopt, you’re not only gaining a best friend — you’re becoming a hero.
          </div>

          <div className={styles.row}>
            <h1 className="text-center">🐾 Ready to Begin?</h1>
            Explore our list of adoptable pets, read their stories, and take the first step toward finding your pawfect match.
          </div>

          <div className="text-center mt-8">
            <a href="/" className={styles.ctaButton}>Find your next best friend</a>
          </div>
        </div>
        </div>
    </>
  );
}