import { ReactNode } from "react";
import styles from "./hero-card.module.scss";

interface HeroCardProps {
    id: string;
    title: string;
    icon: string;
    className?: string;
    children?: ReactNode;
}

export default function HeroCard({ id, title, icon, className = "", children }: HeroCardProps) {
    const classes = className.split(" ")
        .map(c => styles[c] || c)
        .join(" ");

    return (
        <div className={`${styles.card} ${classes}`}>
            <div className={styles.inner}>
                <div className={styles.row}><img src={icon} alt="" /><span>{title}</span></div>

                {children ? children : <img src={icon} alt="" className={styles.centerIcon} />}

                <div className={styles.row}><span>{title}</span><img src={icon} alt="" /></div>
            </div>
        </div>
    );
}
