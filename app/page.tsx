"use client"

import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <motion.div {...fadeInUp}>
          <About />
        </motion.div>
        <motion.hr className="my-12 border-t border-primary/20" {...fadeInUp} />
        <motion.div {...fadeInUp}>
          <Projects />
        </motion.div>
        <motion.hr className="my-12 border-t border-primary/20" {...fadeInUp} />
        <motion.div {...fadeInUp}>
          <Skills />
        </motion.div>
        <motion.hr className="my-12 border-t border-primary/20" {...fadeInUp} />
        <motion.div {...fadeInUp}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

