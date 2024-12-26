"use client"

import { motion } from "framer-motion"
import { Database, BarChart, LineChart, Brain, MessageSquare, Code } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "Python",
    level: 90,
    icon: Code,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Data Analysis",
    level: 85,
    icon: BarChart,
    color: "from-green-500 to-green-600"
  },
  {
    name: "Data Visualization",
    level: 88,
    icon: LineChart,
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "SQL",
    level: 82,
    icon: Database,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    name: "Problem Solving",
    level: 95,
    icon: Brain,
    color: "from-pink-500 to-pink-600"
  },
  {
    name: "Communication",
    level: 92,
    icon: MessageSquare,
    color: "from-indigo-500 to-indigo-600"
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                    </div>
                  </div>
                  <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
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

