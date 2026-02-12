import styles from "./experience.module.scss";

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.num}>01</div>
            <div className={styles.container}>
                <h2><span>01</span>Experience</h2>
                <div className={styles.item}>
                    <div>
                        <h3><img src="/images/experience/bel.webp" alt="BEL Logo" /><span>Bharat Electronics Limited</span></h3>
                        <div>Panchkula, Haryana, India</div>
                    </div>
                    <div>
                        <div>Deputy Engineer (Development and Engineering)</div>
                        <div>July 2025 - Present</div>
                    </div>
                    <ul>
                        <li>Designed mechanical components for electronic devices based on functional requirements.</li>
                        <li>Conducted mechanical testing in collaboration with cross-functional teams and analyzed performance
                            outcomes.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}