import { CalendarDays, Clock, MapPin } from "lucide-react"

interface TimelineEvent {
  id: string
  time: string
  title: string
  description?: string
  location?: string
  speaker?: string
  type?: "workshop" | "presentation" | "break" | "judging" | "default"
}

interface EventTimelineProps {
  date: string
  events: TimelineEvent[]
}

export function EventTimeline({ date, events }: EventTimelineProps) {
  const getEventTypeStyles = (type: TimelineEvent["type"] = "default") => {
    switch (type) {
      case "workshop":
        return "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/30"
      case "presentation":
        return "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30"
      case "break":
        return "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30"
      case "judging":
        return "border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/30"
      default:
        return "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30"
    }
  }

  const getEventTypeDot = (type: TimelineEvent["type"] = "default") => {
    switch (type) {
      case "workshop":
        return "bg-purple-500"
      case "presentation":
        return "bg-emerald-500"
      case "break":
        return "bg-amber-500"
      case "judging":
        return "bg-rose-500"
      default:
        return "bg-slate-500"
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">{date}</h2>
      </div>

      <div className="relative border-l-2 border-muted pl-6 pb-6">
        {events.map((event, index) => (
          <div key={event.id} className="mb-8 last:mb-0">
            <div className="absolute -left-1.5 mt-1.5">
              <div className={`h-3 w-3 rounded-full ${getEventTypeDot(event.type)}`}></div>
            </div>

            <div className={`rounded-lg border p-4 ${getEventTypeStyles(event.type)}`}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{event.time}</span>

                {event.location && (
                  <>
                    <span className="mx-1">•</span>
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{event.location}</span>
                  </>
                )}
              </div>

              <h3 className="font-medium text-lg">{event.title}</h3>

              {event.speaker && <p className="text-sm font-medium mt-1">Presenter: {event.speaker}</p>}

              {event.description && <p className="text-sm text-muted-foreground mt-2">{event.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
