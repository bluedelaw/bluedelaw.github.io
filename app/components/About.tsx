"use client"

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
            <p className="text-lg">
              Hello! My name is Daniel Law, and i am currently a Term 4 student at British Columbia Institute of Technology, studying Computer Systems Technology. 
              I am a passionate developer who loves to learn new technologies and build cool projects. I am always looking for new opportunities to learn and grow as a developer.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

