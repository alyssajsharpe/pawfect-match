import styles from './side.module.scss';

export default function SideNav() {
    return (
        <div className={styles.sideNav}>
            <div className={styles.sideNavContainer}>
                <h2>Side navigation</h2>
                <div>
                    <li>Type of pet</li>
                    <li>Gender</li>
                    <li>Weight</li>
                    <li>Age</li>
                </div>
            </div>
        </div>
    )
}