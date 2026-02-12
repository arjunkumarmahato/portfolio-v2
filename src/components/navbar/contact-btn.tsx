import NavLink from "./nav-link"

import styles from "./contact-btn.module.scss"

export default function ContactBtn() {
    return (
        <NavLink href="/contact" className={styles.contactBtn}>
            <div>Get In Touch</div>
            <div><img src="/icons/arrow-right.svg" /></div>
        </NavLink>
    )
}