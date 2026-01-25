"use client"
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    href?: string
    logo?: React.ReactNode
    featured?: boolean
    className?: string
}

export function ProjectCard({ title, description, tags, href = "#", logo, featured, className }: ProjectCardProps) {
    return (
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
                    <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-neutral-300 backdrop-blur-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Tilt>
        </Link>
    )
}
