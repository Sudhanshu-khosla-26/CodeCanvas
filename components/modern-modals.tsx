"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { type ReactNode, useEffect, useState } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
  showCloseButton?: boolean
  closeOnOutsideClick?: boolean
  animation?: "fade" | "zoom" | "slide-up" | "slide-right"
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
  closeOnOutsideClick = true,
  animation = "fade",
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOutsideClick) {
      onClose()
    }
  }

  const animationClasses = {
    fade: {
      backdrop: "transition-opacity duration-300",
      backdropActive: "opacity-100",
      backdropInactive: "opacity-0",
      modal: "transition-opacity duration-300",
      modalActive: "opacity-100",
      modalInactive: "opacity-0",
    },
    zoom: {
      backdrop: "transition-opacity duration-300",
      backdropActive: "opacity-100",
      backdropInactive: "opacity-0",
      modal: "transition-all duration-300",
      modalActive: "opacity-100 scale-100",
      modalInactive: "opacity-0 scale-90",
    },
    "slide-up": {
      backdrop: "transition-opacity duration-300",
      backdropActive: "opacity-100",
      backdropInactive: "opacity-0",
      modal: "transition-all duration-300",
      modalActive: "opacity-100 translate-y-0",
      modalInactive: "opacity-0 translate-y-8",
    },
    "slide-right": {
      backdrop: "transition-opacity duration-300",
      backdropActive: "opacity-100",
      backdropInactive: "opacity-0",
      modal: "transition-all duration-300",
      modalActive: "opacity-100 translate-x-0",
      modalInactive: "opacity-0 -translate-x-8",
    },
  }

  const selectedAnimation = animationClasses[animation]

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
        selectedAnimation.backdrop,
        isOpen ? selectedAnimation.backdropActive : selectedAnimation.backdropInactive,
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          "w-full max-w-md p-4",
          selectedAnimation.modal,
          isOpen ? selectedAnimation.modalActive : selectedAnimation.modalInactive,
        )}
      >
        <Card className={cn("overflow-hidden shadow-xl", className)}>
          {title && (
            <div className="border-b bg-muted/50 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{title}</h3>
                {showCloseButton && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={onClose}
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )}
          <div className="p-6">{children}</div>
        </Card>
      </div>
    </div>
  )
}

interface FullScreenModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export function FullScreenModal({ isOpen, onClose, title, children, className }: FullScreenModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between">
          {title && <h3 className="text-xl font-medium">{title}</h3>}
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className={cn("flex-1 overflow-auto p-6", className)}>{children}</div>
    </div>
  )
}

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  position?: "left" | "right" | "bottom"
  className?: string
}

export function Drawer({ isOpen, onClose, title, children, position = "right", className }: DrawerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  const positionClasses = {
    left: {
      container: "justify-start",
      drawer: "h-full max-w-xs w-full rounded-r-xl",
      animation: "transition-transform duration-300",
      open: "translate-x-0",
      closed: "-translate-x-full",
    },
    right: {
      container: "justify-end",
      drawer: "h-full max-w-xs w-full rounded-l-xl",
      animation: "transition-transform duration-300",
      open: "translate-x-0",
      closed: "translate-x-full",
    },
    bottom: {
      container: "items-end",
      drawer: "w-full max-h-[80vh] rounded-t-xl",
      animation: "transition-transform duration-300",
      open: "translate-y-0",
      closed: "translate-y-full",
    },
  }

  const selectedPosition = positionClasses[position]

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        selectedPosition.container,
        isOpen ? "opacity-100" : "opacity-0",
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          "bg-background shadow-xl",
          selectedPosition.drawer,
          selectedPosition.animation,
          isOpen ? selectedPosition.open : selectedPosition.closed,
          className,
        )}
      >
        {title && (
          <div className="border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{title}</h3>
              <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
