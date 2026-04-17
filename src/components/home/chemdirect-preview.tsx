"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Sparkles, Beaker } from "lucide-react";

export function ChemDirectPreview() {
    const [step, setStep] = useState<"idle" | "typing" | "analyzing" | "results">("idle");
    const [typedText, setTypedText] = useState("");
    const targetText = "Aspirin";

    useEffect(() => {
        let isMounted = true;
        
        const runAnimationCycle = async () => {
            while (isMounted) {
                // Reset state
                setStep("idle");
                setTypedText("");
                await new Promise((r) => setTimeout(r, 1000));
                if (!isMounted) break;
                
                // Typing animation
                setStep("typing");
                for (let i = 0; i <= targetText.length; i++) {
                    if (!isMounted) break;
                    setTypedText(targetText.slice(0, i));
                    await new Promise((r) => setTimeout(r, 150));
                }
                if (!isMounted) break;
                
                // Analyzing state
                setStep("analyzing");
                await new Promise((r) => setTimeout(r, 2000));
                if (!isMounted) break;
                
                // Show results
                setStep("results");
                await new Promise((r) => setTimeout(r, 5000));
            }
        };

        runAnimationCycle();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center p-6 bg-[#0a0a0a] overflow-hidden rounded-2xl text-white font-sans border border-white/10 shadow-2xl">
            {/* Dark gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f111a] via-[#0a0a0a] to-[#0a0a0a] z-0" />
            
            {/* Grid overlay for tech feel */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            {/* App UI Container */}
            <div className="relative z-10 w-full max-w-lg mt-8 md:mt-16 flex flex-col items-center isolate">
                
                {/* Search Bar Component */}
                <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`relative w-full bg-[#111] border rounded-full flex items-center px-5 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors duration-500 ${
                        step === 'analyzing' 
                            ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-blue-950/20' 
                            : 'border-white/10 hover:border-white/20'
                    }`}
                >
                    <Search className={`w-5 h-5 mr-3 transition-colors duration-500 ${step === 'analyzing' ? 'text-blue-400' : 'text-neutral-400'}`} />
                    <div className="flex-1 text-lg flex items-center">
                        <span className={typedText ? 'text-neutral-100' : 'text-neutral-600 font-light'}>
                            {typedText || "Search chemical registry..."}
                        </span>
                        {step === 'typing' && (
                            <motion.span 
                                animate={{ opacity: [1, 0] }} 
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
                                className="w-[2px] h-5 bg-blue-500 ml-1 rounded-sm"
                            />
                        )}
                    </div>
                </motion.div>

                {/* Loading / Analyzing State */}
                <div className="h-10 mt-6 flex items-center justify-center w-full">
                    <AnimatePresence mode="wait">
                        {step === 'analyzing' && (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="flex items-center gap-3 text-blue-400"
                            >
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span className="font-medium text-sm tracking-wide">AI Engine querying database...</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Results Container */}
                <div className="w-full flex-grow">
                    <AnimatePresence mode="wait">
                        {step === 'results' && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="w-full flex flex-col gap-4 text-left"
                            >
                                {/* Main Result Card */}
                                <div className="p-6 md:p-8 rounded-2xl bg-[#111111]/80 border border-white/10 backdrop-blur-md relative overflow-hidden group shadow-xl">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                                    
                                    <div className="flex justify-between items-start mb-5">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 tracking-tight">
                                                Aspirin <Sparkles className="w-5 h-5 text-blue-400" />
                                            </h3>
                                            <p className="text-blue-300/80 font-mono text-sm mt-2 tracking-wide">C9H8O4 • Acetylsalicylic acid</p>
                                        </div>
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                                            <Beaker className="w-7 h-7 text-neutral-300" />
                                        </div>
                                    </div>
                                    
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                        A medication used to reduce pain, fever, or inflammation. It acts as an irreversible inhibitor of the cyclooxygenase (COX) enzyme, specifically COX-1 and COX-2.
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {["Analgesic", "Anti-inflammatory", "Antipyretic"].map((tag, idx) => (
                                            <motion.span 
                                                key={tag} 
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                                className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Metrics Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="p-5 rounded-xl bg-[#111111]/80 border border-white/10 backdrop-blur-md"
                                    >
                                        <div className="text-xs text-neutral-500 mb-2 uppercase tracking-wider font-semibold">Molar Mass</div>
                                        <div className="text-xl font-bold text-neutral-200">180.159 <span className="text-sm font-medium text-neutral-500">g/mol</span></div>
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="p-5 rounded-xl bg-[#111111]/80 border border-white/10 backdrop-blur-md"
                                    >
                                        <div className="text-xs text-neutral-500 mb-2 uppercase tracking-wider font-semibold">Melting Point</div>
                                        <div className="text-xl font-bold text-neutral-200">136 <span className="text-sm font-medium text-neutral-500">°C</span></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Floating Caption Banner */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="px-5 py-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl text-xs md:text-sm text-neutral-300 font-medium tracking-wide shadow-2xl flex items-center gap-3"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-white font-semibold">Featured Project:</span> ChemDirect — AI Chemical Search
                </motion.div>
            </div>
        </div>
    );
}
