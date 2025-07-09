'use client';

import styles from './side.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import Pet from '../../../types/types';

export default function SideNav({ pets }: { pets: Pet[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/?${params.toString()}`);
  };

  const resetFilters = () => {
    router.push(`/`);
  }

  return (
    <div className={styles.sideNav}>
      <div className={styles.sideNavContainer}>
        <h2>Filter Pets</h2>

        <div className={styles.filter}>
          <label>Type of animal</label>
          <select value={searchParams.get('species') || ''} onChange={(e) => handleChange('species', e.target.value)}>
            <option value=""> All</option>
            <option value="Dog"> Dog</option>
            <option value="Cat"> Cat</option>
            <option value="Rabbit"> Rabbit</option>
          </select>
        </div>

        <div className={styles.filter}>
          <label>Gender</label>
          <select value={searchParams.get('gender') || ''} onChange={(e) => handleChange('gender', e.target.value)}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className={styles.filter}>
          <label>Sort by age</label>
          <select value={searchParams.get('sort') || ''} onChange={(e) => handleChange('sort', e.target.value)}>
            <option value="">None</option>
            <option value="age_asc">Youngest First</option>
            <option value="age_desc">Oldest First</option>
          </select>
        </div>

        <div className={styles.filter}>
          <label>Sort by weight</label>
          <select value={searchParams.get('size') || ''} onChange={(e) => handleChange('size', e.target.value)}>
            <option value=""> All</option>
            <option value="Small"> Less than 25 lbs </option>
            <option value="Medium"> 26-50 lbs</option>
            <option value="Large"> 51+ lbs</option>
          </select>
        </div>

         <div className={styles.filter}>
          <label>House Trained</label>
          <select value={searchParams.get('house_trained') || ''} onChange={(e) => handleChange('house_trained', e.target.value)}>
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className={styles.resetBtn}>
            <button onClick={resetFilters}>Reset</button>
        </div>
      </div>
    </div>
  );
}
