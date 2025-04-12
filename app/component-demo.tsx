"use client";

import { useState } from "react";
import {
  GlassmorphicCard,
  TeamCard,
  EventCard,
  PricingCard,
  TestimonialCard,
} from "@/components/modern-cards";
import { Modal, FullScreenModal, Drawer } from "@/components/modern-modals";
import {
  SexyButton,
  FloatingButton,
  AnimatedIconButton,
  GradientBorderButton,
} from "@/components/sexy-buttons";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function ComponentDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<
    "left" | "right" | "bottom"
  >("right");
  const [modalAnimation, setModalAnimation] = useState<
    "fade" | "zoom" | "slide-up" | "slide-right"
  >("fade");

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">
        CodeCanvas : Custom Components
      </h1>

      {/* Sexy Buttons Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Modern Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Glow Buttons</h3>
            <SexyButton variant="glow" icon={<ArrowRight />}>
              Get Started
            </SexyButton>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Gradient Buttons</h3>
            <SexyButton variant="gradient" icon={<ArrowRight />}>
              Learn More
            </SexyButton>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Outline Buttons</h3>
            <SexyButton variant="outline" icon={<ArrowRight />}>
              View Details
            </SexyButton>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Morphing Buttons</h3>
            <SexyButton variant="morphing" icon={<ArrowRight />}>
              Register Now
            </SexyButton>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Liquid Buttons</h3>
            <SexyButton variant="liquid" icon={<ArrowRight />}>
              Join Waitlist
            </SexyButton>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Neon Buttons</h3>
            <SexyButton variant="neon" icon={<ArrowRight />}>
              Explore Now
            </SexyButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Floating Buttons</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <FloatingButton color="primary">Primary</FloatingButton>
              <FloatingButton color="purple">Purple</FloatingButton>
              <FloatingButton color="pink">Pink</FloatingButton>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Animated Icon Buttons</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <AnimatedIconButton icon={<ArrowRight />} variant="slide">
                Slide
              </AnimatedIconButton>
              <AnimatedIconButton icon={<ArrowRight />} variant="rotate">
                Rotate
              </AnimatedIconButton>
              <AnimatedIconButton icon={<ArrowRight />} variant="scale">
                Scale
              </AnimatedIconButton>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <GradientBorderButton>Gradient Border Button</GradientBorderButton>
        </div>
      </section>

      {/* Modern Cards Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Modern Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <GlassmorphicCard
            title="Web Development Workshop"
            description="Learn modern web development techniques with React and Next.js in this hands-on workshop."
            image="/placeholder.svg?height=225&width=400"
          >
            <Button className="w-full">Register Now</Button>
          </GlassmorphicCard>

          <TeamCard
            name="Alex Johnson"
            role="Lead Developer"
            bio="Full-stack developer with 5 years of experience building web applications with React and Node.js."
            image="/placeholder.svg?height=128&width=128"
            socialLinks={[
              { icon: <Github className="h-4 w-4" />, href: "#" },
              { icon: <Twitter className="h-4 w-4" />, href: "#" },
              { icon: <Linkedin className="h-4 w-4" />, href: "#" },
            ]}
          />

          <EventCard
            title="Student Hackathon 2024"
            date="May 15-16, 2024"
            time="9:00 AM - 5:00 PM"
            location="Main Campus, Building A"
            image="/placeholder.svg?height=200&width=400"
            category="Competition"
            isFeatured={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PricingCard
            title="Student Plan"
            price="Free"
            description="Perfect for students looking to learn and build projects."
            features={[
              "Access to workshops",
              "Project templates",
              "Community support",
              "Basic resources",
            ]}
            isPopular={true}
          />

          <TestimonialCard
            quote="The web development workshop was amazing! I learned so much and was able to build my first React application by the end of the day."
            author="Sarah Williams"
            role="Computer Science Student"
            avatar="/placeholder.svg?height=48&width=48"
            rating={5}
          />
        </div>
      </section>

      {/* Modals Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Interactive Modals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Animated Modals</h3>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Button
                variant="outline"
                size="sm"
                className={modalAnimation === "fade" ? "bg-primary/20" : ""}
                onClick={() => setModalAnimation("fade")}
              >
                Fade
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={modalAnimation === "zoom" ? "bg-primary/20" : ""}
                onClick={() => setModalAnimation("zoom")}
              >
                Zoom
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={modalAnimation === "slide-up" ? "bg-primary/20" : ""}
                onClick={() => setModalAnimation("slide-up")}
              >
                Slide Up
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={
                  modalAnimation === "slide-right" ? "bg-primary/20" : ""
                }
                onClick={() => setModalAnimation("slide-right")}
              >
                Slide Right
              </Button>
            </div>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Full Screen Modal</h3>
            <Button onClick={() => setIsFullScreenModalOpen(true)}>
              Open Full Screen
            </Button>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-medium mb-2">Drawer</h3>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Button
                variant="outline"
                size="sm"
                className={drawerPosition === "left" ? "bg-primary/20" : ""}
                onClick={() => setDrawerPosition("left")}
              >
                Left
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={drawerPosition === "right" ? "bg-primary/20" : ""}
                onClick={() => setDrawerPosition("right")}
              >
                Right
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={drawerPosition === "bottom" ? "bg-primary/20" : ""}
                onClick={() => setDrawerPosition("bottom")}
              >
                Bottom
              </Button>
            </div>
            <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
          </div>
        </div>

        {/* Modal Components */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Event Registration"
          animation={modalAnimation}
        >
          <div className="space-y-4">
            <p>
              Register for the upcoming student hackathon and showcase your
              skills!
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>Register</Button>
            </div>
          </div>
        </Modal>

        <FullScreenModal
          isOpen={isFullScreenModalOpen}
          onClose={() => setIsFullScreenModalOpen(false)}
          title="Student Project Gallery"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <GlassmorphicCard
                key={i}
                title={`Project ${i}`}
                description="A student project showcasing creativity and technical skills."
                image="/placeholder.svg?height=225&width=400"
              >
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </GlassmorphicCard>
            ))}
          </div>
        </FullScreenModal>

        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Menu"
          position={drawerPosition}
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Events
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Projects
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Resources
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
            </div>
            <div className="pt-4 border-t">
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </Drawer>
      </section>
    </div>
  );
}
