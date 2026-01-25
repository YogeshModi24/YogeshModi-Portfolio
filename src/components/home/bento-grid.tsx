"use client"
import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
    {
        title: "Project Nexus",
        description: "A next-generation AI interface for managing complex data streams in real-time.",
        tags: ["React", "AI", "Next.js"],
        featured: true,
        logo: "N",
        colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
        title: "Vortex Analytics",
        description: "Powerful dashboard for tracking social media metrics.",
        tags: ["SaaS", "Dashboard"],
        featured: false,
        logo: "V",
        colSpan: "md:col-span-1"
    },
    {
        title: "Aether UI",
        description: "A beautiful, lightweight component library for modern web apps.",
        tags: ["Design System", "Open Source"],
        featured: false,
        logo: "A",
        colSpan: "md:col-span-1"
    },
    {
        title: "Flow State",
        description: "Productivity app designed to keep you in the zone.",
        tags: ["Productivity", "Mobile"],
        featured: true,
        logo: "F",
        colSpan: "md:col-span-2" // Swapping grid position for variation
    },
    {
        title: "Quantum",
        description: "Fast messaging for developer teams.",
        tags: ["Real-time", "Socket"],
        featured: false,
        logo: "Q",
        colSpan: "md:col-span-1"
    },
    {
        title: "Lumina",
        description: "Image processing tool on the edge.",
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
