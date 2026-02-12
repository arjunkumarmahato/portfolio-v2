import Link from "next/link"
import styles from "./nav-logo.module.scss"

export default function NavLogo() {
    return (
        <Link href="/" className={`${styles.navLogo}`}>
            <img src="/images/logo.png" alt="A" />
        </Link>
    )
}
