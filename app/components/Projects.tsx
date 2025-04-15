"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { projects } from "@/data/index"
import Link from "next/link"

export default function Projects() {
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
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                </div>
              </div>
              <CardContent className="flex-grow bg-gradient-to-br from-secondary/10 to-secondary/5 pt-6">
                {" "}
                {/* Added pt-6 for top padding */}
                <CardDescription className="mb-6">{project.description}</CardDescription> {/* Increased mb-4 to mb-6 */}
                <div className="space-x-2">
                  {!project.sourceOnly &&
                    (project.hasDetailsPage ? (
                      <Button asChild>
                        <Link href={project.detailsUrl || "#"}>View Details</Link>
                      </Button>
                    ) : (
                      <Button asChild>
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                          Visit Site
                        </a>
                      </Button>
                    ))}
                  <Button variant={project.sourceOnly ? "default" : "outline"} asChild>
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
