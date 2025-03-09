"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function WaitlistAppPage() {
  // Sample content with both videos and images - replace with your actual content
  const sections = [
    {
      title: "Dashboard Overview",
      description:
        "The main dashboard provides a real-time view of the current waitlist, showing customer details, wait times, and table status at a glance. Staff can easily add new customers, notify when tables are ready, and manage the entire queue from this central interface.",
      mediaType: "video",
      mediaUrl: "/demo-video.mp4", // Replace with your actual video file
      posterUrl: "/placeholder.svg?height=600&width=800", // Optional thumbnail for video
    },
    {
      title: "Customer Management",
      description:
        "The customer management screen allows staff to collect and store customer information, including party size, special requests, and contact details. The intuitive interface makes it easy to update information and track customer status throughout their visit.",
      mediaType: "image",
      mediaUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Analytics View",
      description:
        "The analytics dashboard helps restaurant managers optimize operations by visualizing key metrics like average wait times, busiest periods, and table turnover rates. This data-driven approach enables better staffing decisions and improved customer experience.",
      mediaType: "video",
      mediaUrl: "/analytics-demo.mp4", // Replace with your actual video file
      posterUrl: "/placeholder.svg?height=600&width=800", // Optional thumbnail for video
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link href="/#projects">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="https://github.com/yourusername/waitlist-app" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Source
            </a>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Waitlist App</h1>
            <p className="text-xl">
              A modern solution for restaurants to manage customer waitlists, reduce perceived wait times, and improve
              the overall dining experience.
            </p>
          </div>

          {/* Media sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Media side */}
              <div className="w-full md:w-1/2">
                <Card className="overflow-hidden">
                  {section.mediaType === "video" ? (
                    <div className="relative w-full aspect-video">
                      <video className="w-full h-full object-cover" controls poster={section.posterUrl} playsInline>
                        <source src={section.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="relative h-[300px] md:h-[400px] w-full">
                      <Image
                        src={section.mediaUrl || "/placeholder.svg"}
                        alt={section.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </Card>
              </div>

              {/* Description side */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

