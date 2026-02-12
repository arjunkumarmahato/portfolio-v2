import Link from "next/link";
import styles from "./certifications.module.scss";

export default function Certifications() {
    return (
        <section className={styles.certifications}>
            <div className={styles.num}>05</div>
            <div className={styles.container}>
                <h2><span>05</span>Certifications</h2>
                <div className={styles.item}>
                    <img src="/images/certifications/deeplearningai.jpg" alt="DeepLearning.AI Logo" />
                    <div>
                        <div>
                            <h3>Machine Learning Specialization</h3>
                            <Link href="https://www.coursera.org/account/accomplishments/specialization/33WO2CDZGKSI">Certificate</Link>
                        </div>
                        <div>
                            <div>DeepLearning.AI, Stanford University</div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="/images/certifications/udemy.png" alt="Udemy Logo" />
                    <div>
                        <div>
                            <h3>The Ultimate React Course 2025: React, Next.js, Redux & More</h3>
                            <Link href="https://www.udemy.com/certificate/UC-a5e42dc6-d588-4a76-877d-bd4c4ca05760">Certificate</Link>
                        </div>
                        <div>
                            <div>Udemy, Jonas Schmedtmann</div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="/images/certifications/udemy.png" alt="Udemy Logo" />
                    <div>
                        <div>
                            <h3>Node.js, Express, MongoDB & More: The Complete Bootcamp</h3>
                            <Link href="https://www.udemy.com/certificate/UC-5995b752-c3d7-49ec-8255-e0e310609bff">Certificate</Link>
                        </div>
                        <div>
                            <div>Udemy, Jonas Schmedtmann</div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="/images/certifications/udemy.png" alt="Udemy Logo" />
                    <div>
                        <div>
                            <h3>Microservices with Node JS and React</h3>
                            <Link href="https://www.udemy.com/certificate/UC-a348970f-fce5-45d8-bcf1-13d0bb9e4e6c">Certificate</Link>
                        </div>
                        <div>
                            <div>Udemy, Stephen Grider</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}