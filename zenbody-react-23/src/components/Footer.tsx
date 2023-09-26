import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.section}>
           <h1>Zenbody footer</h1>
           <div className={styles.content}>
                <ul className={styles.icon}>
                    <li><i className="bi bi-telephone-fill"></i><a> - zenbodyllcteam@gmail.com</a></li>
                    <li><i className="bi bi-envelope-heart-fill"></i><a> - zenbodyllcteam@gmail.com</a></li>
                    <li><i className="bi bi-instagram"></i><a> - zenbodyllcteam@gmail.com</a></li>
                    <li><i className="bi bi-twitter"></i><a> - zenbodyllcteam@gmail.com</a></li>
                    <li><i className="bi bi-facebook"></i><a> - zenbodyllcteam@gmail.com</a></li>
                </ul>
                <form className={styles.form}>
                    <h3>Subscribe Form</h3>
                    <input type='email' placeholder='Email Adress'/>
                    <button type='submit'>Submit</button>
                </form>
           </div>
           <p>©2023 by Cardinal Design, LLC</p>
        </footer>
    )
}