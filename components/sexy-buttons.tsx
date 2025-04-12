"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, ChevronRight } from "lucide-react"
import { type ReactNode, useState } from "react"
import Link from "next/link"

interface SexyButtonProps {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: "glow" | "gradient" | "outline" | "morphing" | "liquid" | "neon"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export function SexyButton({
  children,
  href,
  className,
  onClick,
  disabled = false,
  variant = "glow",
  size = "md",
  icon,
  iconPosition = "right",
}: SexyButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  }

  const getButtonClasses = () => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:pointer-events-none",
      sizeClasses[size],
    )

    switch (variant) {
      case "glow":
        return cn(
          baseClasses,
          "bg-primary text-primary-foreground overflow-hidden",
          "before:absolute before:inset-0 before:bg-primary before:blur-xl before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-70",
          className,
        )
      case "gradient":
        return cn(
          baseClasses,
          "bg-gradient-to-r from-purple-600 via-primary to-pink-600 text-white bg-size-200 bg-pos-0 hover:bg-pos-100",
          className,
        )
      case "outline":
        return cn(
          baseClasses,
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10",
          "before:absolute before:inset-0 before:rounded-full before:border-2 before:border-primary before:opacity-0 before:transition-all before:duration-300",
          "hover:before:inset-[-4px] hover:before:opacity-100",
          className,
        )
      case "morphing":
        return cn(
          baseClasses,
          "bg-primary text-primary-foreground overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:via-primary before:to-pink-600 before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
          className,
        )
      case "liquid":
        return cn(
          baseClasses,
          "bg-primary text-primary-foreground overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/80 before:to-primary before:animate-liquid-slow before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
          className,
        )
      case "neon":
        return cn(
          baseClasses,
          "bg-background text-primary border border-primary shadow-[0_0_10px_0px_rgba(var(--primary),0.5)]",
          "hover:shadow-[0_0_20px_5px_rgba(var(--primary),0.5)] hover:text-primary-foreground hover:bg-primary",
          "transition-all duration-300",
          className,
        )
      default:
        return cn(baseClasses, className)
    }
  }

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && <span>{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </span>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={getButtonClasses()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttonContent}
    </button>
  )
}

interface FloatingButtonProps {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  color?: "primary" | "purple" | "pink" | "blue" | "green"
}

export function FloatingButton({ children, href, className, onClick, color = "primary" }: FloatingButtonProps) {
  const colorClasses = {
    primary: "bg-primary text-primary-foreground shadow-primary/30",
    purple: "bg-purple-600 text-white shadow-purple-500/30",
    pink: "bg-pink-600 text-white shadow-pink-500/30",
    blue: "bg-blue-600 text-white shadow-blue-500/30",
    green: "bg-emerald-600 text-white shadow-emerald-500/30",
  }

  const buttonClasses = cn(
    "relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full px-8 font-medium transition-all duration-300",
    "shadow-lg hover:shadow-xl hover:-translate-y-1",
    "after:absolute after:inset-0 after:rounded-full after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-20",
    "after:bg-gradient-to-r after:from-white after:to-transparent after:blur-md",
    colorClasses[color],
    className,
  )

  const buttonContent = (
    <>
      <span>{children}</span>
      <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(buttonClasses, "group")}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={cn(buttonClasses, "group")} onClick={onClick}>
      {buttonContent}
    </button>
  )
}

interface AnimatedIconButtonProps {
  children: ReactNode
  icon: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  variant?: "slide" | "rotate" | "scale" | "fade"
}

export function AnimatedIconButton({
  children,
  icon,
  href,
  className,
  onClick,
  variant = "slide",
}: AnimatedIconButtonProps) {
  const getButtonClasses = () => {
    const baseClasses =
      "relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"

    switch (variant) {
      case "slide":
        return cn(baseClasses, "group overflow-hidden", className)
      case "rotate":
        return cn(baseClasses, "group", className)
      case "scale":
        return cn(baseClasses, "group", className)
      case "fade":
        return cn(baseClasses, "group", className)
      default:
        return cn(baseClasses, className)
    }
  }

  const getIconClasses = () => {
    switch (variant) {
      case "slide":
        return "transform transition-transform duration-300 group-hover:translate-x-1"
      case "rotate":
        return "transform transition-transform duration-300 group-hover:rotate-45"
      case "scale":
        return "transform transition-transform duration-300 group-hover:scale-125"
      case "fade":
        return "opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      default:
        return ""
    }
  }

  const buttonContent = (
    <>
      <span>{children}</span>
      <span className={getIconClasses()}>{icon}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={getButtonClasses()}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={getButtonClasses()} onClick={onClick}>
      {buttonContent}
    </button>
  )
}

interface GradientBorderButtonProps {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  borderWidth?: number
  animated?: boolean
}

export function GradientBorderButton({
  children,
  href,
  className,
  onClick,
  borderWidth = 2,
  animated = true,
}: GradientBorderButtonProps) {
  const buttonClasses = cn(
    "relative inline-flex items-center justify-center rounded-lg bg-background px-6 py-3 font-medium text-foreground transition-all duration-300",
    "before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:via-primary before:to-pink-500",
    "before:content-[''] before:-z-10",
    animated && "before:animate-gradient-x hover:before:animate-gradient-x-fast",
    className,
  )

  const buttonContent = (
    <span className="flex items-center gap-2">
      {children}
      <ArrowRight className="h-4 w-4" />
    </span>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {buttonContent}
    </button>
  )
}
