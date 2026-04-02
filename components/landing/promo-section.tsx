"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Flame, LineChart, Smartphone, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { CtaPill } from "@/components/landing/neo-pill-cta"
import { neoContainer, neoFadeUp, neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurface, neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const FEATURES = [
  {
    Icon: Utensils,
    text: "Planes y seguimiento de pacientes en un solo lugar.",
  },
  {
    Icon: LineChart,
    text: "Reportes listos para explicar avances a las familias.",
  },
  {
    Icon: Smartphone,
    text: "Interfaz pensada para usar entre consulta y consulta.",
  },
]

export function PromoSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="promo"
      className="scroll-mt-8 border-t-2 border-black px-4 py-16 md:px-8"
      aria-labelledby="promo-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <motion.div
            className="max-w-2xl flex-1"
            variants={reduce ? undefined : neoContainer}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div variants={reduce ? undefined : neoFadeUp}>
              <Badge
                variant="outline"
                className={cn(
                  neoSurfaceSm(),
                  "mb-4 border-2 border-black bg-primary font-heading font-bold"
                )}
              >
                Colaboración
              </Badge>
            </motion.div>
            <div className="flex items-start gap-3">
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -14 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={neoSpringSnappy}
              >
                <motion.div
                  aria-hidden
                  animate={
                    reduce
                      ? undefined
                      : { rotate: [0, -5, 5, 0] }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                >
                  <Flame className="mt-1 size-10 shrink-0 text-primary" />
                </motion.div>
              </motion.div>
              <motion.div variants={reduce ? undefined : neoFadeUp}>
                <h2
                  id="promo-heading"
                  className="font-heading text-3xl font-black md:text-4xl"
                >
                  Avena Health para nutriólogos
                </h2>
                <p className="mt-3 text-pretty text-lg text-muted-foreground">
                  Oferta especial para quienes siguen a Nahomi: herramienta de
                  nutrición clínica con registro de hábitos, recordatorios y
                  plantillas. Ideal si quieres profesionalizar tu consulta
                  privada.
                </p>
              </motion.div>
            </div>
            <ul className="mt-8 space-y-4">
              {FEATURES.map(({ Icon, text }, i) => (
                <motion.li
                  key={text}
                  className="grid grid-cols-[2.5rem_1fr] items-center gap-x-3"
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    ...neoSpringSnappy,
                    delay: reduce ? 0 : 0.08 + i * 0.07,
                  }}
                >
                  <span
                    className={cn(
                      neoSurfaceSm(),
                      "flex size-10 items-center justify-center justify-self-start rounded-lg border-2 border-black bg-card"
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 text-sm leading-relaxed md:text-base">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col items-stretch gap-4 lg:w-[min(100%,380px)] lg:shrink-0"
            initial={reduce ? false : { opacity: 0, x: 26 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.08 }}
          >
            <CtaPill
              href="#"
              title="90% OFF — software de nutrición aliado"
              subtitle="Cupón NAHOMI90 — introdúcelo al finalizar tu pedido"
              className="max-w-none"
            />
            <motion.div
              className={cn(
                neoSurfaceSm(),
                "rounded-xl border-2 border-dashed border-black bg-muted/50 p-4 text-center"
              )}
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.15 }}
            >
              <p className="text-xs font-medium text-muted-foreground">
                Código al checkout
              </p>
              <p className="mt-1 font-mono text-lg font-bold tracking-widest">
                NAHOMI90
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={cn(
            neoSurface(),
            "mt-14 flex flex-col gap-4 rounded-3xl border-2 border-black bg-[#1a1a1a] p-6 text-[#fcfcc9] md:flex-row md:items-center md:justify-between md:p-8"
          )}
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={neoSpringSnappy}
        >
          <p className="text-sm opacity-90 md:max-w-xl">
            ¿Solo buscas el descuento rápido? Usa el botón — la oferta es
            ficticia hasta que conectes tu partnership real con Avena Health.
          </p>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "inline-flex shrink-0"
            )}
          >
            Canjear oferta
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
