"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import Magnetic from "@/components/ui/magnetic"
import { Download } from "lucide-react"
import Image from "next/image"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full px-6 py-4 pointer-events-none">
            <div className="mx-auto max-w-5xl flex items-center justify-between p-2 pl-4 pr-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg pointer-events-auto">
                {/* ... logo ... */}
                <Magnetic>
                    <Link href="/" className="group flex items-center gap-2 px-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-neutral-200">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Link>
                </Magnetic>

                {/* ... nav links ... */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Magnetic key={item.name}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white font-sans",
                                )}
                            >
                                {item.name}
                            </Link>
                        </Magnetic>
                    ))}
                </nav>

                {/* ... mobile menu ... */}
                <div className="flex md:hidden">
                    <span className="text-white text-sm font-sans">Menu</span>
                </div>

                <Magnetic>
                    <Link href="#resume" className="ml-2 hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors font-sans">
                        <span>RESUME</span>
                        <Download className="w-4 h-4" />
                    </Link>
                </Magnetic>
            </div>
        </header>
    )
}
