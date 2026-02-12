"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./cursor.module.scss";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // QuickTo for performant mouse tracking
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

        // Center the cursor visually
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        // Hover Effect on interactive elements
        const onHover = () => gsap.to(cursor, { scale: 3, duration: 0.3 });
        const onLeave = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

        // Add listeners to all interactive elements
        // This is a simple approach; for better performance in large apps, delegation or context is preferred.
        // But for a portfolio, querying usually works okay or using a specific selector.
        // Let's bind to common interactive elements.
        const interactives = document.querySelectorAll("a, button, input, textarea, select, [role='button']");

        interactives.forEach((el) => {
            el.addEventListener("mouseenter", onHover);
            el.addEventListener("mouseleave", onLeave);
        });

        // Cleanup function for listeners is tricky because elements might change.
        // A MutationObserver or event delegation on body is better for dynamic content.

        // Event Delegation for hover effects
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, input, textarea, select, [role='button']")) {
                onHover();
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, input, textarea, select, [role='button']")) {
                onLeave();
            }
        };

        // Clean up direct listeners if any (I didn't add them, I commented out logic).
        // Let's use the delegation approach.
        document.body.addEventListener("mouseover", handleMouseOver);
        document.body.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseover", handleMouseOver);
            document.body.removeEventListener("mouseout", handleMouseOut);
        };

    });

    return <div ref={cursorRef} className={styles.cursor} />;
}
