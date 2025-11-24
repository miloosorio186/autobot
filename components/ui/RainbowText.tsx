"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function RainbowText({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.to(".rainbow-text", {
            backgroundPosition: "200% 0%",
            duration: 4,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <strong
            className="
    rainbow-text
    inline-block font-semibold
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-pink-500 via-purple-500 to-blue-500
    bg-[length:200%_200%]
    "
        >
            {children}
        </strong>
    );

}