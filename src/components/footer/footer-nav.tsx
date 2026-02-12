import Link from "next/link";

import styles from "./footer-nav.module.scss";

export default function FooterNav() {
    return (
        <nav className={styles.footerNav}>
            <h3>Navigation</h3>
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/canvas">Canvas</Link>
        </nav>
    );
}
