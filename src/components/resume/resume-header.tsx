import Link from "next/link";
import styles from "./resume-header.module.scss";

export default function ResumeHeader() {
    return (
        <section className={styles.header}>
            <h1>Arjun <span>Mahato</span></h1>
            <div className={styles.details}>
                <div>
                    Panchkula, Haryana, India
                </div>
                <div className={styles.links}>
                    <Link href="tel:+916200341564">+91-6200341564</Link>
                    <Link href="mailto:arjunmahato.work@gmail.com">arjunmahato.work@gmail.com</Link>
                    <Link href="https://linkedin.com/in/arjunkumarmahato" target="_blank">linkedin.com/in/arjunkumarmahato</Link>
                    <Link href="https://github.com/arjunkumarmahato" target="_blank">github.com/arjunkumarmahato</Link>
                </div>
            </div>
        </section>
    );
}