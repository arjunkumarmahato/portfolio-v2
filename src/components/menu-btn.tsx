import styles from "./menu-btn.module.scss";

interface MenuBtnProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function MenuBtn({ isOpen, toggle }: MenuBtnProps) {
    return (
        <div
            className={`${styles.menuBtn} ${isOpen ? styles.open : ''}`}
        >
            <button className={styles.menuIcon} onClick={toggle}>
                <span />
                <span />
            </button>
            {/* <div className={styles.menuText}>{isOpen ? 'Close' : 'Menu'}</div> */}
        </div>
    );
}
