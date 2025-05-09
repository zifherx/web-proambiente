import { TypeTransition } from "@/types/Props"

export interface AnimationState {
    y: number
    x: number
    opacity: number
    transition: TransitionFade
}

export interface TransitionFade {
    type: TypeTransition
    duration: number
    delay: number
    ease: number[]
}