"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import Link from "next/link"

interface CustomButtonProps {
  children: ReactNode
  variant?: "default" | "gradient" | "outline" | "soft" | "glass" | "3d"
  size?: "sm" | "default" | "lg" | "xl"
  icon?: ReactNode
  iconPosition?: "left" | "right"
  href?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

export function CustomButton({
  children,
  variant = "default",
  size = "default",
  icon,
  iconPosition = "right",
  href,
  className,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
}: CustomButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    default: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg",
    xl: "h-14 px-8 py-4 text-xl",
  }

  // Variant classes
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    gradient:
      "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0",
    outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 dark:hover:bg-primary/20",
    soft: "bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 border-0",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 dark:border-white/10",
    "3d": "bg-primary text-primary-foreground border-b-4 border-primary-foreground/30 hover:translate-y-0.5 hover:border-b-2 active:translate-y-1 active:border-b-0 transition-all duration-150",
  }

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {loading ? <span className="animate-pulse">Loading...</span> : children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  )

  const buttonClasses = cn(
    "relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled || loading}>
      {buttonContent}
    </button>
  )
}

export function AnimatedButton({
  children,
  animation = "pulse",
  className,
  ...props
}: CustomButtonProps & { animation?: "pulse" | "bounce" | "shine" | "expand" | "slide" }) {
  const animationClasses = {
    pulse: "transition-transform hover:animate-pulse",
    bounce: "transition-transform hover:animate-bounce",
    shine:
      "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shine_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:-translate-x-[20%]",
    expand: "transition-all duration-300 hover:scale-105",
    slide: "relative overflow-hidden group",
  }

  const slideContent =
    animation === "slide" ? (
      <>
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">{children}</span>
        <span className="absolute inset-0 bg-primary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </>
    ) : (
      children
    )

  return (
    <Button className={cn(animationClasses[animation], className)} {...props}>
      {animation === "slide" ? slideContent : children}
    </Button>
  )
}

export function IconButton({
  icon,
  label,
  variant = "default",
  size = "icon",
  className,
  ...props
}: {
  icon: ReactNode
  label: string
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "icon" | "sm" | "lg"
  className?: string
  [key: string]: any
}) {
  const sizeClasses = {
    sm: "h-8 w-8",
    icon: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Button variant={variant} size="icon" className={cn(sizeClasses[size], className)} aria-label={label} {...props}>
      {icon}
    </Button>
  )
}

export function ButtonGroup({
  children,
  variant = "default",
  size = "default",
  className,
}: {
  children: ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
}) {
  return (
    <div className={cn("inline-flex items-center rounded-md overflow-hidden border divide-x shadow-sm", className)}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                key: index,
                variant,
                size,
                className: cn("rounded-none first:rounded-l-md last:rounded-r-md border-0", child.props.className),
              })
            }
            return child
          })
        : children}
    </div>
  )
}
