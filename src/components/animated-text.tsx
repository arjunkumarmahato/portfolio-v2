import React from "react";

import styles from "./animated-text.module.scss";

export default function AnimatedText({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.animatedText}>
            <div>{children}</div>
            <div>{children}</div>
        </div>
    )
}