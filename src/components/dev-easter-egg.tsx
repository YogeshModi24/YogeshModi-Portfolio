"use client"

import { useEffect } from "react"

export function DevEasterEgg() {
    useEffect(() => {
        console.log(
            "%c Hey! Like what you see? Check out the source code here: https://github.com/YogeshModi24/YogeshModi-Portfolio ",
            "background: #222; color: #bada55; font-size: 14px; padding: 10px; border-radius: 5px;"
        )
    }, [])

    return null
}
