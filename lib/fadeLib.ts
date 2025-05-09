import { Position } from "@/types/Props"

export const fadeIn = (position: Position, delay?: number) => {
    return {
        hidden: {
            x: position === "bottom" ? -80 : 0,
            y: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.5,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.25]
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay ? delay : 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}