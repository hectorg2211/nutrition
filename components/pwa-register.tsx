"use client"

import { useEffect } from "react"

/**
 * Registers the pass-through service worker so Chrome can offer PWA install
 * (same class of flow as menu-vces.web.app’s “Install app” dialog).
 */
export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return
    const { protocol, hostname } = window.location
    if (protocol !== "https:" && hostname !== "localhost") return

    void navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      /* ignore: ad blockers, unsupported contexts */
    })
  }, [])

  return null
}
