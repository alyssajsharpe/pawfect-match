import styles from './main.module.scss';
import Image from 'next/image';
import placeholderImg  from '../../../public/placeholder2.png';
import { TracingChannel } from 'diagnostics_channel';
import Pet from '../../../types/types';

export default function MainContent({ pets }: { pets: Pet[]}) {

    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContentContainer}>
                <div className={styles.cardContainer}>
                     {pets.map((pet) => (
                        <div key={pet.id} className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <a href={`/pets/${pet.id}`}>
                                <div className={styles.petImage}>
                                    <Image 
                                        src={pet.image_url ?? placeholderImg}
                                        fill
                                        alt='Pet Image' 
                                    />
                                </div>
                                <div className={styles.petInfo}>
                                    <h3>{pet.name}</h3>
                                    <p><strong>Age:</strong> {pet.age}</p>
                                    <p><strong>Gender:</strong>  {pet.gender}</p>
                                    <p><strong>Weight:</strong>  {pet.size}</p>
                                </div>
                                </a>
                                <div className={styles.adoptMeBtn}>
                                    <a href={`/pets/${pet.id}`}>More Info</a>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
          </div>
        </div>
    )
}