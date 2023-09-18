import styles from '../styles/Slider.module.css'
import image from '../images/image_placeholder.jpg'

export default function Slider() {
    return (
        <section className={styles.container}>
            <div className={styles.slider_wrapper}>
                <div className={styles.slider}>
                            <img id='slide_1' src={image} alt='image placeholder'/>
                            <div className={styles.text}>
                                <div className={styles.hero_header}>
                                    <h2>Zenbody</h2>
                                    <p>Beauty Redefined</p>
                                </div>
                                <p>
                                    Filler content 
                                    Filler content Filler content Filler content
                                </p>
                                <button className={styles.btn}>Button</button>
                            </div>
                        <img id='slide_2' src={image} alt='image placeholder'/>
                        <img id='slide_3' src={image} alt='image placeholder'/>
                </div>
                <div className={styles.slider_nav}>
                    <a href='#slide_1'></a>
                    <a href='#slide_2'></a>
                    <a href='#slide_3'></a>
                </div>
            </div>
        </section>
    )
}