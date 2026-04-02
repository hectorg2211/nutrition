"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CalendarHeart, Check, Stethoscope, Timer, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { CtaPill } from "@/components/landing/neo-pill-cta"
import { neoContainer, neoFadeUp, neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurface, neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

/** Replace with Calendly, Google Calendar, or your CRM booking link. */
const BOOKING_URL = "https://cal.com"

const INCLUDES = [
  "Historial clínico y hábitos alimentarios del niño o la niña.",
  "Plan escrito con porciones, horarios y sustitutos realistas.",
  "Seguimiento por chat la primera semana (respuesta en 24–48 h).",
]

export function ConsultationBanner() {
  const reduce = useReducedMotion()

  return (
    <section
      id="consulta"
      className="scroll-mt-8 border-t-2 border-black bg-[#f5f5c4] px-4 py-16 md:px-8"
      aria-labelledby="consulta-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <motion.div
            className="max-w-2xl flex-1"
            variants={reduce ? undefined : neoContainer}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={reduce ? undefined : neoFadeUp}>
              <Badge
                variant="outline"
                className={cn(
                  neoSurfaceSm(),
                  "mb-4 border-2 border-black bg-primary font-heading font-semibold"
                )}
              >
                Consultas
              </Badge>
            </motion.div>
            <motion.h2
              id="consulta-heading"
              className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              variants={reduce ? undefined : neoFadeUp}
            >
              Acompañamiento nutricional que respeta tu ritmo
            </motion.h2>
            <motion.p
              className="mt-4 pl-9 text-pretty text-lg text-muted-foreground"
              variants={reduce ? undefined : neoFadeUp}
            >
              Sesiones pensadas para padres ocupados: sin dietas extremas, con
              foco en conducta alimentaria, tolerancias y crecimiento sano.
            </motion.p>
            <ul className="mt-8 space-y-3">
              {INCLUDES.map((line, i) => (
                <motion.li
                  key={line}
                  className="grid grid-cols-[1.5rem_1fr] items-center gap-x-3 text-sm md:text-base"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    ...neoSpringSnappy,
                    delay: reduce ? 0 : 0.08 + i * 0.06,
                  }}
                >
                  <span
                    className={cn(
                      neoSurfaceSm(),
                      "flex size-6 items-center justify-center justify-self-start rounded-md border-2 border-black bg-card"
                    )}
                  >
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0">{line}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { Icon: Stethoscope, label: "Enfoque clínico", val: "Pediátrico" },
                { Icon: Timer, label: "Duración", val: "50–60 min" },
                { Icon: Users, label: "Modalidad", val: "Online / presencial" },
              ].map(({ Icon, label, val }, i) => (
                <motion.div
                  key={label}
                  className={cn(
                    neoSurfaceSm(),
                    "rounded-xl border-2 border-black bg-card p-4"
                  )}
                  initial={reduce ? false : { opacity: 0, y: 22, scale: 0.96 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -4, x: 2, transition: neoSpringSnappy }
                  }
                  transition={{
                    ...neoSpringSnappy,
                    delay: reduce ? 0 : 0.14 + i * 0.07,
                  }}
                >
                  <Icon className="size-5" aria-hidden />
                  <p className="mt-2 font-heading text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                  <p className="font-heading text-lg font-bold">{val}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-stretch gap-4 lg:w-[min(100%,380px)] lg:shrink-0"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.1 }}
          >
            <CtaPill
              href={BOOKING_URL}
              title="Agenda una consulta"
              subtitle="Primera sesión en línea o presencial"
              external
              className="max-w-none"
            />
          </motion.div>
        </div>

        <motion.div
          className={cn(
            neoSurface(),
            "mt-14 flex max-w-4xl flex-col items-center gap-6 rounded-3xl border-2 border-black bg-card px-6 py-10 text-center md:flex-row md:text-left"
          )}
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.05 }}
        >
          <motion.span
            className={cn(
              neoSurfaceSm(),
              "flex size-16 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-primary"
            )}
            aria-hidden
            whileHover={
              reduce ? undefined : { rotate: [-2, 2, -2], transition: { duration: 0.4 } }
            }
          >
            <CalendarHeart className="size-8" />
          </motion.span>
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold md:text-2xl">
              ¿Primera vez en nutrición infantil?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Valoración inicial, historia clínica y plan paso a paso. Cupos
              limitados por mes — reserva con tiempo.
            </p>
          </div>
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "inline-flex shrink-0"
            )}
          >
            Reservar cita
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
