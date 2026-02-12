import styles from "./frame.module.scss";

export default function Frame() {
    return (
        <div className={styles.frame}>
            <div className={styles.frameTop}></div>
            <div className={styles.frameBottom}></div>
            <div className={styles.frameLeft}></div>
            <div className={styles.frameRight}></div>
        </div>
    )
}