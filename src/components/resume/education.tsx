import styles from "./education.module.scss";

export default function Education() {
    return (
        <section className={styles.education}>
            <div className={styles.num}>04</div>
            <div className={styles.container}>
                <h2><span>04</span>Education</h2>
                <div className={styles.item}>
                    <img src="/images/education/iitism.png" alt="IIT (ISM) Dhanbad Logo" />
                    <div>
                        <div>
                            <h3>IIT (ISM) Dhanbad</h3>
                            <div>Dhanbad, Jharkhand, India</div>
                        </div>
                        <div>
                            <div>B.Tech in Mechanical Engineering <br />(CGPA : 7.30/10.00)</div>
                            <div>November 2021 - May 2025</div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="/images/education/jnv.jpg" alt="JNV Logo" />
                    <div>
                        <div>
                            <h3>JNV Bangalore Urban</h3>
                            <div>Bangalore, Karnataka, India</div>
                        </div>
                        <div>
                            <div>Intermediate in Science <br />(Percentage : 92.6%)</div>
                            <div>June 2018 - April 2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}