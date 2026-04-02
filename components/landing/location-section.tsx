"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Accessibility, Car, Clock, MapPin, Train } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { CtaPill } from "@/components/landing/neo-pill-cta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { neoContainer, neoFadeUp, neoSpringSnappy } from "@/lib/neo-motion"
import { neoSurface, neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Puente+de+Piedra+150+CDMX"

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=525545255593&text&type=phone_number&app_absent=0"

export function LocationSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="ubicacion"
      className="scroll-mt-8 border-t-2 border-black bg-background px-4 py-16 md:px-8"
      aria-labelledby="ubicacion-heading"
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
            <motion.p
              className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground"
              variants={reduce ? undefined : neoFadeUp}
            >
              Cómo llegar
            </motion.p>
            <motion.h2
              id="ubicacion-heading"
              className="mt-2 font-heading text-3xl font-black md:text-4xl lg:text-5xl"
              variants={reduce ? undefined : neoFadeUp}
            >
              Consultorio en Toriello Guerra
            </motion.h2>
            <motion.p
              className="mt-4 text-pretty text-lg text-muted-foreground"
              variants={reduce ? undefined : neoFadeUp}
            >
              Espacio tranquilo para valoraciones presenciales. Si vienes en
              coche, hay opciones de estacionamiento en la zona; en transporte
              público, combina metro y microbús según tu ruta.
            </motion.p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  Icon: Car,
                  title: "Estacionamiento",
                  text: "Calles aledañas y cocheras (pago) a 5 min caminando.",
                },
                {
                  Icon: Train,
                  title: "Transporte",
                  text: "Consulta tu app favorita: punto de referencia Puente de Piedra.",
                },
                {
                  Icon: Accessibility,
                  title: "Accesibilidad",
                  text: "Planta baja con rampa — confirma al agendar si necesitas apoyo.",
                },
              ].map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  className={cn(
                    neoSurfaceSm(),
                    "rounded-xl border-2 border-black bg-card p-4"
                  )}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -3, x: 2, transition: neoSpringSnappy }
                  }
                  transition={{
                    ...neoSpringSnappy,
                    delay: reduce ? 0 : 0.1 + i * 0.07,
                  }}
                >
                  <Icon className="size-5" aria-hidden />
                  <p className="mt-2 font-heading text-sm font-bold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-stretch gap-4 lg:w-[min(100%,380px)] lg:shrink-0"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.06 }}
          >
            <CtaPill
              href={MAPS_URL}
              title="Ubicación"
              subtitle="Puente de Piedra 150, Toriello Guerra, CDMX"
              external
              className="max-w-none"
            />
            <p className="text-center text-xs text-muted-foreground lg:text-left">
              Abre la ruta en Google Maps. Sustituye dirección e iframe del mapa
              con tus datos reales.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.05 }}
          >
            <Card
              className={cn(
                neoSurface(),
                "flex h-full flex-col justify-between rounded-2xl border-2 border-black bg-card ring-0"
              )}
            >
              <CardHeader>
                <CardTitle className="font-heading text-xl font-black md:text-2xl">
                  Datos del consultorio
                </CardTitle>
                <p className="text-muted-foreground">
                  Agenda siempre con cita previa para respetar tiempos entre
                  familias.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div
                  className={cn(
                    neoSurface(),
                    "flex items-start gap-3 rounded-xl border-2 border-black bg-secondary p-4"
                  )}
                >
                  <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden />
                  <div>
                    <p className="font-heading font-bold">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Puente de Piedra 150, Toriello Guerra, Ciudad de México
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span
                    className={cn(
                      neoSurfaceSm(),
                      "inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-card px-3 py-1 font-medium"
                    )}
                  >
                    <Clock className="size-3.5" aria-hidden />
                    Lun–Vie 9:00–18:00
                  </span>
                  <span
                    className={cn(
                      neoSurfaceSm(),
                      "inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-card px-3 py-1 font-medium"
                    )}
                  >
                    <Train className="size-3.5" aria-hidden />
                    Metro cercano
                  </span>
                </div>
                <Separator className="bg-black" />
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "inline-flex"
                    )}
                  >
                    Abrir en Maps
                  </Link>
                  <Button variant="default" asChild>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Indicaciones por WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className={cn(
              neoSurface(),
              "min-h-[280px] overflow-hidden rounded-2xl border-2 border-black bg-muted lg:min-h-0"
            )}
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.1 }}
          >
            <iframe
              title="Mapa del consultorio"
              className="h-full min-h-[280px] w-full grayscale contrast-[1.05] lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-99.19%2C19.28%2C-99.15%2C19.31&layer=mapnik&marker=19.295%2C-99.17"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
