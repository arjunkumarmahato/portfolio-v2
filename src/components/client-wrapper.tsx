"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import EntryLoader from "@/components/loader/entry-loader";
import Cursor from "@/components/cursor/cursor";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useGSAP(() => {
        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    });

    return (
        <>
            {isLoading && <EntryLoader onFinished={() => setIsLoading(false)} />}
            <Cursor />
            <div
                style={{
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {children}
            </div>
        </>
    );
}