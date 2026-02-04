"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Magnetic from "@/components/ui/magnetic"
import { Download } from "lucide-react"
import Image from "next/image"

const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
]

export function Header() {
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        document.querySelectorAll("section[id], div[id='home']").forEach((section) => {
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

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
                    {navItems.map((item) => {
                        // Extract id from href (e.g., "/#projects" -> "projects")
                        const itemId = item.href.split("#")[1]
                        const isActive = activeSection === itemId

                        return (
                            <Magnetic key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full font-sans",
                                        isActive
                                            ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                            : "text-neutral-400 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </Magnetic>
                        )
                    })}
                </nav>

                {/* ... mobile menu ... */}
                <div className="flex md:hidden">
                    <span className="text-white text-sm font-sans">Menu</span>
                </div>

                <Magnetic>
                    <Link
                        href="#resume"
                        className="ml-2 hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all duration-300 font-sans border-0"
                    >
                        <span>RESUME</span>
                        <Download className="w-4 h-4" />
                    </Link>
                </Magnetic>
            </div>
        </header>
    )
}
