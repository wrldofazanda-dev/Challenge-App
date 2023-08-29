import styles from './Banner.module.css'
import backgroundImage from '../../Assets/Images/JoseMourinho.jpg'

const Banner = () => {
    return ( 
        <div className={styles.imageSection}>
            <div className={styles.overlay}>
            <h1 className={styles.overlayText}>Live with Confidence</h1>
            <p className={styles.overlaySubText}>Jose Murinho brings confidence to pan-African Sanlam campaign</p>
            <button className={styles.overlayButton}>Learn More</button>
            </div>
            <img src={backgroundImage} alt="Background" className={styles.backgroundImage} />
        </div>
    )
}

export default Banner