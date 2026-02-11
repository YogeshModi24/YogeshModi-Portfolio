import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import React from "react";

interface ResumeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    className?: string;
    children?: React.ReactNode;
}

export function ResumeButton({
    className,
    href,
    children = "Resume",
    ...props
}: ResumeButtonProps) {
    const baseClasses = cn(
        "group relative inline-flex items-center justify-center gap-2",
        "px-6 py-3 rounded-full",
        "bg-zinc-900 text-zinc-100 font-semibold border border-zinc-800",
        "transition-all duration-300 ease-out",
        "hover:border-zinc-200 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        "focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-black", // Accessibility focus ring
        className
    );

    const content = (
        <>
            <span>{children}</span>
            <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={baseClasses}
                target="_blank"
                rel="noopener noreferrer"
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {content}
            </a>
        );
    }

    return (
        <button className={baseClasses} {...props}>
            {content}
        </button>
    );
}
