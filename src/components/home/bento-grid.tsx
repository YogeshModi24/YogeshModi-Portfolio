"use client"
import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
    {
        title: "ChemDirect",
        description: "Engineered an AI-powered chemical discovery platform using Next.js, enabling fast, accurate, and intuitive search of chemical data through a modern, performance-optimized interface.",
        tags: ["React", "AI", "Next.js"],
        href: "https://chem-d-irect.vercel.app/",
        featured: true,
        logo: "C",
        colSpan: "md:col-span-2 lg:col-span-2",
        caseStudy: {
            title: "Optimizing Intelligent Chemical Search",
            content: (
                <>
                    <p className="mb-4 text-neutral-300">
                        The primary challenge in ChemDirect was designing a system that could deliver fast and relevant chemical search results while maintaining a smooth and responsive user experience.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">The Solution</h3>

                    <p className="mb-4 text-neutral-300">
                        I developed an optimized frontend architecture using <strong>Next.js</strong> and <strong>React</strong>, focusing on efficient data handling and seamless UI interactions.
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-neutral-300 mb-6">
                        <li>Implemented <strong>debounced search</strong> to minimize unnecessary API calls and improve performance.</li>
                        <li>Designed a <strong>clean, user-centric interface</strong> for intuitive chemical lookup and navigation.</li>
                        <li>Optimized rendering using <strong>component-level state management</strong> to reduce re-renders.</li>
                        <li>Integrated <strong>AI-based search logic</strong> to improve relevance and accuracy of results.</li>
                        <li>Ensured fast load times using <strong>Next.js optimization techniques</strong> like lazy loading and efficient routing.</li>
                    </ul>

                    <p className="text-neutral-300">
                        This resulted in a scalable and responsive platform that enhances the efficiency of chemical data exploration.
                    </p>
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
