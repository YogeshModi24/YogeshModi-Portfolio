"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import Magnetic from "@/components/ui/magnetic"

const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Extras", href: "#extras" },
    { name: "Media", href: "#media" },
    { name: "Resume", href: "#resume" },
    { name: "Contact Me", href: "#contact" },
]

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full px-6 py-4 pointer-events-none">
            <div className="mx-auto max-w-5xl flex items-center justify-between p-2 pl-4 pr-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg pointer-events-auto">
                <Magnetic>
                    <Link href="/" className="group flex items-center gap-2 px-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-neutral-200">
                            {/* Placeholder for logo */}
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black">
                                ZM
                            </div>
                        </div>
                    </Link>
                </Magnetic>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Magnetic key={item.name}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white",
                                )}
                            >
                                {item.name}
                            </Link>
                        </Magnetic>
                    ))}
                </nav>

                <div className="flex md:hidden">
                    {/* Mobile Menu Placeholder */}
                    <span className="text-white text-sm">Menu</span>
                </div>

                <Magnetic>
                    <Link href="#contact" className="ml-2 hidden md:block px-5 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors">
                        Let&apos;s Talk
                    </Link>
                </Magnetic>
            </div>
        </header>
    )
}
