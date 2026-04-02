"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconWhatsapp,
} from "@/components/icons/brand-icons"
import { Separator } from "@/components/ui/separator"
import { neoSpringSnappy, neoWhileTap } from "@/lib/neo-motion"
import { neoPress, neoPressShadowSm, neoSurfaceSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

const FOOTER_LINKS = [
  { href: "#", label: "Preferencias de cookies" },
  { href: "#", label: "Reportar" },
  { href: "#", label: "Privacidad" },
  { href: "#", label: "Explorar" },
]

const SOCIAL = [
  {
    href: "https://api.whatsapp.com/send/?phone=525545255593&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
    Icon: IconWhatsapp,
    hoverClass:
      "hover:bg-[#25D366] hover:text-white focus-visible:bg-[#25D366] focus-visible:text-white",
  },
  {
    href: "https://www.tiktok.com/@nutripednaho",
    label: "TikTok",
    Icon: IconTiktok,
    hoverClass:
      "hover:bg-[#000000] hover:text-white focus-visible:bg-[#000000] focus-visible:text-white",
  },
  {
    href: "https://www.facebook.com/p/Nahomi-Rojas-100070760088264/",
    label: "Facebook",
    Icon: IconFacebook,
    hoverClass:
      "hover:bg-[#0866FF] hover:text-white focus-visible:bg-[#0866FF] focus-visible:text-white",
  },
  {
    href: "https://www.instagram.com/nut.naho",
    label: "Instagram",
    Icon: IconInstagram,
    hoverClass:
      "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:text-white focus-visible:bg-gradient-to-br focus-visible:from-[#833AB4] focus-visible:via-[#E1306C] focus-visible:to-[#F77737] focus-visible:text-white",
  },
] as const

export function SiteFooter() {
  const reduce = useReducedMotion()

  return (
    <footer className="border-t-2 border-black bg-[#e8e88a] px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <motion.p
          className="font-heading text-xl font-bold"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={neoSpringSnappy}
        >
          Nahomi
        </motion.p>
        <nav aria-label="Redes" className="flex flex-wrap justify-center gap-3">
          {SOCIAL.map(({ href, label, Icon, hoverClass }, i) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ...neoSpringSnappy,
                delay: reduce ? 0 : i * 0.06,
              }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -4, x: 2, transition: neoSpringSnappy }
              }
              whileTap={neoWhileTap(reduce)}
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  neoSurfaceSm(),
                  neoPress,
                  neoPressShadowSm,
                  "flex size-12 items-center justify-center rounded-full border-2 border-black bg-card text-foreground transition-colors duration-200",
                  hoverClass
                )}
                aria-label={label}
              >
                <Icon className="size-5" />
              </Link>
            </motion.div>
          ))}
        </nav>
        <Separator className="max-w-md bg-black" />
        <nav
          aria-label="Legal"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center text-sm text-muted-foreground"
        >
          {FOOTER_LINKS.map((item, i) => (
            <span key={item.label} className="inline-flex items-center gap-4">
              {i > 0 ? <span aria-hidden className="text-black/30">·</span> : null}
              <Link
                href={item.href}
                className="underline-offset-4 transition-opacity duration-100 hover:underline active:opacity-60"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nahomi. Contenido de ejemplo.
        </p>
      </div>
    </footer>
  )
}
