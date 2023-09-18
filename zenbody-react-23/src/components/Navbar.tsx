import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <h1>Zenbody Spa</h1>
            </div>
            <ul className={styles.nav_links}>
                <li>Home</li>
                <li>Schedule Appointment</li>
                <li>Plans & Pricing</li>
                <li>Shop</li>
            </ul>
            <ul className={styles.nav_links}>
                <li><i className="bi bi-instagram"></i></li>
                <li><i className="bi bi-bag"></i></li>
            </ul>
        </nav>
    )
}