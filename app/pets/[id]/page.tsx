

import Pet from '../../../types/types';
import styles from './pet.module.scss';
import Image from 'next/image';
import placeholderImg  from '../../../public/placeholder.png';
import pool from '@/lib/db';

export default async function PetPage({ params }: { params: { id: string } }) {
  
  // Grab pet info from db by url id 
  const { id } = await params
  const result = await pool.query<Pet>(
    'SELECT * FROM pets WHERE id = $1',
    [id]
  );

  const pet = result.rows[0];

  return (
    <div className={styles.mainPetContent}>
            <div className={styles.mainPetContentContainer}>
              <div className={styles.returnBtn}><a href='/'>Return to dashboard</a></div>
                <div className={styles.petInfoContainer}>
                    <div className={styles.petIntro}>
                        <div className={styles.petIntroContainerLeft}>
                         <div className={styles.petImage}>
                              <Image 
                                  src={pet.image_url ?? placeholderImg}
                                  fill
                                  alt='Pet Image' 
                              />
                          </div>
                        </div>
                          <div className={styles.petIntroContainerRight}>
                            <h1>Ready to adopt {pet.name}?</h1>
                            <div className={styles.learnMoreBtn}>
                              <a href={`/about/adoption`}>Adoption Process</a>
                            </div>
                            <div className={styles.adoptionBtn}>
                              <a href={`/pets/${id}/adoption`}>Adopt {pet.name}</a>
                            </div>
                            <div className={styles.petInfoBtn}>
                              <a href="#petInfo">Learn more about {pet.name}</a>
                            </div>
                          </div>
                    </div>
                    <div className={styles.petInfo} id='petInfo'>
                        <div className={styles.petInfocontainerLeft}>
                          <h1>{pet.name}</h1>
                          <h4>{pet.description}</h4>
                          <p><strong>Age:</strong> {pet.age} years</p>
                          <p><strong>Gender:</strong> {pet.gender}</p>
                          <p><strong>Breed:</strong> {pet.breed}</p>
                          <p><strong>Species:</strong> {pet.species}</p>
                          <p><strong>Size:</strong> {pet.size}</p>
                          <p><strong>Adopted:</strong> {pet.adopted === true ? 'Yes' : 'No'}</p>
                          <p><strong>Adoption Fee:</strong> $450</p>
                          <p><strong>At shelter since: </strong>2025</p>

                        </div>
                        <div className={styles.petInfocontainerRight}>
                          <h1>About {pet.name}</h1>
                          <div>
                            <h2>Description</h2>
                            <p>{pet.long_description}</p>   
                          </div>
                          <div>
                            <h2>Characteristics</h2>
                            <p>{pet.characteristics}</p>
                          </div>
                          <div>
                            <h2>Health</h2>
                            <p>{pet.health}</p>
                          </div>
                          <div>
                            <h2>House trained</h2>
                            <p>{pet.house_trained === true ? "Yes" : "No"}</p>
                          </div>
                          <div>
                            <h2>Adoption Fee</h2>
                            <p>{pet.adoption_fee}</p>
                          </div>
                        </div>
                    </div> 

                    <div className={styles.petBanner}>
                      <h4>Check out these other pets that might fit your ideal companion</h4>
                      <div className={styles.petCarousel}>
                        <div className={styles.carouselCard}>Pet 1</div>
                        <div className={styles.carouselCard}>Pet 2</div>
                        <div className={styles.carouselCard}>Pet 3</div>
                      </div>
                      
                    </div>
                </div>
          </div>
        </div>
  );
}
