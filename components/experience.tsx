"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase, Building2 } from 'lucide-react'

const experiences = [
  {
    title: "QA and Testing Automation Engineer",
    company: "Vodafone",
    duration: "June 2024 – Present",
    type: "Internship",
    responsibilities: "Worked on quality assurance and testing automation, ensuring software reliability and performance.",
    skills: ["Automation Testing", "QA", "Software Testing"]
  },
  {
    title: "Community Manager",
    company: "ALX Arabia",
    duration: "March 2024 – Present",
    type: "Full-time",
    responsibilities: "Facilitating community engagement and supporting initiatives for professional growth and collaboration.",
    skills: ["Community Management", "Event Planning", "Leadership"]
  }
]

export default function Experience() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} relative group hover:shadow-lg transition-shadow`}>
                <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-11' : '-left-11'} transform -translate-y-1/2`}>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                  <p className="mb-4 text-muted-foreground">{exp.responsibilities}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

