"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CircleCheck, XCircle } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-3">
              {variant === 'destructive' ? (
                <XCircle className="h-5 w-5 text-red-500" />
              ) : (
                <CircleCheck className="h-5 w-5 text-green-500" />
              )}
              <div className="grid gap-1">
                {title && <ToastTitle className="font-bold">{title}</ToastTitle>}
                {description && (
                  <ToastDescription className="font-semibold">{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}