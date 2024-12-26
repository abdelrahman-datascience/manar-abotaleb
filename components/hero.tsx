"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Manar Abotaleb
            </motion.h1>
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "QA Tester",
                2000,
                "Data Scientist",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-3xl md:text-4xl text-primary mb-6"
              repeat={Infinity}
            />
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Transforming Data into Actionable Insights | Uncovering Insights through Data Science
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Leveraging data analysis and visualization to drive informed decision-making and contribute meaningfully to the field of data science.
            </motion.p>
            <motion.div 
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button size="lg" asChild>
                <Link href="/#contact">Hire Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#about">Know More</Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a href="https://github.com/manarabotaleb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/manar-abotaleb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:manar.abotaleb@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i.imgur.com/LjSlmmD.jpeg"
                alt="Manar Abotaleb"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-0"></div>
    </section>
  )
}

