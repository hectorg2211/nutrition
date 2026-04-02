"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { InstallAppFab } from "@/components/landing/install-app-button"
import { Button } from "@/components/ui/button"
import { neoSpringSnappy } from "@/lib/neo-motion"

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=525545255593&text&type=phone_number&app_absent=0"

export function WhatsAppFab() {
  const reduce = useReducedMotion()

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-row-reverse items-end gap-3"
      role="group"
      aria-label="Acciones rápidas"
    >
      <motion.div
        className="inline-flex"
        initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: -12 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.5 }}
      >
        <Button variant="whatsapp" size="fab" asChild>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle aria-hidden />
          </a>
        </Button>
      </motion.div>
      <InstallAppFab />
    </div>
  )
}
