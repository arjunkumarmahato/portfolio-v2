"use client";

import styles from "./footer.module.scss";
import FooterContact from "./footer-contact";
import FooterNav from "./footer-nav";
import FooterSocials from "./footer-socials";
import FooterAddress from "./footer-address";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === "/resume") return null;

    return (
        <footer className={styles.footer}>
            <div className={styles.footerDetails}>
                <FooterContact />
                <FooterAddress />
                <FooterNav />
                <FooterSocials />
            </div>
        </footer>
    );
}
