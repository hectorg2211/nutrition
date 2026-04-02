"use client"

import { Dialog } from "@base-ui/react/dialog"
import Image from "next/image"
import { ImageOff, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "./cart-context"

function LineThumbnail({ src }: { src?: string }) {
  if (src) {
    return (
      <div className="relative size-18 shrink-0 overflow-hidden rounded-xl border border-black bg-muted">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="72px"
        />
      </div>
    )
  }
  return (
    <div
      className="flex size-18 shrink-0 items-center justify-center rounded-xl border border-dashed border-black/35 bg-muted/60 text-muted-foreground"
      aria-hidden
    >
      <ImageOff className="size-6 opacity-60" />
    </div>
  )
}

export function CartDrawer() {
  const {
    lines,
    cartOpen,
    setCartOpen,
    setLineQuantity,
    removeLine,
    clearCart,
    itemCount,
  } = useCart()

  return (
    <Dialog.Root open={cartOpen} onOpenChange={setCartOpen}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-50 bg-black/40",
            "transition-opacity duration-200 ease-out",
            "data-starting-style:opacity-0 data-ending-style:opacity-0"
          )}
        />
        <Dialog.Popup
          data-slot="cart-drawer-popup"
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-card",
            "border-l-2 border-black",
            "transition-transform duration-300 ease-out",
            "data-starting-style:translate-x-full data-ending-style:translate-x-full"
          )}
        >
          <header className="flex items-center justify-between gap-3 border-b border-black px-4 py-4 bg-primary/35">
            <div className="flex min-w-0 items-center gap-2">
              <ShoppingBag className="size-5 shrink-0" aria-hidden />
              <Dialog.Title className="truncate font-heading text-lg font-black">
                Carrito
              </Dialog.Title>
            </div>
            <Button variant="default" size="icon" asChild>
              <Dialog.Close aria-label="Cerrar carrito">
                <X className="size-5" />
              </Dialog.Close>
            </Button>
          </header>

          <Dialog.Description className="sr-only">
            Productos añadidos al carrito local. Los datos no se
            guardan al recargar la página.
          </Dialog.Description>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-card">
            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
                <p className="font-heading text-base font-bold">
                  Tu carrito está vacío
                </p>
                <p className="text-sm text-muted-foreground">
                  Añade productos desde el catálogo. El carrito vive solo en esta
                  pestaña: al recargar o cerrar la página se vacía.
                </p>
              </div>
            ) : (
              <ul
                className={cn(
                  "min-h-0 flex-1 space-y-3 overflow-y-auto p-4",
                  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                )}
              >
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="rounded-2xl border border-black bg-[#fffef2] p-3 shadow-[3px_3px_0_0_#000]"
                  >
                    <div className="flex gap-3">
                      <LineThumbnail src={line.imageSrc} />
                      <div className="min-w-0 flex-1">
                        <p className="font-heading text-sm font-bold leading-snug">
                          {line.name}
                        </p>
                        <p className="mt-1 font-heading text-sm font-black">
                          {line.priceLabel}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <div className="inline-flex items-center rounded-full border border-black bg-background/80 p-0.5">
                            <Button
                              type="button"
                              variant="default"
                              size="icon"
                              className="size-8 min-h-8 min-w-8"
                              onClick={() =>
                                setLineQuantity(line.id, line.quantity - 1)
                              }
                              aria-label={`Menos ${line.name}`}
                            >
                              <Minus className="size-4" />
                            </Button>
                            <span className="min-w-8 text-center font-heading text-sm font-bold tabular-nums">
                              {line.quantity}
                            </span>
                            <Button
                              type="button"
                              variant="default"
                              size="icon"
                              className="size-8 min-h-8 min-w-8"
                              onClick={() =>
                                setLineQuantity(line.id, line.quantity + 1)
                              }
                              aria-label={`Más ${line.name}`}
                            >
                              <Plus className="size-4" />
                            </Button>
                          </div>
                          <Button
                            type="button"
                            variant="default"
                            size="icon"
                            className="size-9 min-h-9 min-w-9"
                            onClick={() => removeLine(line.id)}
                            aria-label={`Quitar ${line.name}`}
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <footer className="border-t border-black bg-muted/30 px-4 py-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Artículos</span>
              <span className="font-heading font-bold tabular-nums">
                {itemCount}
              </span>
            </div>
            <p className="mb-3 text-xs text-muted-foreground">
              El subtotal, envío y pago seguro aparecerán aquí cuando conectes
              tu lógica de precios y la pasarela.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                variant="default"
                className="flex-1"
                onClick={clearCart}
                disabled={lines.length === 0}
              >
                Vaciar
              </Button>
              <Button
                type="button"
                variant="default"
                disabled
                className="flex-1"
              >
                Ir a pagar (pronto)
              </Button>
            </div>
          </footer>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
