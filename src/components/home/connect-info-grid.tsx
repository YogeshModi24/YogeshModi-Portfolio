"use client"

import React from 'react'
import { MapPin, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'

const techCategories = [
    {
        name: "Core",
        skills: ['React 19', 'Next.js (App Router)', 'TypeScript']
    },
    {
        name: "State & Data",
        skills: ['Redux Toolkit', 'TanStack Query', 'GraphQL']
    },
    {
        name: "Performance & Ops",
        skills: ['AWS', 'Docker', 'CI/CD Pipelines', 'Lighthouse Optimization']
    }
]

export function ConnectInfoGrid() {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    {/* Location Card */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt
                            tiltMaxAngleX={4}
                            tiltMaxAngleY={4}
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            scale={1.01}
                            className="h-full"
                        >
                            <div className="h-full p-8 rounded-[2rem] bg-[#171717]/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center group overflow-hidden relative text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <div className="w-20 h-20 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                                        <MapPin className="text-white w-10 h-10 relative z-10" />
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Based in Delhi</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">Open to remote work</p>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Tech Arsenal Card */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <Tilt
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            scale={1.01}
                            className="h-full"
                        >
                            <div className="h-full p-8 rounded-[2rem] bg-[#171717]/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Tech Arsenal</h3>
                                    <p className="text-neutral-400 text-sm mb-8">Full Lifecycle Engineering</p>

                                    <div className="flex flex-col gap-6">
                                        {techCategories.map((category) => (
                                            <div key={category.name}>
                                                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">{category.name}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-md hover:bg-white/10 transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex items-center gap-4 opacity-30">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Stack Overview</span>
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Connect Card */}
                    <div id="contact" className="md:col-span-1 lg:col-span-1">
                        <Tilt
                            tiltMaxAngleX={4}
                            tiltMaxAngleY={4}
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            scale={1.01}
                            className="h-full"
                        >
                            <div className="h-full p-8 rounded-[2rem] bg-[#171717]/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 h-full flex flex-col items-center">
                                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight text-center">Connect</h3>
                                    <p className="text-neutral-400 text-sm mb-8 text-center">Socials</p>

                                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                                        <Link href="#" className="aspect-square rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:text-black transition-all group/icon">
                                            <Github className="w-6 h-6" />
                                        </Link>
                                        <Link href="#" className="aspect-square rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] hover:text-white transition-all group/icon">
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                        <Link href="#" className="aspect-square rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:text-black transition-all group/icon">
                                            <Mail className="w-6 h-6" />
                                        </Link>
                                        <Link href="#" className="aspect-square rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:shadow-[0_0_20px_rgba(29,161,242,0.3)] hover:text-white transition-all group/icon">
                                            <Twitter className="w-6 h-6" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Resume Card */}
                    <div className="md:col-span-4 lg:col-span-4">
                        <Tilt
                            tiltMaxAngleX={1}
                            tiltMaxAngleY={1}
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            scale={1.005}
                            className="w-full"
                        >
                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#171717]/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all group overflow-hidden relative cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">Get Resume</h3>
                                        <p className="text-neutral-400 text-lg">Full profile in a clean PDF download.</p>
                                    </div>

                                    <button className="relative px-10 py-5 rounded-full bg-white text-black font-bold text-lg flex items-center gap-3 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                        <Download className="w-6 h-6" />
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                </div>
            </div>
        </section>
    )
}
