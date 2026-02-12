import styles from "./skills.module.scss";

export default function Skills() {
    return (
        <section className={styles.skills}>
            <div className={styles.num}>06</div>
            <div className={styles.container}>
                <h2><span>06</span>Skills</h2>
                <div>
                    <div>
                        <div>
                            <h3>Programming Languages</h3>
                            <ul>
                                <li>C/C++</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Golang</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Web Development</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>GSAP</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Machine Learning</h3>
                            <ul>
                                <li>NumPy</li>
                                <li>Pandas</li>
                                <li>Matplotlib</li>
                                <li>Seaborn</li>
                                <li>Scikit-Learn</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Databases</h3>
                            <ul>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Cassandra</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Tools and Technologies</h3>
                            <ul>
                                <li>Git and Github</li>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                                <li>Postman</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Languages</h3>
                            <ul>
                                <li>English (Professional Working Proficiency)</li>
                                <li>Hindi (Native)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}