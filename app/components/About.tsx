"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/portfolioPicture.jpg?height=500&width=500"
                    alt="Your Name"
                    fill
                    style={{
                      objectFit: "cover",
                      transform: "scale(1.3) translateX(5px)", // Zoom in + Move right
                    }}
                    className="rounded-full"
                  />
                </div>
              </div>


              <div className="w-full md:w-2/3">
                <p className="text-lg">
                  Hello! My name is Daniel Law, and i am currently a Term 4 student at British Columbia Institute of Technology, studying Computer Systems Technology.
                  I am a passionate developer who loves to learn new technologies and build cool projects. I am always looking for new opportunities to learn and grow as a developer.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

