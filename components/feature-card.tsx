import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  imageUrl: string
  tags?: string[]
  studentName: string
  projectUrl?: string
  featured?: boolean
}

export function FeatureCard({
  title,
  description,
  imageUrl,
  tags = [],
  studentName,
  projectUrl,
  featured = false,
}: FeatureCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? "border-2 border-primary" : ""}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {featured && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            <Sparkles className="h-3 w-3" />
            <span>Featured Project</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm">By {studentName}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {projectUrl && (
          <Button asChild className="w-full gap-1">
            <Link href={projectUrl}>
              <span>View Project</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
