"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/constants/home-data";
import styles from "./projects.module.scss";
import Project from "./project";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
    const container = useRef<HTMLDivElement>(null);

    // Limit to 3 projects
    const visibleProjects = PROJECTS.slice(0, 3);

    return (
        <section className={styles.projects} ref={container}>
            {visibleProjects.map((project, index) => (
                <Project
                    key={project.id}
                    project={project}
                    index={index}
                    isLast={index === visibleProjects.length - 1}
                />
            ))}

            <div className={styles.viewAllParams}>
                <Link href="/projects" className={styles.viewAllBtn}>
                    View All Works
                </Link>
            </div>
        </section>
    );
}
