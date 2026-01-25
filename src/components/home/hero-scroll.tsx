"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroScroll() {
    return (
        <div className="flex flex-col overflow-hidden bg-background">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                            Hey, I&apos;m <span className="text-neutral-400">Yogesh</span>. <br />
                            <span className="text-xl md:text-3xl font-semibold text-neutral-500 mt-4 block">
                                Lead Frontend Engineer & UI/UX Designer
                            </span>
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10">
                            <Link href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="#contact" className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors">
                                Contact Me
                            </Link>
                        </div>
                    </>
                }
            >
                <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
