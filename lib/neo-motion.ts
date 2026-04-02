import type { Transition, Variants } from "framer-motion"

/** Chunky spring — reads “stamped / sticker” not floaty */
export const neoSpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
  mass: 0.88,
}

export const neoSpringSnappy: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 32,
  mass: 0.75,
}

export const neoTapTransition: Transition = {
  type: "spring",
  stiffness: 600,
  damping: 35,
}

/** Press-down motion for buttons / neo links (Framer). */
export const neoWhileTapPress = {
  scale: 0.96,
  x: 3,
  y: 3,
  transition: neoTapTransition,
} as const

/** Stronger press for large offset shadows (pills, FAB). */
export const neoWhileTapPressDeep = {
  scale: 0.96,
  x: 5,
  y: 5,
  transition: neoTapTransition,
} as const

export function neoWhileTap(reduce: boolean | null | undefined) {
  return reduce === true ? undefined : neoWhileTapPress
}

export function neoWhileTapDeep(reduce: boolean | null | undefined) {
  return reduce === true ? undefined : neoWhileTapPressDeep
}

export function neoStagger(delayChildren = 0.06, stagger = 0.075): Transition {
  return { delayChildren, staggerChildren: stagger }
}

export const neoFadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: neoSpring,
  },
}

export const neoPop: Variants = {
  hidden: { opacity: 0, scale: 0.94, rotate: -0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: neoSpring,
  },
}

export const neoSlideX: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: neoSpring,
  },
}

export const neoContainer: Variants = {
  hidden: {},
  visible: {
    transition: neoStagger(0.05, 0.07),
  },
}
