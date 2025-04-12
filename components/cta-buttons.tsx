"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, ExternalLink, Download, Play } from "lucide-react"
import type { ReactNode } from "react"
import Link from "next/link"

interface CTAButtonProps {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  secondary?: boolean
  icon?: ReactNode
}

export function PrimaryCtaButton({ children, href, className, onClick, icon }: CTAButtonProps) {
  const buttonClasses = cn(
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/80 px-8 py-3 font-bold text-white transition-all duration-300 hover:from-primary/90 hover:to-primary",
    className,
  )

  const content = (
    <>
      <span className="relative flex items-center gap-2">
        {children}
        {icon || <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  )
}

export function SecondaryCtaButton({ children, href, className, onClick, icon }: CTAButtonProps) {
  const buttonClasses = cn(
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-primary shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg dark:bg-gray-800 dark:text-primary-foreground dark:hover:bg-gray-700",
    className,
  )

  const content = (
    <>
      <span className="relative flex items-center gap-2">
        {children}
        {icon || (
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  )
}

export function DownloadButton({ children, href, className, onClick }: CTAButtonProps) {
  const buttonClasses = cn(
    "group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary transition-all hover:border-primary/30 hover:bg-primary/10 dark:border-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20",
    className,
  )

  const content = (
    <>
      <Download className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:scale-110" />
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses} download>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  )
}

export function PlayButton({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className,
      )}
      aria-label="Play video"
    >
      <Play className="h-6 w-6 fill-current transition-transform group-hover:scale-110" />
    </button>
  )
}
