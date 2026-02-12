import Link from "next/link";

import styles from "./projects.module.scss";

export default function Projects() {
    return (
        <section className={styles.projects}>
            <div className={styles.num}>03</div>
            <div className={styles.container}>
                <h2><span>03</span>Projects</h2>
                <div className={styles.item}>
                    <div>
                        <h3>Relay <span>: Real-time Chat Platform</span></h3>
                        <Link href="https://github.com/arjunkumarmahato/relay">Github</Link>
                    </div>
                    <ul>
                        <li><b>Technology Stack</b> : React.js, Tailwind CSS, Node.js, Express.js, TypeScript, Golang, PostgreSQL, Cassandra, Redis,
                            WebSockets, Kafka, NGINX, Docker.</li>
                        <li>Built a real-time chat platform usingWebSockets, with Go services handling low-latency message delivery.</li>
                        <li>Developed microservices in Node.js for user authentication and chat history management.</li>
                        <li>Designed a scalable data layer using PostgreSQL for user data and Cassandra for high-volume chat messages.</li>
                        <li>Created a responsive frontend using React.js and TypeScript with real-time updates and online status tracking.</li>
                        <li>Orchestrated the entire infrastructure using Docker and NGINX as a reverse proxy API gateway.</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div>
                        <h3>Nexis <span>: AI-powered Search Platform</span></h3>
                        <Link href="https://github.com/arjunkumarmahato/nexis">Github</Link>
                    </div>
                    <ul>
                        <li><b>Technology Stack</b> : Next.js, Tailwind CSS, Node.js, Express.js, TypeScript, LangChain, OpenAI, Socket.io, Docker.</li>
                        <li>Developed a multi-modal search platform supporting text, image, and video queries within a single interface.</li>
                        <li>Integrated LLM-powered agents using LangChain for intelligent query understanding and context-aware
                            responses.</li>
                        <li>Implemented real-time AI response streaming usingWebSockets to enhance interactivity and user experience.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}