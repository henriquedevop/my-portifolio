"use client"

import Link from "next/link"
import { NavItem } from "./nav-items"

const NAV_ITEMS = [
    {label: 'Home', href: "/"},
    {label: 'Projetos', href: "/projects"},
]

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link className="font-medium text-indigo-600 text-lg" href="/">
                    <h3 className="font-mono text-purple-500">Henrique dev</h3>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => (
                        <NavItem {...item} key={item.label}/>
                    ))}
                </nav>
            </div>
        </header>
    )
}