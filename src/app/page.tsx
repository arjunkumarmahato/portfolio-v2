"use client";

import { useRef } from "react";
import styles from "./page.module.scss";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className={styles.home}>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}