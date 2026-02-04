"use client"
import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
    {
        title: "Project Nexus",
        description: "AI-Driven Data Orchestration: Engineered a low-latency interface using Next.js and WebSockets to visualize complex AI data streams in real-time.",
        tags: ["React", "AI", "Next.js"],
        featured: true,
        logo: "N",
        colSpan: "md:col-span-2 lg:col-span-2",
        caseStudy: {
            title: "Scaling Real-Time State Sync",
            content: (
                <>
                    <p className="mb-4 text-neutral-300">
                        The core challenge of Project Nexus was handling a massive influx of data points (500k/sec) without freezing the UI or causing memory leaks.
                    </p>
                    <h3 className="text-xl font-bold text-white mt-6 mb-2">The Solution</h3>
                    <p className="mb-4 text-neutral-300">
                        I implemented a <strong>Web Worker</strong> based architecture to offload data parsing and formatting from the main thread. This allowed the UI to remain responsive even during heavy data bursts.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-300 mb-6">
                        <li>Used <strong>SharedArrayBuffer</strong> for zero-copy data transfer between worker and main thread.</li>
                        <li>Implemented a custom <strong>visual scheduling system</strong> using requestAnimationFrame to batch updates, ensuring we only rendered at 60fps regardless of data velocity.</li>
                        <li>Reduced main thread blocking time by <strong>92%</strong>.</li>
                    </ul>
                </>
            )
        }
    },
    {
        title: "Vortex Analytics",
        description: "High-Scale Analytics: Architected a modular dashboard system that reduced API overhead by 35% using custom SWR caching strategies.",
        tags: ["SaaS", "Dashboard"],
        featured: false,
        logo: "V",
        colSpan: "md:col-span-1"
    },
    {
        title: "Aether UI",
        description: "Design Systems at Scale: Developed a headless UI component library focused on strict Type-safety, accessibility (WCAG 2.1), and tree-shaking optimization.",
        tags: ["Design System", "Open Source"],
        featured: false,
        logo: "A",
        colSpan: "md:col-span-1"
    },
    {
        title: "Flow State",
        description: "Developed a distraction-free productivity suite, scaling to 50k monthly active users with 99.9% uptime.",
        tags: ["Productivity", "Mobile"],
        featured: true,
        logo: "F",
        colSpan: "md:col-span-2", // Swapping grid position for variation
        caseStudy: {
            title: "Optimizing for Low-End Devices",
            content: (
                <>
                    <p className="mb-4 text-neutral-300">
                        Flow State needed to run smoothly on a wide range of devices, including older mobile phones. The initial React implementation suffered from re-render cascades.
                    </p>
                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Technical Approach</h3>
                    <p className="mb-4 text-neutral-300">
                        I restructured the state management to use <strong>fine-grained signals</strong> instead of global context providers, which eliminated unnecessary re-renders.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-300 mb-6">
                        <li>Implemented <strong>virtualized lists</strong> for complex task views, keeping DOM node count under 500.</li>
                        <li>Used <strong>Service Workers</strong> to cache assets and API responses, enabling full offline functionality.</li>
                        <li>Achieved a <strong>98 Lighthouse performance score</strong> on mobile.</li>
                    </ul>
                </>
            )
        }
    },
    {
        title: "Quantum",
        description: "Engineered a high-concurrency messaging engine supporting 10k simultaneous connections via WebSockets.",
        tags: ["Real-time", "Socket"],
        featured: false,
        logo: "Q",
        colSpan: "md:col-span-1"
    },
    {
        title: "Lumina",
        description: "Implemented client-side WASM image processing, offloading 80% of server compute costs.",
        tags: ["WASM", "Rust"],
        featured: false,
        logo: "L",
        colSpan: "md:col-span-1"
    }
]

export function BentoGrid() {
    return (
        <section id="projects" className="py-10 mb-20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
                    <p className="text-neutral-400 text-lg max-w-xl">A selection of my favorite projects, from complex web apps to simple utilities.</p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className={project.colSpan}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
