import styles from "./experience.module.scss";

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.num}>01</div>
            <div className={styles.container}>
                <h2><span>01</span>Experience</h2>
                <div className={styles.item}>
                    <img src="/images/experience/bel.webp" alt="BEL Logo" />
                    <div>
                        <div>
                            <h3>Bharat Electronics Limited</h3>
                            <div>Panchkula, Haryana, India</div>
                        </div>
                        <div>
                            <div>Deputy Engineer <br />(Development and Engineering)</div>
                            <div>July 2025 - Present</div>
                        </div>
                        <ul>
                            <li>Designed mechanical components for electronic devices based on functional requirements.</li>
                            <li>Conducted mechanical testing in collaboration with cross-functional teams and analyzed performance
                                outcomes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}