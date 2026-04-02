"use client"

import { motion, useReducedMotion } from "framer-motion"
import { neoSpring } from "@/lib/neo-motion"
import { cn } from "@/lib/utils"

type NeoRevealProps = {
  children: React.ReactNode
  className?: string
  /** Viewport amount 0–1 */
  amount?: number | "some" | "all"
  delay?: number
}

/** Scroll-in block: hard snap, offset slide — neobrutalist, not soft fade */
export function NeoReveal({
  children,
  className,
  amount = 0.2,
  delay = 0,
}: NeoRevealProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -72px 0px" }}
      transition={{ ...neoSpring, delay }}
    >
      {children}
    </motion.div>
  )
}
