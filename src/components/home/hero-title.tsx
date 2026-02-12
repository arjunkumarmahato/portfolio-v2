import styles from "./hero-title.module.scss";

export default function HeroTitle() {
    return (
        <div className={styles.heroTitle}>
            {/* <h1><span>Arjun</span> <span>Mahato</span></h1> */}
            <h1>Arjun Mahato</h1>
        </div>
    );
}