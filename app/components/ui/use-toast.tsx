"use client"

import * as React from "react"
import { ToastProvider, Toast, ToastTitle, ToastDescription } from "./toast"

export function useToast() {
  const [toasts, setToasts] = React.useState<{ id: number; title: string; description?: string }[]>([])

  const addToast = (title: string, description?: string) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, title, description }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }

  return {
    toast: addToast,
    Toaster: () => (
      <ToastProvider>
        {toasts.map((toast) => (
          <Toast key={toast.id}>
            <ToastTitle>{toast.title}</ToastTitle>
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          </Toast>
        ))}
      </ToastProvider>
    ),
  }
}
