"use client";

import { useState } from "react";
import styles from "./hero.module.scss";
import HeroTitle from "./hero-title";
import HeroDetails from "./hero-details";
import HeroCards from "./hero-cards";

export default function Hero() {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    return (
        <main ref={(el) => setContainer(el)} className={styles.hero}>
            <HeroTitle />
            <HeroDetails />
            <HeroCards scrollContainer={container} />
        </main>
    );
}
