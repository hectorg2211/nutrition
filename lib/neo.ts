import { cn } from "@/lib/utils"

/** CSS press-down for links / custom controls (pairs with neo shadows). */
export const neoPress =
  "transition-[transform,box-shadow] duration-100 ease-out will-change-transform active:translate-x-[3px] active:translate-y-[3px] active:scale-[0.97]"

/** Use with neoSurface (5px shadow). */
export const neoPressShadowLg = "active:shadow-[1px_1px_0px_0px_#000]"

/** Use with neoSurfaceSm (3px shadow). */
export const neoPressShadowSm = "active:shadow-[1px_1px_0px_0px_#000]"

/** Neobrutalist surface: hard black border + offset shadow */
export function neoSurface(className?: string) {
  return cn(
    "border-2 border-black shadow-[5px_5px_0px_0px_#000]",
    className
  )
}

export function neoSurfaceSm(className?: string) {
  return cn(
    "border-2 border-black shadow-[3px_3px_0px_0px_#000]",
    className
  )
}
