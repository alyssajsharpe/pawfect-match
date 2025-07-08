import Image from "next/image";
import SideNav from "./components/dashboard/SideNav";
import MainNav from "./components/dashboard/MainNav";
import styles from './components/dashboard/dashboard.module.scss';

export default function Home() {
  return (
    <>
    <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
          <SideNav/>
          <MainNav/>
        </div>
    </div>
    </>
  );
}
