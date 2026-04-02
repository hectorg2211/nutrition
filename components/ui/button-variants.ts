import { cva, type VariantProps } from "class-variance-authority"

/**
 * Neobrutalism-style buttons — one chrome for the whole app (pill, card fill,
 * 2px black border, hard offset shadow, hover “press”). Matches “Ver carrito”.
 * https://www.neobrutalism.dev/docs/button
 */
const surface =
  "bg-card text-card-foreground border-2 border-border shadow-shadow hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"

const primarySurface =
  "bg-primary text-primary-foreground border-2 border-border shadow-shadow hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"

const whatsappSurface =
  "border-2 border-border bg-[#25D366] text-white shadow-shadow hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full font-heading font-semibold ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /** Cream / off-white (e.g. Ver carrito). */
        default: surface,
        neutral: surface,
        /** Lavender / pink fill — same chrome as default, different color. */
        primary: primarySurface,
        /** Floating WhatsApp — brand green, same border / shadow / press. */
        whatsapp: whatsappSurface,
        noShadow: "bg-card text-card-foreground border-2 border-border",
        reverse:
          "bg-card text-card-foreground border-2 border-border hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-shadow",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8 text-sm",
        /** Wide catalog / card CTAs — taller, larger type. */
        xl: "h-auto min-h-14 px-6 py-4 text-base leading-snug sm:min-h-[3.75rem] sm:px-8 sm:text-lg",
        icon: "size-10",
        /** Fixed corner FABs (56×56). */
        fab: "size-14 p-0 [&_svg]:size-7",
        /** Two-line CTA pill (Tienda…). */
        pill: "h-auto min-h-12 px-5 py-3 text-base whitespace-normal justify-between text-left gap-3 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
