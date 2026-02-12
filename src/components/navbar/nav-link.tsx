"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import styles from "./nav-link.module.scss";

interface NavLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className?: string;
}

export default function NavLink({ children, href, ...props }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${styles.navLink} ${isActive ? styles.active : ""}`}
            {...props}
        >
            {children}
        </Link>
    );
}
