"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

interface ToggleButtonProps {
  label?: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "pill" | "switch"
}

export function ToggleButton({
  label,
  defaultChecked = false,
  onChange,
  className,
  size = "md",
  variant = "default",
}: ToggleButtonProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    const newValue = !checked
    setChecked(newValue)
    onChange?.(newValue)
  }

  const sizeClasses = {
    sm: {
      button: "h-8 text-xs",
      default: "w-14",
      pill: "w-16",
      switch: "w-12",
      icon: "h-4 w-4",
    },
    md: {
      button: "h-10 text-sm",
      default: "w-16",
      pill: "w-20",
      switch: "w-14",
      icon: "h-5 w-5",
    },
    lg: {
      button: "h-12 text-base",
      default: "w-20",
      pill: "w-24",
      switch: "w-16",
      icon: "h-6 w-6",
    },
  }

  const renderToggle = () => {
    switch (variant) {
      case "pill":
        return (
          <button
            type="button"
            className={cn(
              "relative inline-flex items-center rounded-full px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              checked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
              sizeClasses[size].button,
              sizeClasses[size].pill,
              className,
            )}
            onClick={handleToggle}
          >
            <span
              className={cn(
                "absolute inset-y-1 left-1 flex items-center justify-center rounded-full bg-white transition-all",
                checked ? "translate-x-full" : "translate-x-0",
                sizeClasses[size].button,
              )}
              style={{ width: `calc(50% - 4px)` }}
            >
              {checked ? <Check className={sizeClasses[size].icon} /> : <X className={sizeClasses[size].icon} />}
            </span>
            <span className="sr-only">{label || (checked ? "On" : "Off")}</span>
          </button>
        )

      case "switch":
        return (
          <button
            type="button"
            className={cn(
              "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              checked ? "bg-primary" : "bg-muted",
              sizeClasses[size].button,
              sizeClasses[size].switch,
              className,
            )}
            onClick={handleToggle}
            aria-pressed={checked}
            aria-label={label || "Toggle"}
          >
            <span
              className={cn(
                "absolute inset-y-1 flex aspect-square items-center justify-center rounded-full bg-white shadow-sm transition-all",
                checked ? "left-[calc(100%-4px)] -translate-x-full" : "left-1 translate-x-0",
              )}
              style={{ height: `calc(100% - 8px)` }}
            >
              {checked ? (
                <Check className={cn("text-primary", sizeClasses[size].icon)} />
              ) : (
                <X className={cn("text-muted-foreground", sizeClasses[size].icon)} />
              )}
            </span>
            <span className="sr-only">{label || (checked ? "On" : "Off")}</span>
          </button>
        )

      default:
        return (
          <button
            type="button"
            className={cn(
              "relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              checked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80",
              sizeClasses[size].button,
              sizeClasses[size].default,
              className,
            )}
            onClick={handleToggle}
            aria-pressed={checked}
          >
            {label || (checked ? "On" : "Off")}
          </button>
        )
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      {renderToggle()}
      {label && variant !== "default" && <span className="text-sm font-medium">{label}</span>}
    </div>
  )
}

interface ToggleGroupProps {
  options: { value: string; label: string }[]
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function ToggleGroup({ options, defaultValue, onChange, className }: ToggleGroupProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]?.value)

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    onChange?.(value)
  }

  return (
    <div className={cn("inline-flex rounded-md border bg-muted p-1 shadow-sm", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cn(
            "relative rounded px-3 py-1.5 text-sm font-medium transition-all focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary",
            selectedValue === option.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => handleSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
