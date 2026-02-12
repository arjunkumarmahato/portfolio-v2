import Link from "next/link";
import styles from "./achievements.module.scss";

export default function Achievements() {
    return (
        <section className={styles.achievements}>
            <div className={styles.num}>05</div>
            <div className={styles.container}>
                <h2><span>05</span>Achievements</h2>
                <ul>
                    <li>Expert on Codeforces : <Link href="https://codeforces.com/profile/Shanks_">Shanks_</Link> (Max. Rating: 1796).</li>
                    <li>Qualified for RMO (Regional Mathematics Olympiad).</li>
                </ul>
            </div>
        </section>
    );
}