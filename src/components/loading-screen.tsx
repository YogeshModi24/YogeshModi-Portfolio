"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Counter animation
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 1
            })
        }, 20)

        // Wait for window load and minimum display time
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2200) // Ensure counter reaches 100 and holds briefly
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => {
            clearInterval(interval)
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
                >
                    <div className="overflow-hidden h-20">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-6xl font-mono font-bold text-white"
                        >
                            {count}%
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-violet-400 uppercase tracking-widest text-xs mt-4"
                    >
                        Initializing Systems...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
