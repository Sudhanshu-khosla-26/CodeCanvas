import { FeatureCard } from "@/components/feature-card"
import { EventTimeline } from "@/components/event-timeline"

export default function DemoPage() {
  // Sample data for the feature cards
  const projectsData = [
    {
      title: "Interactive Portfolio",
      description: "A creative portfolio with 3D elements and interactive animations built with Three.js and React.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Three.js", "GSAP"],
      studentName: "Alex Johnson",
      projectUrl: "#",
      featured: true,
    },
    {
      title: "AI Study Assistant",
      description: "An AI-powered study assistant that helps students organize notes and create study plans.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "AI", "TailwindCSS"],
      studentName: "Maya Patel",
      projectUrl: "#",
    },
    {
      title: "Eco Tracker",
      description:
        "A web application that helps users track and reduce their carbon footprint through daily activities.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      tags: ["Vue.js", "D3.js", "Firebase"],
      studentName: "Carlos Rodriguez",
      projectUrl: "#",
    },
  ]

  // Sample data for the event timeline
  const timelineEvents = [
    {
      id: "1",
      time: "9:00 AM - 10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and introduction to the event by the Dean of Computer Science.",
      location: "Main Auditorium",
      type: "default",
    },
    {
      id: "2",
      time: "10:15 AM - 11:45 AM",
      title: "Web Development Workshop",
      description: "Learn modern web development techniques with React and Next.js.",
      location: "Lab 101",
      speaker: "Prof. Sarah Williams",
      type: "workshop",
    },
    {
      id: "3",
      time: "12:00 PM - 1:00 PM",
      title: "Lunch Break",
      location: "Student Center",
      type: "break",
    },
    {
      id: "4",
      time: "1:15 PM - 2:45 PM",
      title: "Student Project Presentations",
      description: "Selected students will present their innovative web projects.",
      location: "Presentation Hall",
      type: "presentation",
    },
    {
      id: "5",
      time: "3:00 PM - 4:30 PM",
      title: "Project Judging",
      description:
        "Industry experts will evaluate student projects based on creativity, technical implementation, and user experience.",
      location: "Exhibition Area",
      type: "judging",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Student Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <FeatureCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              studentName={project.studentName}
              projectUrl={project.projectUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Event Schedule</h2>
        <EventTimeline date="May 15, 2024" events={timelineEvents} />
      </section>
    </div>
  )
}
