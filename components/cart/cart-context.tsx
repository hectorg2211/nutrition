"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type CartProductInput = {
  id: string
  name: string
  priceLabel: string
  /** Product thumbnail (remote URL allowed if configured in next.config). */
  imageSrc?: string
}

export type CartLine = CartProductInput & {
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  openCart: () => void
  closeCart: () => void
  addItem: (product: CartProductInput) => void
  removeLine: (productId: string) => void
  setLineQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addItem = useCallback((product: CartProductInput) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.id === product.id)
      if (i >= 0) {
        return prev.map((l, j) =>
          j === i
            ? {
                ...l,
                quantity: l.quantity + 1,
                imageSrc: l.imageSrc ?? product.imageSrc,
              }
            : l
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }, [])

  const removeLine = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.id !== productId))
  }, [])

  const setLineQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.id !== productId))
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.id === productId ? { ...l, quantity } : l))
    )
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      cartOpen,
      setCartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      addItem,
      removeLine,
      setLineQuantity,
      clearCart,
      itemCount: lines.reduce((n, l) => n + l.quantity, 0),
    }),
    [lines, cartOpen, addItem, removeLine, setLineQuantity, clearCart]
  )

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}
