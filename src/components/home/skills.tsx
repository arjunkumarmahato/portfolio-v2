"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./skills.module.scss";
import { CARDS } from "@/constants/home-data";
import HeroCard from "./hero-card";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
    const container = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const smoothStep = (n: number) => n * n * (3 - 2 * n);
        const mm = gsap.matchMedia();

        const serviceTrigger = skillsRef.current || `.${styles.skills}`;

        // DESKTOP ANIMATION
        mm.add("(min-width: 769px)", () => {
            // 2. SERVICES PINNING
            ScrollTrigger.create({
                trigger: serviceTrigger,
                start: "top top",
                end: `+=${window.innerHeight * 3}px`,
                pin: serviceTrigger,
                pinSpacing: true
            });

            // 2. POSITION FIXING (Keeps cards visible during scroll)
            ScrollTrigger.create({
                trigger: serviceTrigger,
                start: "top top",
                end: `+=${window.innerHeight * 3}px`,
                onLeave: () => {
                    const servicesSection = skillsRef.current;
                    if (!servicesSection) return;
                    const servicesRect = servicesSection.getBoundingClientRect();
                    const servicesTop = window.pageYOffset + servicesRect.top;

                    gsap.set(`.${styles.cards}`, {
                        position: "absolute",
                        top: servicesTop,
                        left: 0,
                        width: "100%",
                        height: "100vh"
                    });
                },
                onEnterBack: () => {
                    gsap.set(`.${styles.cards}`, {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh"
                    });
                }
            });

            // 3. CARD ANIMATIONS (Deck Effect)
            gsap.set(`.${styles.mainCard}`, {
                opacity: 0,
                y: "100%",
                scale: 0.5,
                transformOrigin: "center center"
            });

            ScrollTrigger.create({
                trigger: serviceTrigger,
                start: "top bottom",
                end: `+=${window.innerHeight * 3}`,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    // Header Entry
                    const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
                    const headerY = gsap.utils.interpolate("400%", "0%", smoothStep(headerProgress));
                    gsap.set(`.${styles.skillsHeader}`, { y: headerY });

                    // Cards Animation
                    const cardElements = container.current?.querySelectorAll(`.${styles.mainCard}`);
                    if (cardElements) {
                        cardElements.forEach((card, index) => {
                            const delay = index * 0.5;
                            const cardProgress = gsap.utils.clamp(0, 1, (progress - delay * 0.1) / (0.9 - delay * 0.1));
                            const innerCard = card.querySelector(`.${styles.flipCardInner}`);

                            // Desktop Logic
                            let y = cardProgress < 0.4 ? gsap.utils.interpolate("-100%", "50%", smoothStep(cardProgress / 0.4)) :
                                cardProgress < 0.6 ? gsap.utils.interpolate("50%", "0%", smoothStep((cardProgress - 0.4) / 0.2)) : "0%";

                            let scale = cardProgress < 0.4 ? gsap.utils.interpolate(0.25, 0.75, smoothStep(cardProgress / 0.4)) :
                                cardProgress < 0.6 ? gsap.utils.interpolate(0.75, 1, smoothStep((cardProgress - 0.4) / 0.2)) : 1;

                            let opacity = cardProgress < 0.2 ? smoothStep(cardProgress / 0.2) : 1;
                            let x, rotate, rotationY;

                            if (cardProgress < 0.6) {
                                x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
                                rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
                                rotationY = 0;
                            } else if (cardProgress < 1) { // 3D Flip Phase
                                const norm = (cardProgress - 0.6) / 0.4;
                                x = gsap.utils.interpolate(index === 0 ? "100%" : index === 1 ? "0%" : "-100%", "0%", smoothStep(norm));
                                rotate = gsap.utils.interpolate(index === 0 ? -5 : index === 1 ? 0 : 5, 0, smoothStep(norm));
                                rotationY = smoothStep(norm) * 180;
                            } else {
                                x = "0%"; rotate = 0; rotationY = 180;
                            }

                            gsap.set(card, { opacity, y, x, rotate, scale });
                            gsap.set(innerCard, { rotationY });
                        });
                    }
                }
            });
        });

        // MOBILE ANIMATION
        mm.add("(max-width: 768px)", () => {
            gsap.set(`.${styles.cards}`, {
                position: "relative",
                height: "auto",
                top: "auto",
                left: "auto",
                opacity: 1
            });

            const cards = gsap.utils.toArray(`.${styles.mainCard}`);

            // Clear any lingering desktop animations/transforms
            gsap.set(cards, { clearProps: "all" });

            // Set cards to be flipped (show back) on mobile
            const innerCards = gsap.utils.toArray(`.${styles.flipCardInner}`);
            gsap.set(innerCards, { rotationY: 180 });

            cards.forEach((card: any) => {
                gsap.fromTo(card, { opacity: 0, y: 50 }, {
                    opacity: 1, y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                });
            });
        });

    }, { scope: container });

    return (
        <div ref={container}>
            {/* Services Section */}
            <section className={styles.skills} ref={skillsRef}>
                <div className={styles.skillsHeader}>
                    {/* <h1>Stuff I make so you don&apos;t have to</h1> */}
                </div>
            </section>

            {/* Fixed Cards Deck Section */}
            <div className={styles.cards}>
                <div className={styles.cardsContainer}>
                    {CARDS.map((card, index) => (
                        <div
                            key={card.id}
                            className={styles.mainCard}
                            style={{
                                animationDelay: `${index * 0.25}s`,
                                zIndex: index
                            }}
                        >
                            <div className={styles.cardWrapper} style={{ animationDelay: `${index * 0.25}s` }}>
                                <div className={styles.flipCardInner}>
                                    {/* Front */}
                                    <div className={styles.flipCardFront}>
                                        <HeroCard
                                            id={card.id}
                                            title={card.title}
                                            icon={card.icon}
                                            className={card.accentClass}
                                        />
                                    </div>
                                    {/* Back */}
                                    <div className={styles.flipCardBack}>
                                        <div className={styles.cardTitle}>
                                            <img src={card.icon} alt="" />
                                            <span>{card.title}</span>
                                        </div>
                                        <div className={styles.cardCopy}>
                                            {card.copy.map((item, i) => (
                                                <p key={i}>{item}</p>
                                            ))}
                                        </div>
                                        <div className={styles.cardTitle}>
                                            <span>{card.title}</span>
                                            <img src={card.icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
