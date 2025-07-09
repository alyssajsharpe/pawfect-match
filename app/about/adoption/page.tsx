import Image from "next/image";
import styles from '../../../styles/pages.module.scss';

export default function Adoption() {
  return (
    <>
    <div className={styles.container}>
        <div>
            <h1 className="text-center">🐾 Our Adoption Process</h1>

            <h3 className="text-center mb-20">At Pawfect Match, we believe every pet deserves a loving forever home — and every family deserves a pet that fits perfectly into their life. Our adoption process is designed to ensure the best possible match for both you and your future furry companion.</h3>
            <div className={styles.row}>
                <h2>1. Browse Available Pets</h2>
                Start by exploring our list of adoptable pets. Use filters to narrow down by species, age, size, temperament, and more. Each profile includes photos, personality info, and health details to help you find your match.
            </div>
            <div className={styles.row}>
                <h2>2. Submit an Application</h2>
                Once you’ve found a pet you’re interested in, click the "Adopt" button to submit a short application. We’ll ask about your home, lifestyle, and experience with animals to ensure it’s a good fit.
            </div>
            <div className={styles.row}>
                <h2>3. Meet & Greet</h2>
                If it’s a match, we’ll reach out to schedule a meet-and-greet — either in person or virtually. This gives you and the pet a chance to interact and see how you connect.
            </div>
            <div className={styles.row}>
                <h2>4. Home Visit & Approval</h2>
                In some cases, we may request a quick home visit to ensure your space is safe and ready. Once approved, we’ll finalize the adoption details.
            </div>
            <div className={styles.row}>
                <h2>5. Bring Home Your New Best Friend</h2>
                Pay the adoption fee, sign the agreement, and welcome your pet home! We’ll provide guidance, health records, and tips for a smooth transition.
            </div>
            <div className={styles.row}>
                <h1>🐶 Why Adopt from Us?</h1>
                    All pets are vaccinated, spayed/neutered, and health-checked
                    Adoption fees help cover care and medical costs
                    Supportive follow-up and post-adoption resources
                
                Ready to meet your Pawfect Match?
                Explore our pets and start your journey today! 🐾
            </div>

            <div><a href="/">Find your next best friend</a> </div>
        </div>
    </div></>
  );
}