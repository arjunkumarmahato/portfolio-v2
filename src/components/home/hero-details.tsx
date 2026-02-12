"use client";

import { useState, useEffect } from "react";
import styles from "./hero-details.module.scss";

export default function HeroDetails() {
    const [time, setTime] = useState("00:00 AM IST");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            };
            setTime(`${now.toLocaleTimeString("en-US", options)} IST`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // Update every second to catch minute changes accurately
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.heroDetails}>
            <div><img src="/icons/globe.svg" alt="" /><span>Based in India</span></div>
            <div>Portfolio 2026</div>
            <div><span>{time}</span></div>
        </div>
    );
}