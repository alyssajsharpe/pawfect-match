export const dynamic = "force-dynamic";
import SideNav from "./components/dashboard/SideNav";
import MainNav from "./components/dashboard/MainNav";
import styles from './components/dashboard/dashboard.module.scss';
import pool from '@/lib/db';
import Pet from '../types/types';

export default async function Page(props: {
     searchParams?: Promise<{
      species: string, 
      gender: string, 
      sort: string, 
      size: string, 
      house_trained: string
     }>})
{
  try {
    const { species, gender, sort, size, house_trained } = await props.searchParams ?? {};

    let baseQuery = 'SELECT * FROM pets WHERE 1=1';
    const values: (string | number)[] = [];

    if (species) {
      values.push(species);
      baseQuery += ` AND species = $${values.length}`;
    }

    if (gender) {
      values.push(gender);
      baseQuery += ` AND gender = $${values.length}`;
    }

    if (sort === 'age_asc') {
      baseQuery += ' ORDER BY age ASC';
    } else if (sort === 'age_desc') {
      baseQuery += ' ORDER BY age DESC';
    }

    if (size === 'Small') {
      baseQuery += ' AND size < 25';
    } else if (size === 'Medium') {
      baseQuery += ' AND size >= 25 AND size <= 50';
    } else if (size === 'Large') {
      baseQuery += ' AND size > 50';
    }

    if (house_trained) {
      values.push(house_trained);
      baseQuery += ` AND house_trained = $${values.length}`;
    }

    console.log("Base query: ", baseQuery)

    const result = await pool.query<Pet>(baseQuery, values);
    const pets = result.rows;

    return (
      <div className={styles.dashboard}>
          <div className={styles.dashboardContainer}>
            <SideNav pets={pets}/>
            <MainNav pets={pets}/>
          </div>
      </div>
    );
  } catch (e) {
    console.log(e)
  }
}
