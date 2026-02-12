"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "./menu.module.scss";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>(null);

    const line1 = useRef<HTMLDivElement>(null);
    const line2 = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(() => {
        // Initial state
        gsap.set(overlayRef.current, { yPercent: 100, opacity: 1 });
        gsap.set(backdropRef.current, { opacity: 0, pointerEvents: "none" });

        tl.current = gsap.timeline({ paused: true })
            .to(backdropRef.current, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.5,
                ease: "power2.out"
            })
            .to(overlayRef.current, {
                yPercent: 0,
                duration: 0.8,
                ease: "power4.out",
            }, "<")

            // Animate Lines to X
            .to(line1.current, {
                y: 4,
                rotation: 45,
                duration: 0.3
            }, "<")
            .to(line2.current, {
                y: -4,
                rotation: -45,
                duration: 0.3
            }, "<");

    }, { scope: container });

    const toggleMenu = contextSafe(() => {
        if (!isOpen) {
            setIsOpen(true);
            tl.current?.play();
        } else {
            setIsOpen(false);
            tl.current?.reverse();
        }
    });

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <div ref={container} className={styles.menu}>
            <div className={styles.label} onClick={toggleMenu}>
                <div ref={line1} className={styles.line} />
                <div ref={line2} className={styles.line} />
            </div>

            <div ref={backdropRef} className={styles.backdrop} onClick={toggleMenu} />

            <div ref={overlayRef} className={styles.sheet}>
                <div className={styles.handle} onClick={toggleMenu} />
                <Link href="/" className={`${styles.linkItem} ${isActive("/") ? styles.active : ""}`} onClick={toggleMenu}>Home</Link>
                <Link href="/about" className={`${styles.linkItem} ${isActive("/about") ? styles.active : ""}`} onClick={toggleMenu}>About</Link>
                <Link href="/projects" className={`${styles.linkItem} ${isActive("/projects") ? styles.active : ""}`} onClick={toggleMenu}>Projects</Link>
                <Link href="/contact" className={`${styles.linkItem} ${isActive("/contact") ? styles.active : ""}`} onClick={toggleMenu}>Contact</Link>
            </div>
        </div>
    )
}
