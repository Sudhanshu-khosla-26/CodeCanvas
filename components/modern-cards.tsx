import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Calendar, Clock, ExternalLink, Heart, MapPin, Share, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  title: string
  description: string
  image: string
  className?: string
  children?: ReactNode
}

export function GlassmorphicCard({ title, description, image, className, children }: GlassmorphicCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-xl",
        "border border-white/20 bg-white/10 p-1",
        "dark:border-white/10 dark:bg-black/20",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="h-full rounded-lg bg-white/80 p-6 dark:bg-gray-900/90">
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        {children}
      </div>
    </div>
  )
}

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  socialLinks?: { icon: ReactNode; href: string }[]
}

export function TeamCard({ name, role, bio, image, socialLinks = [] }: TeamCardProps) {
  return (
    <Card className="group overflow-hidden border-none bg-gradient-to-br from-background to-background/80 p-1 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:from-background dark:to-background/50">
      <div className="absolute inset-px -z-10 rounded-[inherit] bg-gradient-to-br from-primary/20 via-primary/0 to-primary/20 opacity-50 transition-all duration-500 group-hover:opacity-100"></div>
      <div className="relative flex flex-col items-center rounded-[inherit] bg-background p-6 text-center">
        <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-md">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-3 text-sm font-medium text-primary">{role}</p>
        <p className="mb-4 text-sm text-muted-foreground">{bio}</p>
        {socialLinks.length > 0 && (
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  image: string
  category?: string
  isFeatured?: boolean
}

export function EventCard({ title, date, time, location, image, category, isFeatured = false }: EventCardProps) {
  return (
    <Card className="group relative overflow-hidden border-none shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {isFeatured && (
        <div className="absolute left-0 top-4 z-10 rounded-r-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-md">
          FEATURED
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {category && (
          <Badge className="absolute right-3 top-3 bg-background/80 text-foreground backdrop-blur-sm">{category}</Badge>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold line-clamp-1">{title}</h3>
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4 text-primary" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            {time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 text-primary" />
            {location}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button size="sm" className="gap-1">
            Register <ExternalLink className="h-3 w-3" />
          </Button>
          <div className="flex space-x-1">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaText?: string
  ctaLink?: string
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  ctaLink = "#",
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        isPopular
          ? "border-primary bg-primary/5 shadow-lg dark:bg-primary/10"
          : "border-border bg-background shadow-md",
      )}
    >
      {isPopular && (
        <div className="absolute right-0 top-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary"></div>
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary"></div>
          <div className="absolute bottom-0 left-0 h-16 w-16 -translate-x-1/2 translate-y-1/2 rotate-45 bg-primary"></div>
          <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-1/2 translate-y-1/2 rotate-45 bg-primary"></div>
        </div>
      )}
      <div className="relative z-10 p-6">
        {isPopular && <Badge className="absolute right-6 top-6 bg-primary text-primary-foreground">Most Popular</Badge>}
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>
        <p className="mb-6 text-sm text-muted-foreground">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <Star className="mr-2 h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className={cn(
            "w-full",
            isPopular ? "bg-primary text-primary-foreground" : "bg-primary/80 text-primary-foreground",
          )}
          asChild
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </Card>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
  rating?: number
}

export function TestimonialCard({ quote, author, role, avatar, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-background dark:to-muted/20">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
      <div className="mb-4 flex justify-between">
        <div className="flex items-center">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={author}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
        {rating > 0 && (
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn("h-4 w-4", i < rating ? "fill-primary text-primary" : "text-muted")}
                strokeWidth={1.5}
              />
            ))}
          </div>
        )}
      </div>
      <blockquote className="relative">
        <span className="absolute -left-1 -top-2 text-4xl text-primary/20">"</span>
        <p className="pl-4 text-sm text-muted-foreground">{quote}</p>
        <span className="absolute -bottom-4 right-0 text-4xl text-primary/20">"</span>
      </blockquote>
    </Card>
  )
}
