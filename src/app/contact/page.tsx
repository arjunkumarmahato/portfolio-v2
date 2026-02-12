"use client";

import styles from "./page.module.scss";
import { SOCIAL_LINKS, EMAIL } from "@/constants/contact-data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Contact() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            setTime(date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Kolkata",
                hour12: false
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.contact}>
            <div className={styles.gridContainer}>
                {/* Header Section: Title & Profile */}
                <div className={styles.headerSection}>
                    <div className={styles.titleWrapper}>
                        <h1>
                            <span>Get in</span>
                            <span>Touch</span>
                        </h1>
                    </div>
                    <div className={styles.profileWrapper}>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/am.png"
                                alt="Arjun Mahato"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Info Bar: Location & Time */}
                <div className={styles.infoBar}>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Location</span>
                        <span className={styles.value}>India</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Local Time</span>
                        <span className={styles.value}>{time} IST</span>
                    </div>
                </div>

                {/* Main Contact Section */}
                <div className={styles.contactSection}>
                    <div className={styles.emailWrapper}>
                        <a href={`mailto:${EMAIL}`} className={styles.email}>
                            {EMAIL}
                        </a>
                    </div>
                    <div className={styles.phoneWrapper}>
                        <a href="tel:+916200341564" className={styles.phone}>
                            +91 6200 341 564
                        </a>
                    </div>
                    <p className={styles.tagline}>
                        Open for Freelance & Full-time opportunities
                    </p>
                </div>

                {/* Footer: Socials */}
                <div className={styles.footerSection}>
                    <div className={styles.socialGrid}>
                        {SOCIAL_LINKS.map((link, index) => {
                            const iconName = link.name.toLowerCase();
                            return (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                    <span className={styles.socialName}>{link.name}</span>
                                    <Image
                                        src={`/icons/${iconName}.svg`}
                                        alt={link.name}
                                        width={20}
                                        height={20}
                                        className={styles.socialIcon}
                                    />
                                </a>
                            )
                        })}
                    </div>
                    <div className={styles.copyright}>
                        © 2026 Arjun Mahato
                    </div>
                </div>
            </div>
        </main>
    );
}
