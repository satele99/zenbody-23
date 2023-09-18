
import styles from '../styles/Services.module.css'
import image from '../images/image_placeholder.jpg'
export default function Services() {
    return (
        <section className={styles.section}>
            <h1>Services We Offer</h1>
            <div className={styles.wrapper}>
                <div className={styles.service_card}>
                    <div className={styles.text_box}>
                        <h3>Header</h3>
                        <p>Content Body</p>
                        <button className={styles.btn}>Button</button>
                    </div>
                    <img src={image} style={{width: '50%'}}/>
                </div>
                <div className={styles.service_card}>
                    <img src={image} style={{width: '50%'}}/>
                    <div className={styles.text_box}>
                        <h3>Header</h3>
                        <p>Content Body</p>
                        <button className={styles.btn}>Button</button>
                    </div>
                </div>
                <div className={styles.service_card}>
                    <div className={styles.text_box}>
                        <h3>Header</h3>
                        <p>Content Body</p>
                        <button className={styles.btn}>Button</button>
                    </div>
                    <img src={image} style={{width: '50%'}}/>
                </div>
            </div>
            
        </section>
    )
}