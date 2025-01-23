"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "CityConnect",
      description: "CityConnect is an app that connects citizens with their local government, making it easier to report issues, share ideas, and engage with the community.",
      websiteUrl: "https://comp1800-bby19.web.app/",
      githubUrl: "https://github.com/bluedelaw/CityConnect",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "café de A",
      description: "A website built for a local Hong Kong cafe in Richmond, BC. The website is built using React and Tailwind CSS.",
      websiteUrl: "https://cafedea.ca",
      githubUrl: "https://github.com/bluedelaw/cafedeA",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "DanielLaw",
      description: "Personal Portfolio Website built using Next.js and Tailwind CSS.",
      websiteUrl: "https://project3.com",
      githubUrl: "https://github.com/yourusername/project3",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="h-full flex flex-col justify-between overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={`Background for ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                </div>
              </div>
              <CardContent className="flex-grow bg-gradient-to-br from-secondary/10 to-secondary/5">
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="space-x-2">
                  <Button asChild>
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      Visit Site
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


