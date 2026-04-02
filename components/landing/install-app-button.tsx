"use client"

import { useCallback, useEffect, useState } from "react"
import { Dialog } from "@base-ui/react/dialog"
import { motion, useReducedMotion } from "framer-motion"
import { Menu, Share2, Smartphone, SquarePlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { neoSpringSnappy } from "@/lib/neo-motion"
import { neoPress, neoPressShadowSm } from "@/lib/neo"
import { cn } from "@/lib/utils"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

function isIosDevice() {
  if (typeof navigator === "undefined") return false
  const ua = navigator.userAgent
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes("Mac") && "ontouchend" in document)
}

function isStandaloneDisplay() {
  if (typeof window === "undefined") return false
  const mq = window.matchMedia("(display-mode: standalone)")
  if (mq.matches) return true
  const nav = navigator as Navigator & { standalone?: boolean }
  return nav.standalone === true
}

/**
 * PWA install UI. Native `prompt()` only runs after a user tap (browser rule);
 * this FAB triggers that sheet in one tap when the browser offers install.
 */
export function InstallAppFab({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [hideAsInstalled, setHideAsInstalled] = useState(false)
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [instructionsOpen, setInstructionsOpen] = useState(false)
  const [ios, setIos] = useState(false)

  useEffect(() => {
    setMounted(true)
    setHideAsInstalled(isStandaloneDisplay())
    setIos(isIosDevice())

    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    window.addEventListener("beforeinstallprompt", onBeforeInstall)
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall)
  }, [])

  const handlePrimaryClick = useCallback(async () => {
    if (deferred) {
      await deferred.prompt()
      await deferred.userChoice
      setDeferred(null)
      return
    }
    setInstructionsOpen(true)
  }, [deferred])

  if (!mounted || hideAsInstalled) return null

  return (
    <>
      <motion.div
        className={cn("inline-flex", className)}
        initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: 12 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        transition={{ ...neoSpringSnappy, delay: reduce ? 0 : 0.42 }}
      >
        <Button
          type="button"
          variant="default"
          size="fab"
          aria-label="Añadir a la pantalla de inicio"
          onClick={handlePrimaryClick}
        >
          <Smartphone aria-hidden />
        </Button>
      </motion.div>

      <Dialog.Root open={instructionsOpen} onOpenChange={setInstructionsOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop
            className={cn(
              "fixed inset-0 z-100 bg-black/40",
              "transition-opacity duration-200 ease-out",
              "data-starting-style:opacity-0 data-ending-style:opacity-0"
            )}
          />
          <Dialog.Popup
            className={cn(
              "fixed top-1/2 left-1/2 z-100 w-[min(100%,22rem)] -translate-x-1/2 -translate-y-1/2",
              "rounded-2xl border-2 border-black bg-card p-5 shadow-[5px_5px_0_0_#000]",
              "transition-[opacity,transform] duration-200 ease-out",
              "data-starting-style:scale-95 data-starting-style:opacity-0",
              "data-ending-style:scale-95 data-ending-style:opacity-0"
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <Dialog.Title className="font-heading text-lg font-bold leading-tight">
                Añadir como app
              </Dialog.Title>
              <Dialog.Close
                className={cn(
                  "flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full",
                  "border-2 border-black bg-card shadow-[2px_2px_0_0_#000] hover:bg-muted",
                  neoPress,
                  neoPressShadowSm
                )}
                aria-label="Cerrar"
              >
                <X className="size-4" />
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Pasos para guardar este sitio en la pantalla de inicio de tu
              teléfono.
            </Dialog.Description>

            {ios ? (
              <ol className="space-y-4 text-sm text-foreground">
                <li className="flex gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-primary/40 font-heading text-xs font-semibold"
                    aria-hidden
                  >
                    1
                  </span>
                  <span className="pt-1">
                    Toca{" "}
                    <span className="inline-flex items-center gap-1 font-bold">
                      <Share2 className="size-4" aria-hidden />
                      Compartir
                    </span>{" "}
                    en la barra de Safari.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-primary/40 font-heading text-xs font-semibold"
                    aria-hidden
                  >
                    2
                  </span>
                  <span className="pt-1">
                    Elige{" "}
                    <span className="inline-flex items-center gap-1 font-bold">
                      <SquarePlus className="size-4" aria-hidden />
                      Añadir a inicio
                    </span>
                    .
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-primary/40 font-heading text-xs font-semibold"
                    aria-hidden
                  >
                    3
                  </span>
                  <span className="pt-1">
                    Confirma con <strong>Añadir</strong>. El icono quedará en tu
                    pantalla principal.
                  </span>
                </li>
              </ol>
            ) : (
              <ol className="space-y-4 text-sm text-foreground">
                <li className="flex gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-primary/40 font-heading text-xs font-semibold"
                    aria-hidden
                  >
                    1
                  </span>
                  <span className="pt-1">
                    Abre el menú del navegador{" "}
                    <span className="inline-flex items-center gap-1 font-bold">
                      <Menu className="size-4" aria-hidden />
                      (tres puntos)
                    </span>
                    .
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-primary/40 font-heading text-xs font-semibold"
                    aria-hidden
                  >
                    2
                  </span>
                  <span className="pt-1">
                    Busca <strong>Instalar aplicación</strong>,{" "}
                    <strong>Añadir a la pantalla principal</strong> o similar.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-primary/40 font-heading text-xs font-semibold"
                    aria-hidden
                  >
                    3
                  </span>
                  <span className="pt-1">
                    Confirma. En Chrome para Android también puede aparecer un
                    aviso automático para instalar.
                  </span>
                </li>
              </ol>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
