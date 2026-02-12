"use client";

import { usePathname } from "next/navigation";
import NavLogo from "./nav-logo";
import ContactBtn from "./contact-btn";
import NavMenu from "./nav-menu";

import styles from "./navbar.module.scss";

export default function Navbar() {
    const pathname = usePathname();

    if (pathname === "/resume") return null;

    return (
        <nav className={styles.navbar}>
            <NavLogo />
            <NavMenu />
            <ContactBtn />
        </nav>
    )
}