"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Trophy, GraduationCap } from 'lucide-react'

const achievements = [
  {
    title: "Data Science Program",
    organization: "ALX and ExploreAI",
    description: "Successfully completed comprehensive data science training program",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Data Analyst Certification",
    organization: "DataCamp",
    description: "Certified in Python-based data analysis and visualization",
    icon: Award,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Business Analytics",
    organization: "Career180",
    description: "Advanced certification in Excel and business analytics",
    icon: Trophy,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Udacity Achievement",
    organization: "Udacity",
    description: "Completed the Data Analysis Challenger Track",
    icon: BookOpen,
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Udacity Achievement",
    organization: "Udacity",
    description: "Completed the Data Analysis Challenger Track",
    icon: BookOpen,
    color: "from-pink-500 to-pink-600"
  }
]

export default function Achievements() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Certifications
        </motion.h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2">Data Science Program</h3>
                    <p className="text-primary mb-2">ALX and ExploreAI</p>
                    <p className="text-muted-foreground">Successfully completed comprehensive data science training program, covering advanced topics in machine learning, data visualization, and statistical analysis. This intensive program has equipped me with the skills to tackle complex data challenges and derive meaningful insights from large datasets.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.slice(1).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <achievement.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-primary mb-2">{achievement.organization}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

