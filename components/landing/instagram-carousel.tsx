"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const POSTS = [
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=750&fit=crop&q=80&auto=format",
    alt: "Tazón colorido con frutas y cereales",
    line: "Desayunos sin drama",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=750&fit=crop&q=80&auto=format",
    alt: "Ensalada fresca en plato",
    line: "Snacks que sí llenan",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=750&fit=crop&q=80&auto=format",
    alt: "Plato vegetariano colorido",
    line: "Colores en el plato",
  },
  {
    src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=750&fit=crop&q=80&auto=format",
    alt: "Ingredientes saludables sobre mesa",
    line: "Tips de la semana",
  },
]

export function InstagramCarousel() {
  const reduce = useReducedMotion()

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="mx-auto w-full max-w-5xl px-2 pb-8 pt-1"
    >
      <CarouselContent className="-ml-3 pb-8 md:-ml-4">
        {POSTS.map((post, i) => (
          <CarouselItem
            key={post.line}
            className="basis-full pl-3 sm:basis-1/2 md:pl-4 lg:basis-1/3"
          >
            <motion.figure
              className={cn(
                neoSurfaceSm(),
                "flex flex-col rounded-2xl bg-card"
              )}
              initial={reduce ? false : { opacity: 0, y: 28, rotate: -0.6 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                ...neoSpringSnappy,
                delay: reduce ? 0 : i * 0.06,
              }}
            >
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-[0.875rem] bg-muted">
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="rounded-b-[0.875rem] border-t-2 border-black bg-primary px-3 py-3 font-heading text-sm font-bold leading-snug">
                <span className="text-primary-foreground">@nut.naho</span>
                <span className="mt-1 block text-xs font-semibold normal-case opacity-90">
                  {post.line}
                </span>
              </figcaption>
            </motion.figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
