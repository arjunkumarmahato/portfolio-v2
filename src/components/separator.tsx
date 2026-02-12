import { forwardRef } from "react";

import styles from "./separator.module.scss";

const Separator = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    return (
        <div
            ref={ref}
            className={styles.separator}
            {...props}
        >
            <div className={styles.line} />
            <div className={styles.line} />
        </div>
    );
});

Separator.displayName = "Separator";

export default Separator;
