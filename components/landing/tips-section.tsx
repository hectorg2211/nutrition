"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Apple, Droplets, Moon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const TIPS = [
  {
    title: "Hidratación con intención",
    body: "Agua simple entre comidas; jugos naturales mejor en porciones pequeñas con comida.",
    Icon: Droplets,
  },
  {
    title: "Rutina de sueño",
    body: "Cenas ligeras 2h antes de dormir ayudan al descanso reparador y al apetito al día siguiente.",
    Icon: Moon,
  },
  {
    title: "Fruta visible",
    body: "Si está a la vista en un bol en la mesa, sube la probabilidad de que la elijan solos.",
    Icon: Apple,
  },
]

export function TipsSection() {
  const reduce = useReducedMotion()

  return (
    <section
      className="border-t-2 border-black bg-primary/40 px-4 py-16 md:px-8"
      aria-labelledby="tips-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="tips-heading"
          className="mb-8 text-center font-heading text-3xl font-black md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={neoSpringSnappy}
        >
          Mini guía express
        </motion.h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {TIPS.map(({ title, body, Icon }, i) => (
            <motion.li
              key={title}
              initial={reduce ? false : { opacity: 0, y: 28, rotate: i % 2 === 0 ? -0.8 : 0.8 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                ...neoSpringSnappy,
                delay: reduce ? 0 : i * 0.09,
              }}
            >
              <motion.div
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, x: 2, transition: neoSpringSnappy }
                }
              >
                <Card
                  className={cn(
                    neoSurfaceSm(),
                    "h-full rounded-2xl border-2 border-black bg-card ring-0"
                  )}
                >
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                    <span
                      className={cn(
                        neoSurfaceSm(),
                        "flex size-11 items-center justify-center rounded-xl border-2 border-black bg-primary"
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-heading text-base font-black">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
