"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Git"]

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">My Skills</h2>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Badge variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

