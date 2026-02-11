"use client"

import { motion } from 'framer-motion'


import { ResumeButton } from '@/components/ui/resume-button'

const experiences = [
    {
        company: "Tech Frontier",
        role: "Lead Frontend Engineer",
        period: "2023 — Present",
        description: "Spearheaded the migration from a legacy monolith to a micro-frontend architecture using Next.js and Module Federation.",
        achievements: [
            "Reduced bundle size by 40% through aggressive tree-shaking and code-splitting.",
            "Mentored a team of 6 developers, implementing a standardized Design System (Aether UI).",
            "Achieved 98+ Lighthouse scores across all core product pages."
        ],
        stack: ["Next.js", "TypeScript", "AWS", "Framer Motion"]
    },
    {
        company: "Innovate Labs",
        role: "Senior Frontend Engineer",
        period: "2020 — 2023",
        description: "Scaled a SaaS platform from 10k to 100k+ active users while maintaining sub-2s page load times.",
        achievements: [
            "Architected a real-time collaboration engine using WebSockets and operational transforms.",
            "Reduced API response times by 60% through strategic caching and query optimization.",
            "Led the adoption of TypeScript across 15+ repositories, improving type safety and developer velocity."
        ],
        stack: ["React", "Redux", "GraphQL", "Docker"]
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-white/90">Professional Experience</h2>

            <div className="space-y-32">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8"
                    >
                        {/* Left Side: Sticky Info */}
                        <div className="md:col-span-4 md:sticky md:top-24 h-fit">
                            <span className="text-violet-400 font-mono text-sm tracking-widest uppercase">{exp.period}</span>
                            <h3 className="text-2xl font-bold text-white mt-2">{exp.company}</h3>
                            <p className="text-neutral-400 font-medium">{exp.role}</p>
                        </div>

                        {/* Right Side: Impact & Details */}
                        <div className="md:col-span-8 space-y-6">
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                {exp.description}
                            </p>

                            <ul className="space-y-4">
                                {exp.achievements.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group">
                                        <span className="mt-2 h-[1px] w-4 bg-violet-500/50 group-hover:w-6 transition-all" />
                                        <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stack Tags */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {exp.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Resume CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-20 pt-12 border-t border-white/5"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Want the full story?</h3>
                        <p className="text-neutral-400">Download my complete resume with detailed project breakdowns.</p>
                    </div>
                    <ResumeButton href="/resume.pdf">
                        Download Resume
                    </ResumeButton>
                </div>
            </motion.div>
        </section>
    )
}
