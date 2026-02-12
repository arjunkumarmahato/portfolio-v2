"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScanlineOverlay from "./scanline-overlay";
import NumberTicker from "./number-ticker";

import styles from "./entry-loader.module.scss";

interface EntryLoaderProps {
    onFinished: () => void;
}

export default function EntryLoader({ onFinished }: EntryLoaderProps) {
    const [isReady, setIsReady] = useState(false);
    const [progress, setProgress] = useState(0);

    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleLoad = () => setIsReady(true);

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    useEffect(() => {
        if (!isReady) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 10) {
                    clearInterval(interval);
                    return 10;
                }
                return prev + 1;
            });
        }, 600);
        return () => clearInterval(interval);
    }, [isReady]);

    useGSAP(() => {
        if (!isReady) return;

        // EXIT SEQUENCE
        if (progress === 10) {
            const tl = gsap.timeline({ onComplete: onFinished, delay: 0.5 });

            tl.to(loaderRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    }, { dependencies: [progress, isReady], scope: loaderRef });

    return (
        <div ref={loaderRef} className={styles.loader}>
            <NumberTicker progress={progress} />
            <ScanlineOverlay />
        </div>
    );
}