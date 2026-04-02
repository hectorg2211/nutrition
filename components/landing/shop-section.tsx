"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { BookOpen, ShoppingBag, Sparkles } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CtaPill } from "@/components/landing/neo-pill-cta"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { neoContainer, neoFadeUp, neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurface, neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const PRODUCTS = [
  {
    id: "1",
    name: "Guía anti-neofobia",
    price: "$12 USD",
    tag: "PDF",
    blurb: "Pasos para introducir nuevos alimentos sin peleas en la mesa.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop&q=80&auto=format",
  },
  {
    id: "2",
    name: "Plan snack 2 semanas",
    price: "$18 USD",
    tag: "Nuevo",
    blurb: "Ideas balanceadas listas para la lonchera y el regreso a clases.",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=400&fit=crop&q=80&auto=format",
  },
  {
    id: "3",
    name: "Recetario vegetariano infantil",
    price: "$22 USD",
    tag: "Popular",
    blurb: "20 recetas probadas en consulta, porciones por edad.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop&q=80&auto=format",
  },
]

const WHY = [
  {
    Icon: BookOpen,
    title: "Basado en consulta real",
    text: "Contenido que uso con familias en CDMX, adaptable a alergias y etapas.",
  },
  {
    Icon: Sparkles,
    title: "Listo para imprimir o PDF",
    text: "Tablas, listas de compra y recordatorios sin relleno innecesario.",
  },
]

export function ShopSection() {
  const reduce = useReducedMotion()
  const { openCart, addItem, itemCount } = useCart()

  return (
    <section
      id="tienda"
      className="scroll-mt-8 border-t-2 border-black bg-[#f2f2b0] px-4 py-16 md:px-8"
      aria-labelledby="tienda-heading"
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
                Tienda digital
              </Badge>
            </motion.div>
            <motion.h2
              id="tienda-heading"
              className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl"
              variants={reduce ? undefined : neoFadeUp}
            >
              Guías y planes para aplicar ya en casa
            </motion.h2>
            <motion.p
              className="mt-4 text-pretty text-lg text-muted-foreground"
              variants={reduce ? undefined : neoFadeUp}
            >
              Recursos descargables mientras armamos tu checkout: precios y
              productos son datos de muestra para maquetar el catálogo.
            </motion.p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY.map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  className={cn(
                    neoSurfaceSm(),
                    "rounded-xl border-2 border-black bg-card p-4"
                  )}
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -3, x: 2, transition: neoSpringSnappy }
                  }
                  transition={{
                    ...neoSpringSnappy,
                    delay: reduce ? 0 : 0.12 + i * 0.07,
                  }}
                >
                  <Icon className="size-5" aria-hidden />
                  <p className="mt-2 font-heading font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-stretch gap-4 lg:w-[min(100%,380px)] lg:shrink-0"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.08 }}
          >
            <CtaPill
              href="#catalogo"
              title="Tienda — guías y planes"
              subtitle="Ir al catálogo de esta página"
              className="max-w-none"
            />
            <div className="flex justify-center lg:justify-start">
              <Button type="button" variant="default" size="lg" onClick={openCart}>
                  <ShoppingBag className="size-4" />
                  Ver carrito
                  {itemCount > 0 ? (
                    <Badge
                      variant="secondary"
                      className="ml-1 min-w-7 border border-black px-1.5 font-heading font-semibold tabular-nums"
                    >
                      {itemCount}
                    </Badge>
                  ) : null}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="catalogo"
          className="mt-14 scroll-mt-8 border-t-2 border-dashed border-black/40 pt-14 pb-10"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={neoSpringSnappy}
        >
          <motion.h3
            className="mb-8 font-heading text-2xl font-bold md:text-3xl"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={neoSpringSnappy}
          >
            Productos del catálogo
          </motion.h3>
          <ul className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:pb-2">
            {PRODUCTS.map((p, i) => (
              <motion.li
                key={p.id}
                className="flex h-full min-h-0 flex-col"
                initial={reduce ? false : { opacity: 0, y: 36, rotate: -0.8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  ...neoSpringSnappy,
                  delay: reduce ? 0 : i * 0.08,
                }}
              >
                <motion.div
                  className="flex min-h-0 flex-1 flex-col"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -6,
                          rotate: 0.5,
                          transition: neoSpringSnappy,
                        }
                  }
                >
                  <Card
                    className={cn(
                      neoSurface(),
                      "flex h-full min-h-0 flex-1 flex-col overflow-visible rounded-2xl border-2 border-black bg-card ring-0"
                    )}
                  >
                    <div
                      className={cn(
                        neoSurfaceSm(),
                        "relative mx-4 mt-4 shrink-0 aspect-square overflow-hidden rounded-xl border-2 border-black"
                      )}
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col">
                      <CardHeader className="flex-none">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="font-heading text-lg font-bold">
                            {p.name}
                          </CardTitle>
                          <Badge
                            variant="secondary"
                            className="shrink-0 border border-black bg-secondary font-heading text-[0.65rem] font-semibold uppercase"
                          >
                            {p.tag}
                          </Badge>
                        </div>
                        <CardDescription className="text-base text-muted-foreground">
                          {p.blurb}
                        </CardDescription>
                      </CardHeader>
                      <div className="min-h-0 flex-1" aria-hidden />
                      <CardContent className="flex-none pt-0">
                        <p className="font-heading text-2xl font-bold">
                          {p.price}
                        </p>
                      </CardContent>
                    </div>
                    <CardFooter className="flex-none border-t-2 border-black bg-muted/60 px-3 py-3 sm:px-4 sm:py-4">
                      <Button
                        type="button"
                        variant="primary"
                        size="xl"
                        className="w-full"
                        onClick={() =>
                          addItem({
                            id: p.id,
                            name: p.name,
                            priceLabel: p.price,
                            imageSrc: p.image,
                          })
                        }
                      >
                        Añadir al carrito
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
