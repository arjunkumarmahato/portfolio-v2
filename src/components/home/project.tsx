"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./projects.module.scss";

interface ProjectProps {
    project: {
        id: string;
        title: string;
        category: string;
        description: string;
        year: string;
        image: string;
        link: string;
    };
    index: number;
    isLast: boolean;
}

export default function Project({ project, index, isLast }: ProjectProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        // 2. Rotation Animation (Inner Container)
        const inner = section.querySelector(`.${styles.projectContainer}`);

        // Ensure inner exists before animating
        if (inner) {
            gsap.fromTo(inner,
                { rotation: index % 2 === 0 ? 5 : -5, scale: 0.8 },
                {
                    rotation: 0,
                    scale: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom", // Start when top of section enters viewport
                        end: "top top",      // End when it hits the top (and gets pinned)
                        scrub: true
                    }
                }
            );
        }

        // 1. Pinning (Stacking Effect)
        // Skip pinning for the last one if that was the logic
        if (!isLast) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                scrub: true
            });
        }
    }, { scope: sectionRef, dependencies: [isLast, index] });

    return (
        <div className={styles.projectSection} ref={sectionRef}>
            <div className={`${styles.projectContainer} ${styles[`accent${(index % 3) + 1}`]}`}>
                <div className={styles.projectContent}>
                    <div className={styles.index}>
                        {(index + 1).toString().padStart(2, '0')}
                    </div>

                    <div className={styles.details}>
                        <div className={styles.header}>
                            <h2>{project.title}</h2>
                            <div className={styles.tags}>
                                <span>{project.year}</span>
                                <span className={styles.separator}>/</span>
                                <span>{project.category}</span>
                            </div>
                        </div>

                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.actions}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Visit Site
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.projectImageWrapper}>
                    <div className={styles.projectImage}>
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            </div>
        </div>
    );
}
