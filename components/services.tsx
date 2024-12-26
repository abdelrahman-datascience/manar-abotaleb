"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { BarChart2, Database, LineChart, PieChart, TableProperties, TrendingUp } from 'lucide-react'

const services = [
  {
    title: "Data Analysis",
    description: "Transform raw data into meaningful insights through comprehensive analysis and interpretation.",
    icon: BarChart2,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Data Visualization",
    description: "Create compelling visual representations of data to communicate insights effectively.",
    icon: PieChart,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Statistical Analysis",
    description: "Apply advanced statistical methods to uncover patterns and trends in your data.",
    icon: TrendingUp,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Database Management",
    description: "Design and maintain efficient database systems for optimal data organization.",
    icon: Database,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Business Intelligence",
    description: "Transform data into actionable business insights for strategic decision-making.",
    icon: LineChart,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Data Quality Assurance",
    description: "Ensure data accuracy and reliability through comprehensive quality control processes.",
    icon: TableProperties,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden">
                <CardHeader className="relative h-[200px] p-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-2">
                    <service.icon className="h-5 w-5 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg">Request Another Service</Button>
        </motion.div>
      </div>
    </section>
  )
}

