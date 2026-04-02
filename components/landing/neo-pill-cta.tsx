"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CtaPillProps = {
  href: string
  title: string
  subtitle?: string
  external?: boolean
  className?: string
}

export function CtaPill({
  href,
  title,
  subtitle,
  external,
  className,
}: CtaPillProps) {
  return (
    <Button
      variant="primary"
      size="pill"
      asChild
      className={cn("w-full max-w-md", className)}
    >
      <Link
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <span className="flex min-w-0 flex-col items-start gap-0.5 text-left">
          <span>{title}</span>
          {subtitle ? (
            <span className="text-xs font-medium opacity-90">{subtitle}</span>
          ) : null}
        </span>
        <MoreVertical className="shrink-0 opacity-80" aria-hidden />
      </Link>
    </Button>
  )
}

type LinktreePillProps = {
  href: string
  children: ReactNode
  className?: string
}

export function LinktreePill({ href, children, className }: LinktreePillProps) {
  return (
    <Button
      variant="default"
      size="lg"
      asChild
      className={cn(
        "h-auto min-h-14 w-full max-w-md whitespace-normal py-6 text-base",
        className
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  )
}
