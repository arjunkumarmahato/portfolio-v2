"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "./text-reveal.module.scss";

interface TextRevealProps {
    text: string;
    keywords?: string[];
    className?: string;
    containerHeight?: string;
}

export default function TextReveal({
    text,
    keywords = [],
    className = "",
    containerHeight = "400vh"
}: TextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordsRef = useRef<(HTMLDivElement | null)[]>([]);

    const words = text.split(/\s+/);

    useGSAP(() => {
        if (!containerRef.current) return;

        const words = wordsRef.current;
        const spans = words.map(word => word?.querySelector("span"));

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                start: "top top",
                end: `+=${containerHeight}`,
                scrub: 0.5,
            }
        });

        tl.set(words, { opacity: 0.1, backgroundColor: "rgba(255, 255, 255, 0)" });
        tl.set(spans, { opacity: 0 });

        tl.to(words, {
            opacity: 1,
            backgroundColor: "rgba(255, 255, 255, 1)",
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });

        tl.to(words, {
            backgroundColor: "rgba(255, 255, 255, 0)",
            duration: 1,
            stagger: 0.1,
            ease: "power2.in"
        }, "<0.5");

        tl.to(spans, {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.in"
        }, "<");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className={`${styles.section} ${className}`}>
            <div className={styles.copyContainer}>
                <div className={styles.animeText}>
                    <div className={styles.textContainer}>
                        {words.map((word, i) => {
                            const normalizedWord = word.toLowerCase().replace(/[.,!?::"]/g, "");
                            const isKeyword = keywords.includes(normalizedWord);
                            const specificClass = isKeyword && styles[normalizedWord] ? styles[normalizedWord] : "";

                            return (
                                <div
                                    key={i}
                                    ref={el => { wordsRef.current[i] = el; }}
                                    className={`${styles.word} ${isKeyword ? styles.keywordWrapper : ""}`}
                                    style={{ opacity: 0.1 }}
                                >
                                    <span className={`${isKeyword ? styles.keyword : ""} ${specificClass}`}>
                                        {word}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
