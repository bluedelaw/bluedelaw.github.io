"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1 className="text-2xl font-bold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Daniel Law
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            {["about", "projects", "skills", "contact", "resume"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={item === "resume" ? "/resume" : `#${item}`}>
                  <Button variant={scrolled ? "ghost" : "default"}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Button>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

