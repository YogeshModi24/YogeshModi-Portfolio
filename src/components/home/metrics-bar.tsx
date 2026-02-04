"use client"

import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const stats = [
    { label: "Experience", value: "5+", sub: "Years" },
    { label: "Production", value: "20+", sub: "Projects" },
    {
        label: "Performance",
        value: "<1.5s",
        sub: "Avg. LCP",
        tooltip: "Consistently achieving sub-1.5s Largest Contentful Paint across production deployments via code-splitting and asset optimization."
    },
    { label: "Quality", value: "100%", sub: "Accessibility" },
]

export function MetricsBar() {
    return (
        <section className="w-full relative z-30 -mt-20 mb-10">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center md:items-start space-y-1 group relative z-10">
                                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium group-hover:text-neutral-400 transition-colors">
                                    {stat.label}
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent font-mono">
                                        {stat.value}
                                    </span>
                                    {stat.tooltip ? (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div className="flex items-center gap-1 cursor-help">
                                                        <span className="text-sm text-violet-400/80 font-medium border-b border-dotted border-violet-500/30">{stat.sub}</span>
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-xs bg-neutral-900 border-white/10 text-neutral-300">
                                                    <p>{stat.tooltip}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ) : (
                                        <span className="text-sm text-violet-400/80 font-medium">{stat.sub}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
