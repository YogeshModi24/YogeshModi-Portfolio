"use client"

import React from 'react'

const skills = [
    { name: "React 19", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🌿" },
    { name: "GraphQL", icon: "◈" },
    { name: "Redux", icon: "🟣" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Figma", icon: "🖌️" },
    { name: "System Design", icon: "📐" },
    { name: "Performance", icon: "⚡" },
]

export const SkillsMarquee = () => {
    return (
        <div className="relative flex overflow-hidden py-8 border-y border-white/5 bg-black/40 backdrop-blur-sm z-20">
            <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max">
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <div key={index} className="mx-8 flex items-center gap-3 group cursor-default select-none">
                        <span className="text-neutral-500 group-hover:text-violet-400 transition-colors text-2xl filter drop-shadow-sm">
                            {skill.icon}
                        </span>
                        <span className="text-neutral-400 group-hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-semibold">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </div>
    )
}
