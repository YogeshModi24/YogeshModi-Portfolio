"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                                Hey, I&apos;m <span className="text-neutral-400">Yogesh</span>.
                            </h1>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-8 leading-relaxed">
                                A Lead Frontend Engineer & UI/UX Designer specialized in building performant, pixel-perfect web experiences. <br className="hidden md:block" />
                                Here, you can check out what I&apos;m working on.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <Link href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                    View Projects <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#contact" className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors">
                                    Contact Me
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-64 h-64 md:w-96 md:h-96 mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder color block - User should replace with image */}
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-500 font-medium">
                                    [Your Profile Photo]
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
