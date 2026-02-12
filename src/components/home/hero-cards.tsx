"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./hero-cards.module.scss";
import { CARDS } from "@/constants/home-data";
import HeroCard from "./hero-card";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


interface HeroCardsProps {

    scrollContainer: HTMLElement | null;
}

export default function HeroCards({ scrollContainer }: HeroCardsProps) {
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!scrollContainer) return;

        // Select cards using a class selector scoped to cardsRef
        const cards = gsap.utils.toArray(`.${styles.cardWrapper}`) as HTMLElement[];
        if (!cards || cards.length < 3) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scrollContainer,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        });

        // Card 1 (Left) - Fan Out Left & Down
        tl.to(cards[0], {
            x: "90%",
            y: "85vh",
            rotation: -15,
            scale: 0.75,
            duration: 1
        }, 0);

        // Card 2 (Center) - Move Down only
        tl.to(cards[1], {
            scale: 0.75,
            y: "85vh",
            duration: 1
        }, 0.025);

        // Card 3 (Right) - Fan Out Right & Down
        tl.to(cards[2], {
            x: "-90%",
            y: "85vh",
            rotation: 15,
            scale: 0.75,
            duration: 1
        }, 0.05);

    }, { scope: cardsRef, dependencies: [scrollContainer] });

    return (
        <div ref={cardsRef} className={styles.cards}>
            {CARDS.map((card, index) => (
                <div
                    key={card.id}
                    className={`${styles.cardWrapper} ${styles[`card${index + 1}`]}`}
                    style={{ zIndex: 3 - index }} // Ensure explicit z-index if classes fail or for safety
                >
                    <div className={styles.floating} style={{ animationDelay: `${index * 0.5}s` }}>
                        <HeroCard
                            id={card.id}
                            title={card.title}
                            icon={card.icon}
                            className={card.accentClass} // Only accent class, positioning handled by wrapper
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
