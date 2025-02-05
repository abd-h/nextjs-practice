'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

import classses from './header.module.css';

export default function NavLinks({ children, href }) {
    const pathname = usePathname();
   
    return (
        <Link href={ href } className={ pathname.startsWith(href) ? classses.active : undefined }>
        {children}
        </Link>
    )
}