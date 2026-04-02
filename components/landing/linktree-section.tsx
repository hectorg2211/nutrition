"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Headphones, LayoutGrid, Mic, Newspaper } from "lucide-react"
import { LinktreePill } from "@/components/landing/neo-pill-cta"
import { neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const LINKS = [
  {
    Icon: LayoutGrid,
    title: "Link en bio",
    text: "Todos los enlaces oficiales en un solo tap.",
  },
  {
    Icon: Mic,
    title: "Podcast / entrevistas",
    text: "Episodios cortos sobre mitos y alimentación infantil.",
  },
  {
    Icon: Newspaper,
    title: "Newsletter",
    text: "Un correo al mes con recetas y recordatorios.",
  },
  {
    Icon: Headphones,
    title: "Soporte",
    text: "Preguntas sobre talleres y material descargable.",
  },
]

export function LinktreeSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="enlaces"
      className="scroll-mt-8 border-t-2 border-black bg-primary/35 px-4 py-16 md:px-8"
      aria-labelledby="enlaces-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={neoSpringSnappy}
        >
          <h2
            id="enlaces-heading"
            className="font-heading text-3xl font-bold md:text-4xl"
          >
            Todo lo demás, en un solo lugar
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            El Linktree reúne redes, formularios, donaciones o lista de espera.
            Aquí un resumen de lo que suele vivir ahí — sustituye textos por los
            tuyos.
          </p>
        </motion.div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {LINKS.map(({ Icon, title, text }, i) => (
            <motion.li
              key={title}
              className={cn(
                neoSurfaceSm(),
                "flex gap-4 rounded-2xl border-2 border-black bg-card p-4 text-left"
              )}
              initial={reduce ? false : { opacity: 0, y: 24, x: i % 2 === 0 ? -8 : 8 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -4, x: 2, transition: neoSpringSnappy }
              }
              transition={{
                ...neoSpringSnappy,
                delay: reduce ? 0 : i * 0.07,
              }}
            >
              <span
                className={cn(
                  neoSurfaceSm(),
                  "flex size-11 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-primary"
                )}
              >
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-heading font-semibold">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-12 flex justify-center"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.2 }}
        >
          <LinktreePill href="https://linktr.ee">
            Ver todos los enlaces (Linktree)
          </LinktreePill>
        </motion.div>
      </div>
    </section>
  )
}
