import styles from './main.module.scss';
import Image from 'next/image';
import placeholderImg  from '../../../public/placeholder.png';
let id = 0; // Update later 

export default function MainContent(){
    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContentContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.petImage}>
                            <Image 
                                src={placeholderImg}
                                fill
                                alt='Pet Image' 
                            />
                        </div>
                        <h4>Pet Name</h4>
                        <p>Age: </p>
                        <p>Gender: </p>
                        <p>Weight: </p>
                        <a href={`/pet/${id}`}>Adopt me</a>
                    </div>
                </div>
          </div>
        </div>
    )
}