"use client"
import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    return (
        <footer id="contact" className="py-24 border-t border-white/10 bg-[#050505]">
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-3xl tracking-tight">
                    Ready to build something <span className="text-neutral-500">extraordinary?</span>
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                    I&apos;m currently available for freelance projects and open to full-time opportunities.
                </p>
                <div className="flex items-center gap-6 mb-20">
                    <Link href="mailto:hello@example.com" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-200 hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Mail className="w-5 h-5" /> Get in Touch
                    </Link>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Yogesh Modi. All rights reserved.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Github className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors transform hover:-translate-y-1"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
