import { CustomButton, AnimatedButton, IconButton, ButtonGroup } from "@/components/custom-buttons"
import { PrimaryCtaButton, SecondaryCtaButton, DownloadButton, PlayButton } from "@/components/cta-buttons"
import { ToggleButton, ToggleGroup } from "@/components/toggle-buttons"
import {
  ArrowRight,
  Bell,
  Calendar,
  Check,
  ChevronRight,
  Download,
  Heart,
  Mail,
  Plus,
  Share,
  Star,
  ThumbsUp,
} from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Modern Button Collection</h1>

      {/* Custom Button Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton>Default Button</CustomButton>
          <CustomButton variant="gradient">Gradient Button</CustomButton>
          <CustomButton variant="outline">Outline Button</CustomButton>
          <CustomButton variant="soft">Soft Button</CustomButton>
          <CustomButton variant="glass" className="bg-primary/20">
            Glass Button
          </CustomButton>
          <CustomButton variant="3d">3D Button</CustomButton>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <CustomButton size="sm">Small</CustomButton>
          <CustomButton size="default">Default</CustomButton>
          <CustomButton size="lg">Large</CustomButton>
          <CustomButton size="xl">Extra Large</CustomButton>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton icon={<Plus />} iconPosition="left">
            Add New
          </CustomButton>
          <CustomButton icon={<ArrowRight />}>Continue</CustomButton>
          <CustomButton variant="outline" icon={<Download />} iconPosition="left">
            Download
          </CustomButton>
          <CustomButton variant="soft" icon={<Share />}>
            Share
          </CustomButton>
        </div>
      </section>

      {/* Animated Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Animated Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <AnimatedButton animation="pulse">Pulse Effect</AnimatedButton>
          <AnimatedButton animation="bounce">Bounce Effect</AnimatedButton>
          <AnimatedButton animation="shine">Shine Effect</AnimatedButton>
          <AnimatedButton animation="expand">Expand Effect</AnimatedButton>
          <AnimatedButton animation="slide" variant="outline">
            Slide Effect
          </AnimatedButton>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Icon Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton icon={<Heart />} label="Like" />
          <IconButton icon={<Bell />} label="Notifications" variant="outline" />
          <IconButton icon={<Mail />} label="Email" variant="secondary" />
          <IconButton icon={<Star />} label="Favorite" variant="ghost" />
          <IconButton icon={<Calendar />} label="Calendar" size="sm" />
          <IconButton icon={<ThumbsUp />} label="Approve" size="lg" />
        </div>
      </section>

      {/* Button Groups */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Button Groups</h2>
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <CustomButton>Day</CustomButton>
            <CustomButton>Week</CustomButton>
            <CustomButton>Month</CustomButton>
          </ButtonGroup>

          <ButtonGroup variant="outline">
            <CustomButton icon={<ChevronRight />} iconPosition="left">
              Previous
            </CustomButton>
            <CustomButton>1</CustomButton>
            <CustomButton>2</CustomButton>
            <CustomButton>3</CustomButton>
            <CustomButton icon={<ChevronRight />}>Next</CustomButton>
          </ButtonGroup>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Call to Action Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <PrimaryCtaButton href="#">Register Now</PrimaryCtaButton>
          <SecondaryCtaButton href="#">Learn More</SecondaryCtaButton>
          <DownloadButton href="#">Download Resources</DownloadButton>
          <div className="flex items-center gap-3">
            <PlayButton />
            <span className="font-medium">Watch Demo</span>
          </div>
        </div>
      </section>

      {/* Toggle Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Toggle Buttons</h2>
        <div className="flex flex-wrap gap-8">
          <ToggleButton label="Notifications" />
          <ToggleButton label="Dark Mode" variant="pill" defaultChecked />
          <ToggleButton label="Sound" variant="switch" />
          <ToggleGroup
            options={[
              { value: "all", label: "All" },
              { value: "active", label: "Active" },
              { value: "completed", label: "Completed" },
            ]}
            defaultValue="active"
          />
        </div>
      </section>

      {/* Full Width Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Full Width Buttons</h2>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <CustomButton fullWidth variant="gradient">
            Submit Application
          </CustomButton>
          <CustomButton fullWidth variant="outline">
            Save Draft
          </CustomButton>
          <CustomButton fullWidth variant="soft" icon={<Check />}>
            Complete Registration
          </CustomButton>
        </div>
      </section>
    </div>
  )
}
