"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Mock video previews for projects - easily replaceable with real mp4/webm clips
const introProjects = [
    {
        title: "ChemDirect — AI Chemical Search",
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-3135-large.mp4"
    },
    {
        title: "AI Resume Analyzer",
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-226-large.mp4"
    }
];

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showName, setShowName] = useState(false);
    const [skipped, setSkipped] = useState(false);

    useEffect(() => {
        if (skipped) return;

        const durationPerVideo = 1000; // 1 second per video
        let timeoutIds: NodeJS.Timeout[] = [];

        // Preload videos for smoother transition
        if (typeof window !== "undefined") {
            introProjects.forEach((proj) => {
                const vid = document.createElement("video");
                vid.src = proj.videoSrc;
                vid.preload = "auto";
            });
        }

        const runSequence = async () => {
            // Loop through videos
            for (let i = 0; i < introProjects.length; i++) {
                setCurrentIndex(i);
                await new Promise((r) => {
                    const id = setTimeout(r, durationPerVideo);
                    timeoutIds.push(id);
                });
                if (skipped) return;
            }

            // Show final name slate
            setShowName(true);
            await new Promise((r) => {
                const id = setTimeout(r, 1200); // 1.2 seconds for name
                timeoutIds.push(id);
            });

            if (!skipped) {
                setIsLoading(false);
            }
        };

        // Lock scroll during loading
        document.body.style.overflow = "hidden";

        // Slight initial delay to ensure mount
        const startId = setTimeout(() => {
            runSequence();
        }, 100);
        timeoutIds.push(startId);

        return () => {
            timeoutIds.forEach(clearTimeout);
            document.body.style.overflow = "auto"; // Re-enable scroll when unmounted
        };
    }, [skipped]);

    const handleSkip = () => {
        setSkipped(true);
        setIsLoading(false);
        document.body.style.overflow = "auto";
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] bg-[#050505] text-white flex items-center justify-center overflow-hidden"
                >
                    {/* Cinematic Grain/Noise Overlay */}
                    <div
                        className="absolute inset-0 z-20 opacity-20 pointer-events-none mix-blend-overlay"
                        style={{
                            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"
                        }}
                    ></div>

                    {/* Skip Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        onClick={handleSkip}
                        className="absolute top-6 right-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:bg-white/10 transition-colors text-[10px] tracking-widest uppercase font-mono text-neutral-400 hover:text-white group"
                    >
                        Skip Intro <X className="w-3 h-3 group-hover:scale-110 transition-transform" />
                    </motion.button>

                    {/* Fullscreen Video Background */}
                    <div className="absolute inset-0 z-0 bg-black">
                        <AnimatePresence initial={false}>
                            {!showName && (
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <video
                                        src={introProjects[currentIndex].videoSrc}
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                        className="w-full h-full object-cover opacity-50 mix-blend-screen"
                                    />
                                    {/* Vignette Overlay for cinematic depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Typography Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16 pb-20">
                        <AnimatePresence mode="wait">
                            {!showName ? (
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter text-white">
                                        {introProjects[currentIndex].title.split('—')[0].trim()}
                                    </h2>
                                    <p className="text-sm md:text-xl text-neutral-400 font-light mt-3 tracking-wide font-mono uppercase">
                                        {introProjects[currentIndex].title.split('—')[1]?.trim()}
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="name"
                                    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex items-center justify-center flex-col gap-6"
                                >
                                    {/* Line Reveal */}
                                    <motion.div 
                                        className="w-16 h-[1px] bg-white opacity-50 block mb-2" 
                                        initial={{ width: 0 }}
                                        animate={{ width: 64 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    />
                                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                                        YOGESH MODI
                                    </h1>
                                    <motion.p 
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="text-neutral-500 font-mono tracking-[0.25em] text-xs md:text-sm uppercase"
                                    >
                                        Building Scalable Web & AI Solutions
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
