"use client"
import Link from 'next/link'
import { Play, FileText, Mic } from 'lucide-react'

const extras = [
    {
        title: "The Future of Frontend Development",
        type: "Article",
        icon: FileText,
        href: "#",
        date: "Oct 2025"
    },
    {
        title: "Building Bento Grids with Tailwind CSS",
        type: "Video",
        icon: Play,
        href: "#",
        date: "Sep 2025"
    },
    {
        title: "Design Systems in 2026",
        type: "Podcast",
        icon: Mic,
        href: "#",
        date: "Aug 2025"
    }
]

export function Extras() {
    return (
        <section id="extras" className="py-20 border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold mb-10 pl-2 border-l-4 border-white">Extras & Media</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extras.map((item, i) => (
                        <Link key={i} href={item.href} className="group p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/20 hover:bg-[#171717] transition-all flex flex-col justify-between h-56 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />

                            <div className="flex justify-between items-start relative z-10">
                                <div className="p-3 rounded-xl bg-white/5 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-neutral-600 text-sm font-mono border border-white/5 px-2 py-1 rounded-md">{item.date}</span>
                            </div>
                            <div className="relative z-10">
                                <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">{item.type}</div>
                                <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white transition-colors">{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
