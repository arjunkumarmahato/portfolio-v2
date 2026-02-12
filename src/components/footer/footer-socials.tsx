import styles from "./footer-socials.module.scss";
import { SOCIAL_LINKS } from "@/constants/contact-data";
import Image from "next/image";
import Magnetic from "@/components/common/magnetic";

export default function FooterSocials() {
    return (
        <div className={styles.footerSocials}>
            <h3>Socials</h3>
            <div><img src="/icons/arrow-up-right.svg" alt="" /><span>LinkedIn</span></div>
            <div><img src="/icons/arrow-up-right.svg" alt="" /><span>GitHub</span></div>
            <div><img src="/icons/arrow-up-right.svg" alt="" /><span>Instagram</span></div>
        </div>
    );
}
