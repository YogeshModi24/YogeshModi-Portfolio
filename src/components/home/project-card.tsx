"use client"
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { ArrowUpRight, BookOpen, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface CaseStudy {
    title: string
    content: React.ReactNode
}

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    href?: string
    logo?: React.ReactNode
    featured?: boolean
    className?: string
    caseStudy?: CaseStudy
}

export function ProjectCard({ title, description, tags, href = "#", logo, featured, className, caseStudy }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Prevent propagation when clicking the case study button
    const handleCaseStudyClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsModalOpen(true)
    }

    return (
        <>
            <Link href={href} className={cn("block h-full w-full", className)}>
                <Tilt
                    tiltMaxAngleX={featured ? 2 : 4}
                    tiltMaxAngleY={featured ? 2 : 4}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    scale={1.01}
                    className="w-full h-full"
                    transitionSpeed={2500}
                >
                    <div className="w-full h-full p-6 md:p-8 rounded-[2rem] bg-[#171717]/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-xl font-bold text-white shadow-inner">
                                    {logo || title[0]}
                                </div>
                                <div className="p-2 rounded-full border border-white/5 bg-white/5 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                            <h3 className={cn("font-bold text-white mb-2 tracking-tight", featured ? "text-3xl" : "text-xl")}>{title}</h3>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3">{description}</p>
                        </div>

                        <div className="relative z-10 mt-8 flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-neutral-300 backdrop-blur-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {caseStudy && (
                                <button
                                    onClick={handleCaseStudyClick}
                                    className="w-full mt-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group/btn"
                                >
                                    <BookOpen className="w-4 h-4 text-neutral-400 group-hover/btn:text-white transition-colors" />
                                    Read Technical Breakdown
                                </button>
                            )}
                        </div>
                    </div>
                </Tilt>
            </Link>

            <AnimatePresence>
                {isModalOpen && caseStudy && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-2xl bg-[#171717] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-neutral-400" />
                            </button>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{caseStudy.title}</h2>
                            <div className="h-1 w-20 bg-blue-500 rounded-full mb-8" />

                            <div className="prose prose-invert prose-neutral max-w-none">
                                {caseStudy.content}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
