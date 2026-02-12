"use client";

import NavLink from "./nav-link";

import styles from "./nav-menu.module.scss";

export default function NavMenu() {
    return (
        <div className={`${styles.navMenu}`}>
            <NavLink href="/"><img src="/icons/home.svg" alt="Home" /><span>Home</span></NavLink>
            <NavLink href="/resume"><img src="/icons/profile.svg" alt="Resume" /><span>Resume</span></NavLink>
            <NavLink href="/projects"><img src="/icons/cube.svg" alt="Projects" /><span>Projects</span></NavLink>
            <NavLink href="/canvas"><img src="/icons/canvas.svg" alt="Canvas" /><span>Canvas</span></NavLink>
        </div>
    )
}