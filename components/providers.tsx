"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/components/cart/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { PwaRegister } from "@/components/pwa-register"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <PwaRegister />
      {children}
      <CartDrawer />
    </CartProvider>
  )
}
